import { Model } from "sequelize-typescript";
import { Friends } from "../friends/friends.model";
interface PlansAttrs {
    date: string;
    description: string;
}
export declare class Plans extends Model<Plans, PlansAttrs> {
    id: number;
    date: string;
    description: string;
    userIdPost: number;
    FriendsIdGet: number;
    author: Friends;
}
export {};
