import { FriendsService } from "./friends.service";
import { FriendsDto } from "./dto/friends.dto";
export declare class FriendsController {
    private friendService;
    constructor(friendService: FriendsService);
    create(dto: FriendsDto): Promise<import("./friends.model").Friends>;
}
