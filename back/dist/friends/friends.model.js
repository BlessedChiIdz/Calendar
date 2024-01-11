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
exports.Friends = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const plans_model_1 = require("../plans/plans.model");
const user_plans_model_1 = require("../plans/user-plans.model");
let Friends = class Friends extends sequelize_typescript_1.Model {
};
exports.Friends = Friends;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'UniqueKey' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Friends.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '13', description: 'FirstUser' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Friends.prototype, "user1Id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '13', description: 'SecondUser' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Friends.prototype, "user2Id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => plans_model_1.Plan, () => user_plans_model_1.UserPlans),
    __metadata("design:type", Array)
], Friends.prototype, "plans", void 0);
exports.Friends = Friends = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Friends', createdAt: false, updatedAt: false })
], Friends);
//# sourceMappingURL=friends.model.js.map