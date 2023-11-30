import { CreateRolesDto } from "./dto/create-roles.dto";
import { Role } from "./roles.model";
export declare class RolesService {
    private roleRep;
    constructor(roleRep: typeof Role);
    createRole(dto: CreateRolesDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
