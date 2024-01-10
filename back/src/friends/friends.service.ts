import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Friends} from "./friends.model";
import {Plan} from "../plans/plans.model";
import {FriendsDto} from "./dto/friends.dto";

@Injectable()
export class FriendsService {

    constructor(@InjectModel(Friends) private friendsRep:typeof  Friends) {
    }

    async create(dto:FriendsDto){
        const friend = await this.friendsRep.create(dto)
        return friend
    }
    async getAll(mainUserId:number){
        const friends:Friends[] = await this.friendsRep.findAll({where:{user1Id:mainUserId}})
        return friends;
    }
}
