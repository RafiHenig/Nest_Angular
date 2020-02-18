"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var role_entity_1 = require("./role.entity");
var role_service_1 = require("./role.service");
var user_module_1 = require("../user/user.module");
var role_controller_1 = require("./role.controller");
var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role]),
                common_1.forwardRef(function () { return user_module_1.UserModule; }),
            ],
            exports: [typeorm_1.TypeOrmModule, role_service_1.RoleService],
            providers: [role_service_1.RoleService],
            controllers: [role_controller_1.RoleController]
        })
    ], RoleModule);
    return RoleModule;
}());
exports.RoleModule = RoleModule;
