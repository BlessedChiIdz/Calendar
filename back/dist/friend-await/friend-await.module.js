"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendAwaitModule = void 0;
const common_1 = require("@nestjs/common");
const friend_await_service_1 = require("./friend-await.service");
const friend_await_controller_1 = require("./friend-await.controller");
const sequelize_1 = require("@nestjs/sequelize");
const friend_await_model_1 = require("./friend-await.model");
const friends_module_1 = require("../friends/friends.module");
let FriendAwaitModule = class FriendAwaitModule {
};
exports.FriendAwaitModule = FriendAwaitModule;
exports.FriendAwaitModule = FriendAwaitModule = __decorate([
    (0, common_1.Module)({
        controllers: [friend_await_controller_1.FriendAwaitController],
        providers: [friend_await_service_1.FriendAwaitService],
        imports: [
            (0, common_1.forwardRef)(() => friends_module_1.FriendsModule),
            sequelize_1.SequelizeModule.forFeature([friend_await_model_1.FriendsW]),
        ],
    })
], FriendAwaitModule);
//# sourceMappingURL=friend-await.module.js.map