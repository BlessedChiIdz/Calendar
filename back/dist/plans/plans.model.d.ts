import { Model } from "sequelize-typescript";
import { Friends } from "../friends/friends.model";
interface PlansAttrs {
    date: string;
    description: string;
}
export declare class Plan extends Model<Plan, PlansAttrs> {
    id: number;
    date: string;
    description: string;
    users: Friends[];
}
export {};
