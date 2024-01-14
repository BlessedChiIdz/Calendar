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
exports.FriendAwaitController = void 0;
const common_1 = require("@nestjs/common");
const friend_await_service_1 = require("./friend-await.service");
const friends_dto_1 = require("./dto/friends.dto");
const swagger_1 = require("@nestjs/swagger");
let FriendAwaitController = class FriendAwaitController {
    constructor(friendWService) {
        this.friendWService = friendWService;
    }
    create(dto) {
        return this.friendWService.create(dto);
    }
    AddToMainTableAll(dto) {
        return this.friendWService.addToMainTBAllAwait(dto.idForDel);
    }
    AddToMainTableSome(ids) {
        return this.friendWService.addToMainTbSomeUsers(ids);
    }
    GetRequest(num) {
        return this.friendWService.getById(num);
    }
};
exports.FriendAwaitController = FriendAwaitController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'CreateTempFriend' }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [friends_dto_1.FriendsWDto]),
    __metadata("design:returntype", void 0)
], FriendAwaitController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'AddTempFriendToMainFriendTable' }),
    (0, common_1.Post)('/addToMainTbAllAwait'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [friends_dto_1.FriendDeleteDto]),
    __metadata("design:returntype", void 0)
], FriendAwaitController.prototype, "AddToMainTableAll", null);
__decorate([
    (0, common_1.Post)('/addToMainTbSomeAwait'),
    __param(0, (0, common_1.Body)(new common_1.ParseArrayPipe({ items: Number, separator: ',' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], FriendAwaitController.prototype, "AddToMainTableSome", null);
__decorate([
    (0, common_1.Get)('/:num'),
    __param(0, (0, common_1.Param)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FriendAwaitController.prototype, "GetRequest", null);
exports.FriendAwaitController = FriendAwaitController = __decorate([
    (0, common_1.Controller)('friend-await'),
    __metadata("design:paramtypes", [friend_await_service_1.FriendAwaitService])
], FriendAwaitController);
//# sourceMappingURL=friend-await.controller.js.map