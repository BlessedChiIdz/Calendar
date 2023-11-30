import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorators";
@Injectable()
export class RolesGuar implements CanActivate{

    constructor(private  jwtServ:JwtService,private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const reqRoles =this.reflector.getAllAndOverride<string[]>(ROLES_KEY,[
                context.getHandler(),
                context.getClass(),
            ])
            if(!reqRoles){
                return true
            }
            const req = context.switchToHttp().getRequest()
            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]


            if(bearer!=='Bearer'||!token){
                throw new UnauthorizedException({
                    message:"Unauthorized"
                })
            }
            const user = this.jwtServ.verify(token)
            req.user = user;
            return user.roles.some(role=>reqRoles.includes(role.value));
        }catch (e){
            throw new HttpException(
                "NoAccess",HttpStatus.FORBIDDEN
            )
        }
    }

}