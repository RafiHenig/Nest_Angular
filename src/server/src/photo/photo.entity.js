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
var portfolio_entity_1 = require("../portfolio/portfolio.entity");
var updated_at_created_at_entity_1 = require("../common/entities/updated_at_created_at.entity");
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Photo.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 500 })
    ], Photo.prototype, "name");
    __decorate([
        typeorm_1.Column('text')
    ], Photo.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Photo.prototype, "filename");
    __decorate([
        typeorm_1.Column()
    ], Photo.prototype, "mainPhoto");
    __decorate([
        typeorm_1.ManyToOne(function () { return portfolio_entity_1.Portfolio; }, function (porfolio) { return porfolio.photos; })
    ], Photo.prototype, "portfolio");
    Photo = __decorate([
        typeorm_1.Entity()
    ], Photo);
    return Photo;
}(updated_at_created_at_entity_1.Updated_At_Created_At));
exports.Photo = Photo;
