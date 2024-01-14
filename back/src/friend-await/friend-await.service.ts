import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FriendsW} from "./friend-await.model";
import {FriendsWDto, User1Dto} from "./dto/friends.dto";
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

    async getById(id:number):Promise<FriendsW[]>{
        const friend = await this.friendW.findAll({
            where:{
                user1Id:id,
            }
        })
        return friend
    }

    async delete(idForDel:number):Promise<FriendsW[]>{
        const friend:FriendsW[] = await this.getById(idForDel);
        friend.map((fr)=>{
            this.friendW.destroy({
                where:{
                    id:fr.id
                }
            })
        })
        return friend
    }

    async addToMainTBAllAwait(idForDel:number){
        const deleted:FriendsW[] = await this.delete(idForDel)
        let friendsM:FriendsWDto[] = [];
        deleted.forEach(function (friend,ndx){
            const temp:FriendsWDto = new FriendsWDto(friend.user1Id,friend.user2Id);
            friendsM[ndx] = temp;
        })
        friendsM.map( (fr)=>{
            this.friendMainTbService.create(fr);
        })
    }
    async addToMainTbSomeUsers(ids:number[]){
        ids.map(async (id)=>{
            const deleted:FriendsW[] = await this.delete(id);
            let friendsM:FriendsWDto[] = [];
            deleted.forEach(function (friend,ndx){
                const temp:FriendsWDto = new FriendsWDto(friend.user1Id,friend.user2Id);
                friendsM[ndx] = temp;
            })
            friendsM.map( (fr)=>{
                this.friendMainTbService.create(fr);
            })
        })
    }
}
