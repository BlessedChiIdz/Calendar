import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Plan } from "../plans/plans.model";
interface UserAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserAttrs> {
    id: number;
    nickName: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    plans: Plan[];
}
export {};
