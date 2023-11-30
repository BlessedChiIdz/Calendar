import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Plans } from "../plans/plans.model";
interface UserAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    plans: Plans[];
}
export {};
