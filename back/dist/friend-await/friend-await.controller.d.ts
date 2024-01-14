import { FriendAwaitService } from "./friend-await.service";
import { FriendDeleteDto, FriendsWDto } from "./dto/friends.dto";
import { FriendsW } from "./friend-await.model";
export declare class FriendAwaitController {
    private friendWService;
    constructor(friendWService: FriendAwaitService);
    create(dto: FriendsWDto): Promise<FriendsW>;
    AddToMainTableAll(dto: FriendDeleteDto): Promise<void>;
    AddToMainTableSome(ids: number[]): Promise<void>;
    GetRequest(num: number): Promise<FriendsW[]>;
}
