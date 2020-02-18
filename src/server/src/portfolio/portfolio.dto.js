"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var photo_dto_1 = require("../photo/photo.dto");
var PortfolioDTO = /** @class */ (function () {
    function PortfolioDTO(init) {
        Object.assign(this, init);
    }
    __decorate([
        class_validator_1.IsString()
    ], PortfolioDTO.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], PortfolioDTO.prototype, "subTitle");
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.ValidateNested({ each: true }),
        class_validator_1.ArrayMinSize(1),
        class_transformer_1.Type(function () { return photo_dto_1.PhotoDto; }),
        class_validator_1.IsDefined()
    ], PortfolioDTO.prototype, "photos");
    return PortfolioDTO;
}());
exports.PortfolioDTO = PortfolioDTO;
// import { Photo } from "src/photo/photo.entity";
// import { IsNumber, IsString, IsArray, ValidateNested, ArrayMinSize } from "class-validator";
// import { Type } from 'class-transformer';
// export class PortfolioDTO {
//     constructor(init?: PortfolioDTO) {
//         Object.assign(this, init)
//     }
//     id: number;
//     @IsString()
//     name: string;
//     @IsString()
//     subTitle: string;
//     @Type(() => Photo)
//     previewPhoto: Photo;
//     @IsArray()
//     @ValidateNested({ each: true })
//     @ArrayMinSize(1)
//     @Type(() => Photo)
//     photos: Photo[];
// }
// {
//     "name": "The huge progject",
//     "subTitle": "Up close photos of ships",
//     "previewPhoto" :  {
//         "name": "The big ship",
//            "description": "Picture of an amazing ship set againt the beautifull sunset",
//            "filename": "big_ship.jpeg",
//            "views": 534534,
//            "isPublished": false
//       },
//       "photos":[
//         {
//             "name": "The big ship",
//                "description": "Picture of an amazing ship set againt the beautifull sunset",
//                "filename": "big_ship.jpeg",
//                "views": 534534,
//                "isPublished": false
//           }, {
//             "name": "The big ship",
//                "description": "Picture of an amazing ship set againt the beautifull sunset",
//                "filename": "big_ship.jpeg",
//                "views": 534534,
//                "isPublished": false
//           }
//       ]
// }
