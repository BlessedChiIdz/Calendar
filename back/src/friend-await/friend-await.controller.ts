import {Body, Controller, Get, Post} from '@nestjs/common';
import {FriendAwaitService} from "./friend-await.service";
import {FriendDeleteDto, FriendsWDto} from "./dto/friends.dto";
import {FriendsService} from "../friends/friends.service";
import {FriendsDto} from "../friends/dto/friends.dto";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {FriendsW} from "./friend-await.model";
@Controller('friend-await')
export class FriendAwaitController {
    constructor(private friendWService: FriendAwaitService) {
    }

    @ApiOperation({summary:'CreateTempFriend'})
    @Post('/create')
    create(@Body() dto:FriendsWDto){
        return this.friendWService.create(dto);
    }
    @ApiOperation({summary:'AddTempFriendToMainFriendTable'})
    @Post('/addToMainTb')
    AddToMainTable(@Body() dto:FriendDeleteDto){
        return this.friendWService.addToMainTB(dto.idForDel)
    }
    @ApiResponse({status:200,type:FriendsW})
    @Get('/get')
    GetRequests(@Body() dto:FriendsWDto){
        return
    }

}
