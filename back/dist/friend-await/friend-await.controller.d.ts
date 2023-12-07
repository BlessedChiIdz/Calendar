import { FriendAwaitService } from "./friend-await.service";
import { FriendDeleteDto, FriendsWDto, User1Dto } from "./dto/friends.dto";
import { FriendsW } from "./friend-await.model";
export declare class FriendAwaitController {
    private friendWService;
    constructor(friendWService: FriendAwaitService);
    create(dto: FriendsWDto): Promise<FriendsW>;
    AddToMainTable(dto: FriendDeleteDto): Promise<import("../friends/friends.model").Friends>;
    GetRequest(dto: User1Dto): Promise<FriendsWDto[]>;
}
