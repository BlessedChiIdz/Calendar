"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const roles_service_1 = require("../roles/roles.service");
const friends_service_1 = require("../friends/friends.service");
const plans_service_1 = require("../plans/plans.service");
let UsersService = class UsersService {
    constructor(userRepository, roleService, friendService, plansService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.friendService = friendService;
        this.plansService = plansService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN");
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getAllUsersByIds(ids) {
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({ rejectOnEmpty: undefined, where: { email }, include: { all: true } });
        return user;
    }
    async getUserById(id) {
        const user = await this.userRepository.findByPk(id);
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('User or Role undefined', common_1.HttpStatus.NOT_FOUND);
    }
    async linkPlanToFriends(dto) {
        const plan = await this.plansService.creatPlan(dto);
        dto.usersId.map(async (id) => {
            const user = await this.getUserById(id);
            user.$set('plans', plan);
        });
    }
    async linkCreatedPlan(id) {
        const user = await this.userRepository.findByPk(id);
        const plans = user.plans;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        friends_service_1.FriendsService,
        plans_service_1.PlansService])
], UsersService);
//# sourceMappingURL=users.service.js.map