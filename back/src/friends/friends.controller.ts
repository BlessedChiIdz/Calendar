import {Body, Controller, Post} from '@nestjs/common';
import {FriendsService} from "./friends.service";
import {FriendsDto} from "./dto/friends.dto";

@Controller('friends')
export class FriendsController {
    constructor(private friendService: FriendsService) {
    }
}
