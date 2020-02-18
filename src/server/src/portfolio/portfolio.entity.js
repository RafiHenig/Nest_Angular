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
var photo_entity_1 = require("../photo/photo.entity");
var updated_at_created_at_entity_1 = require("../common/entities/updated_at_created_at.entity");
var Portfolio = /** @class */ (function (_super) {
    __extends(Portfolio, _super);
    function Portfolio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Portfolio.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Portfolio.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Portfolio.prototype, "subTitle");
    __decorate([
        typeorm_1.OneToMany(function () { return photo_entity_1.Photo; }, function (photo) { return photo.portfolio; }, { cascade: true })
    ], Portfolio.prototype, "photos");
    Portfolio = __decorate([
        typeorm_1.Entity()
    ], Portfolio);
    return Portfolio;
}(updated_at_created_at_entity_1.Updated_At_Created_At));
exports.Portfolio = Portfolio;
