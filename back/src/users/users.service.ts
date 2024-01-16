import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";

import {Friends} from "../friends/friends.model";
import {LinkPlanDto} from "./dto/link-plan.dto";
import {FriendsService} from "../friends/friends.service";
import {PlansService} from "../plans/plans.service";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository:typeof User,
                private roleService:RolesService,
                private friendService:FriendsService,
                private plansService:PlansService,
                ) {
    }

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles',[role.id])
        user.roles = [role]
        return user;

    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }

    async getAllUsersByIds(ids:number[]){

    }
    async getUserByEmail(email:string){
        const user = await this.userRepository.findOne({rejectOnEmpty: undefined, where:{email},include:{all:true}})
        return user
    }
    async getUserById(id:number){
        const user:User = await this.userRepository.findByPk(id);
        return user
    }
    async addRole(dto:AddRoleDto){
        const user = await  this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user){
            await user.$add('role',role.id);
            return dto;
        }
        throw new HttpException('User or Role undefined',HttpStatus.NOT_FOUND)
    }

    async linkPlanToFriends(dto:LinkPlanDto){
        const plan = await this.plansService.creatPlan(dto);
        dto.usersId.map(async (id)=>{
            const user = await this.getUserById(id);
            user.$set('plans',plan)
        })
    }
    async linkCreatedPlan(id:number){
        const user = await this.userRepository.findByPk(id);
        const plans = user.plans;
    }
}
