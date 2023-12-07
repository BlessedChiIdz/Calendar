import { FriendsW } from "./friend-await.model";
import { FriendsWDto } from "./dto/friends.dto";
import { FriendsDto } from "../friends/dto/friends.dto";
import { Friends } from "../friends/friends.model";
import { FriendsService } from "../friends/friends.service";
export declare class FriendAwaitService {
    private friendW;
    private friendMainTbService;
    constructor(friendW: typeof FriendsW, friendMainTbService: FriendsService);
    create(dto: FriendsWDto): Promise<FriendsW>;
    getById(id: number): Promise<FriendsW>;
    delete(idForDel: number): Promise<FriendsDto>;
    addToMainTB(idForDel: number): Promise<Friends>;
    Get(dto: FriendsWDto): Promise<void>;
}
