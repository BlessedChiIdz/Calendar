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
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const plans_model_1 = require("./plans.model");
const friends_service_1 = require("../friends/friends.service");
let PlansService = class PlansService {
    constructor(plansRep, friendService) {
        this.plansRep = plansRep;
        this.friendService = friendService;
    }
    async creatPlan(dto) {
        const plan = await this.plansRep.create(dto);
        return plan;
    }
    async findPlans(value) {
        const plans = await this.plansRep.findAll({ where: { value } });
        return plans;
    }
    async linkPlanToAllFriends(dto) {
        const plan = await this.creatPlan(dto);
        const id = dto.id;
        const friends = await this.friendService.getAll(id);
        await friends.forEach(function (friend) {
            friend.$set('plans', [plan.id]);
        });
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(plans_model_1.Plan)),
    __metadata("design:paramtypes", [Object, friends_service_1.FriendsService])
], PlansService);
//# sourceMappingURL=plans.service.js.map