"use strict";
exports.__esModule = true;
var common_1 = require("@nestjs/common");
exports.UserFn = function (req, field) {
    var _a, _b;
    if (!((_b = (_a = req.session) === null || _a === void 0 ? void 0 : _a.passport) === null || _b === void 0 ? void 0 : _b.user))
        throw new common_1.InternalServerErrorException("Couldn't fetch user information.");
    return field ? req.session.passport.user[field] : req.session.passport.user;
};
