import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface PlansAttrs {
    date: string;
    description: string;
}
export declare class Plan extends Model<Plan, PlansAttrs> {
    id: number;
    date: string;
    description: string;
    users: User[];
}
export {};
