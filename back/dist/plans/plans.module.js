"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansModule = void 0;
const common_1 = require("@nestjs/common");
const plans_controller_1 = require("./plans.controller");
const plans_service_1 = require("./plans.service");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const plans_model_1 = require("./plans.model");
const user_plans_model_1 = require("./user-plans.model");
let PlansModule = class PlansModule {
};
exports.PlansModule = PlansModule;
exports.PlansModule = PlansModule = __decorate([
    (0, common_1.Module)({
        controllers: [plans_controller_1.PlansController],
        providers: [plans_service_1.PlansService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, plans_model_1.Plan, user_plans_model_1.UserPlans]),
        ],
        exports: [
            plans_service_1.PlansService
        ]
    })
], PlansModule);
//# sourceMappingURL=plans.module.js.map