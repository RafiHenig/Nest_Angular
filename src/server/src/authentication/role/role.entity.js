"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../user/user.entity");
var updated_at_created_at_entity_1 = require("../common/entities/updated_at_created_at.entity");
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryColumn()
    ], Role.prototype, "name");
    __decorate([
        typeorm_1.ManyToMany(function () { return user_entity_1.User; }, function (user) { return user.roles; })
    ], Role.prototype, "users");
    Role = __decorate([
        typeorm_1.Entity()
    ], Role);
    return Role;
}(updated_at_created_at_entity_1.Updated_At_Created_At));
exports.Role = Role;
// @CreateDateColumn()
// createdAt: string;
// @UpdateDateColumn()
// updatedAt: string;
// .getRepository(Role)
//     .createQueryBuilder("role")
//     .leftJoin("role.users", "user")
//     .where("user.id = :id", { id: 1 })
//     .getMany();
