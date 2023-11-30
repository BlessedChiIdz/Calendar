import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface RoleAttrs {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleAttrs> {
    id: number;
    value: string;
    description: string;
    users: User[];
}
export {};
