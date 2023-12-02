import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface PlansAttrs {
    date: string;
    description: string;
}
export declare class Plans extends Model<Plans, PlansAttrs> {
    id: number;
    date: string;
    description: string;
    userIdPost: number;
    userIdGet: number;
    author: User;
}
export {};
