"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var photo_module_1 = require("./photo/photo.module");
var portfolio_module_1 = require("./portfolio/portfolio.module");
var authentication_module_1 = require("./authentication/authentication.module");
var events_module_1 = require("./socket/events/events.module");
var serve_static_1 = require("@nestjs/serve-static");
var path_1 = require("path");
var app_controller_1 = require("./app.controller");
// const typeOrmModuleOptions: TypeOrmModuleOptions = {
//   type: 'mssql',
//   host: 'localhost',
//   username: '{USER_NAME}',
//   password: '********',
//   database: '{DATABASE}',
//   synchronize: true,
//   entities: ["dist/**/*.entity.js"],
//   options: {
//     "encrypt": false,
//     "enableArithAbort": true
//   },
// } as TypeOrmModuleOptions;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                // TypeOrmModule.forRoot(typeOrmModuleOptions), // Use this as alternative option instead of using ormconfig.json
                typeorm_1.TypeOrmModule.forRoot(),
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path_1.join(__dirname, '..', 'client')
                }),
                photo_module_1.PhotoModule,
                portfolio_module_1.PortfolioModule,
                authentication_module_1.AuthenticationModule,
                events_module_1.EventsModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
