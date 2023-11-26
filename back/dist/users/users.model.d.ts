import { Model } from "sequelize-typescript";
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
}
export {};
