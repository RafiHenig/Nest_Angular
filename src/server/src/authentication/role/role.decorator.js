"use strict";
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var role_guard_1 = require("./role.guard");
var auth_guard_1 = require("../auth/guards/auth.guard");
exports.Roles = function () {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return common_1.applyDecorators(common_1.SetMetadata('roles', roles), common_1.UseGuards(auth_guard_1.AuthGuard, role_guard_1.RolesGuard));
};
