import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FriendsW} from "./friend-await.model";
import {FriendsWDto} from "./dto/friends.dto";
import {FriendsDto} from "../friends/dto/friends.dto";
import {Friends} from "../friends/friends.model";
import {FriendsService} from "../friends/friends.service";

@Injectable()
export class FriendAwaitService {
    constructor(@InjectModel(FriendsW) private friendW: typeof FriendsW,
                private friendMainTbService: FriendsService) {
    }

    async create(dto:FriendsWDto){
        const friendW = await this.friendW.create(dto)
        return friendW
    }

    async getById(id:number){
        const friend = await this.friendW.findByPk(id)
        return friend
    }

    async delete(idForDel:number):Promise<FriendsDto>{
        const friend:FriendsDto = await this.getById(idForDel);
        await this.friendW.destroy({where:{
            id:idForDel
            }})
        return friend
    }

    async addToMainTB(idForDel:number){
        const deleted = await this.delete(idForDel)
        const datas:FriendsDto = {
            user1Id:deleted.user1Id,
            user2Id:deleted.user2Id
        }
        const friend = await this.friendMainTbService.create(datas)
        return friend
    }
    async Get(dto:FriendsWDto){
        const friends:FriendsWDto[] = await this.friendW.findAll({
            where:{
                user1Id:dto.user1Id
            }
        })
    }
}
