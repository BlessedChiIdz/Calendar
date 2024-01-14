import {Body, Controller, Get, Param, ParseArrayPipe, Post} from '@nestjs/common';
import {FriendAwaitService} from "./friend-await.service";
import { FriendDeleteDto, FriendsWDto, User1Dto} from "./dto/friends.dto";
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
    @Post('/addToMainTbAllAwait')
    AddToMainTableAll(@Body() dto:FriendDeleteDto){
        return this.friendWService.addToMainTBAllAwait(dto.idForDel)
    }
    @Post('/addToMainTbSomeAwait')
    AddToMainTableSome(
        @Body(new ParseArrayPipe({items: Number,separator:','}))
        ids:number[],
    ){
        return this.friendWService.addToMainTbSomeUsers(ids)
    }
    @Get('/:num')
    GetRequest(@Param('num') num:number){
        return this.friendWService.getById(num)
    }


}
