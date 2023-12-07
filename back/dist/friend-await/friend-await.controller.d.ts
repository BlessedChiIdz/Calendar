import { FriendAwaitService } from "./friend-await.service";
import { FriendDeleteDto, FriendsWDto } from "./dto/friends.dto";
export declare class FriendAwaitController {
    private friendWService;
    constructor(friendWService: FriendAwaitService);
    create(dto: FriendsWDto): Promise<import("./friend-await.model").FriendsW>;
    AddToMainTable(dto: FriendDeleteDto): Promise<import("../friends/friends.model").Friends>;
}
