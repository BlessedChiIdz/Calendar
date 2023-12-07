import {Body, Controller, Get, Post} from '@nestjs/common';
import {FriendAwaitService} from "./friend-await.service";
import {FriendDeleteDto, FriendsWDto} from "./dto/friends.dto";
import {FriendsService} from "../friends/friends.service";
import {FriendsDto} from "../friends/dto/friends.dto";

@Controller('friend-await')
export class FriendAwaitController {
    constructor(private friendWService: FriendAwaitService) {
    }

    @Post('/create')
    create(@Body() dto:FriendsWDto){
        return this.friendWService.create(dto);
    }

    @Post('/addToMainTb')
    AddToMainTable(@Body() dto:FriendDeleteDto){
        return this.friendWService.addToMainTB(dto.idForDel)
    }
}
