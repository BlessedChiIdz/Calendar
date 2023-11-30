import { Injectable } from '@nestjs/common';
import {CreateRolesDto} from "./dto/create-roles.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRep:typeof Role) {
    }

    async createRole(dto:CreateRolesDto){
        const role = await this.roleRep.create(dto)
        return role
    }

    async getRoleByValue(value:string){
        const role = await this.roleRep.findOne({where:{value}})
        return role
    }
}
