import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {FriendsService} from "./friends.service";
import {FriendsDto} from "./dto/friends.dto";

@Controller('friends')
export class FriendsController {
    constructor(private friendService: FriendsService) {

    }
    @Get('/:value')
    getAll(@Param('value') value:number){
        const users = this.friendService.getAll(value)
        return users;
    }


}
