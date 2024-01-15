import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { LinkPlanDto } from "./dto/link-plan.dto";
import { FriendsService } from "../friends/friends.service";
import { PlansService } from "../plans/plans.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    private friendService;
    private plansService;
    constructor(userRepository: typeof User, roleService: RolesService, friendService: FriendsService, plansService: PlansService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getAllUsersByIds(ids: number[]): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    linkPlanToFriends(dto: LinkPlanDto): Promise<void>;
}
