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
var crypto_1 = require("crypto");
var role_entity_1 = require("../role/role.entity");
var updated_at_created_at_entity_1 = require("../common/entities/updated_at_created_at.entity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    User.prototype.setPassword = function (password) {
        this.salt = crypto_1.randomBytes(16).toString('hex');
        this.hash = crypto_1.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };
    User.prototype.validatePassword = function (password) {
        var hash = crypto_1.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        return this.hash === hash;
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "username");
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: "MAX" })
    ], User.prototype, "hash");
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: "MAX" })
    ], User.prototype, "salt");
    __decorate([
        typeorm_1.ManyToMany(function () { return role_entity_1.Role; }, function (role) { return role.users; }, { cascade: ["insert", "update"] }),
        typeorm_1.JoinTable()
    ], User.prototype, "roles");
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(["email"])
    ], User);
    return User;
}(updated_at_created_at_entity_1.Updated_At_Created_At));
exports.User = User;
