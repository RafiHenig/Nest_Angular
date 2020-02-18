"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var user_fn_1 = require("../../common/methods/user.fn");
var RolesGuard = /** @class */ (function () {
    function RolesGuard(reflector, roleService) {
        this.reflector = reflector;
        this.roleService = roleService;
    }
    RolesGuard.prototype.canActivate = function (context) {
        var roles = this.reflector.get('roles', context.getHandler());
        var request = context.switchToHttp().getRequest();
        return this.roleService.matchRoles(user_fn_1.UserFn(request), roles);
    };
    RolesGuard = __decorate([
        common_1.Injectable()
    ], RolesGuard);
    return RolesGuard;
}());
exports.RolesGuard = RolesGuard;
