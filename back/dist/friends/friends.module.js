"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsModule = void 0;
const common_1 = require("@nestjs/common");
const friends_controller_1 = require("./friends.controller");
const friends_service_1 = require("./friends.service");
const friends_model_1 = require("./friends.model");
const sequelize_1 = require("@nestjs/sequelize");
let FriendsModule = class FriendsModule {
};
exports.FriendsModule = FriendsModule;
exports.FriendsModule = FriendsModule = __decorate([
    (0, common_1.Module)({
        controllers: [friends_controller_1.FriendsController],
        providers: [friends_service_1.FriendsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([friends_model_1.Friends]),
        ],
        exports: [
            friends_service_1.FriendsService
        ]
    })
], FriendsModule);
//# sourceMappingURL=friends.module.js.map