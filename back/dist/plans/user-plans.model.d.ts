import { Model } from "sequelize-typescript";
export declare class UserPlans extends Model<UserPlans> {
    id: number;
    planId: number;
    userId: number;
}
