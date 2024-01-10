import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { FriendsService } from "../friends/friends.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    private friendService;
    constructor(userRepository: typeof User, roleService: RolesService, friendService: FriendsService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    linkPlanToAllFriends(dto: CreateUserDto): Promise<void>;
}
