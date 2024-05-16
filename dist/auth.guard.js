"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const core_1 = require("@nestjs/core");
const role_decorator_1 = require("./role.decorator");
let AuthGuard = class AuthGuard {
    constructor(userService, reflector) {
        this.userService = userService;
        this.reflector = reflector;
    }
    canActivate(context) {
        return this.validateAccess(context);
    }
    validateAccess(context) {
        const headers = context.switchToHttp().getRequest().headers;
        const email = headers.email;
        const user = this.userService.getUsers().find(user => user.email === email);
        if (!user)
            return false;
        const roles = this.reflector.get(role_decorator_1.Roles, context.getHandler());
        const hasRole = roles.every(role => user.modules.find(mod => mod.name === role));
        return hasRole;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, core_1.Reflector])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map