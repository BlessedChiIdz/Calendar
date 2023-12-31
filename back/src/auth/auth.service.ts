import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as Http from "http";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";
@Injectable()
export class AuthService {

    constructor(private userService:UsersService,
                private jwtService:JwtService) {
    }

    async login(userDto:CreateUserDto){
        const user = await this.validateUser(userDto)
        return this.genTok(user)
    }

    async registration(userDto:CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException("User already exist",HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash(userDto.password,5)
        const user = await this.userService.createUser({...userDto,password:hashPass})
        return this.genTok(user)
    }
    private async genTok(user:User){
        const payload = {email:user.email,id: user.id,roles: user.roles}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwrodEq = await bcrypt.compare(userDto.password,user.password)
        if(user && passwrodEq) {
            return user
        }
        throw new UnauthorizedException({message:"Wrong Email or Password"})
    }
}
