import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { LinkPlanDto } from "./dto/link-plan.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    Link(dto: LinkPlanDto): Promise<void>;
}
