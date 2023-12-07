import { Friends } from "./friends.model";
import { FriendsDto } from "./dto/friends.dto";
export declare class FriendsService {
    private friendsRep;
    constructor(friendsRep: typeof Friends);
    create(dto: FriendsDto): Promise<Friends>;
}
