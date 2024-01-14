import { Model } from "sequelize-typescript";
interface FriendsAttr {
    user1Id: number;
    user2Id: number;
}
export declare class Friends extends Model<Friends, FriendsAttr> {
    id: number;
    user1Id: number;
    user2Id: number;
}
export {};
