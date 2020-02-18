"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var PhotoDto = /** @class */ (function () {
    function PhotoDto(init) {
        Object.assign(this, init);
        return this;
    }
    __decorate([
        class_validator_1.IsString()
    ], PhotoDto.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], PhotoDto.prototype, "description");
    __decorate([
        class_validator_1.IsString()
    ], PhotoDto.prototype, "filename");
    __decorate([
        class_validator_1.IsBoolean()
    ], PhotoDto.prototype, "mainPhoto");
    return PhotoDto;
}());
exports.PhotoDto = PhotoDto;
//  {
//   "name": "The big ship",
//      "description": "Picture of an amazing ship set againt the beautifull sunset",
//      "filename": "big_ship.jpeg",
//      "views": 234,
//      "isPublished": false
// }
