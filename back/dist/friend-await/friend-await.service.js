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
exports.FriendAwaitService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const friend_await_model_1 = require("./friend-await.model");
const friends_service_1 = require("../friends/friends.service");
let FriendAwaitService = class FriendAwaitService {
    constructor(friendW, friendMainTbService) {
        this.friendW = friendW;
        this.friendMainTbService = friendMainTbService;
    }
    async create(dto) {
        const friendW = await this.friendW.create(dto);
        return friendW;
    }
    async getById(id) {
        const friend = await this.friendW.findByPk(id);
        return friend;
    }
    async delete(idForDel) {
        const friend = await this.getById(idForDel);
        await this.friendW.destroy({ where: {
                id: idForDel
            } });
        return friend;
    }
    async addToMainTB(idForDel) {
        const deleted = await this.delete(idForDel);
        const datas = {
            user1Id: deleted.user1Id,
            user2Id: deleted.user2Id
        };
        const friend = await this.friendMainTbService.create(datas);
        return friend;
    }
    async Get(dto) {
        const friends = await this.friendW.findAll({
            where: {
                user1Id: dto.user1Id
            }
        });
    }
};
exports.FriendAwaitService = FriendAwaitService;
exports.FriendAwaitService = FriendAwaitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(friend_await_model_1.FriendsW)),
    __metadata("design:paramtypes", [Object, friends_service_1.FriendsService])
], FriendAwaitService);
//# sourceMappingURL=friend-await.service.js.map