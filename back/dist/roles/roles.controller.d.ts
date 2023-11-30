import { RolesService } from "./roles.service";
import { CreateRolesDto } from "./dto/create-roles.dto";
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: CreateRolesDto): Promise<import("./roles.model").Role>;
    getByValue(value: string): Promise<import("./roles.model").Role>;
}
