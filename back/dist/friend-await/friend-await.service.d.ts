import { FriendsW } from "./friend-await.model";
import { FriendsWDto } from "./dto/friends.dto";
import { FriendsService } from "../friends/friends.service";
export declare class FriendAwaitService {
    private friendW;
    private friendMainTbService;
    constructor(friendW: typeof FriendsW, friendMainTbService: FriendsService);
    create(dto: FriendsWDto): Promise<FriendsW>;
    getById(id: number): Promise<FriendsW[]>;
    delete(idForDel: number): Promise<FriendsW[]>;
    addToMainTBAllAwait(idForDel: number): Promise<void>;
    addToMainTbSomeUsers(ids: number[]): Promise<void>;
}
