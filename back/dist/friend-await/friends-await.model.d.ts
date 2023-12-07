import { Model } from "sequelize-typescript";
interface FriendsAwait {
    user1Id: number;
    user2Id: number;
}
export declare class FriendsW extends Model<FriendsW, FriendsAwait> {
    id: number;
    user1Id: number;
    user2Id: number;
}
export {};
