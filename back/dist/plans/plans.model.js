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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("../users/users.model");
const swagger_1 = require("@nestjs/swagger");
const friends_model_1 = require("../friends/friends.model");
let Plans = class Plans extends sequelize_typescript_1.Model {
};
exports.Plans = Plans;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'UniqueKey' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Plans.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '13.01.2022', description: 'Date' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Plans.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'goToCinema', description: 'whatManWantToDo' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false }),
    __metadata("design:type", String)
], Plans.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'guy1', description: 'who create request' }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Plans.prototype, "userIdPost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'guy2', description: 'who get or reject request' }),
    (0, sequelize_typescript_1.ForeignKey)(() => friends_model_1.Friends),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Plans.prototype, "FriendsIdGet", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => friends_model_1.Friends),
    __metadata("design:type", friends_model_1.Friends)
], Plans.prototype, "author", void 0);
exports.Plans = Plans = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'plans', createdAt: false, updatedAt: false })
], Plans);
//# sourceMappingURL=plans.model.js.map