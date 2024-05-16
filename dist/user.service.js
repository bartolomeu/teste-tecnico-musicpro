"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    getUsers() {
        return [
            {
                id: '3a5c1aa7-81d1-4b27-8f55-6f3f8c48b5e2',
                email: 'company@teste.com.br',
                modules: [
                    {
                        name: 'company',
                    },
                ],
            },
            {
                id: 'c6e70325-c0a9-4a2a-a167-5579d07e9ea5',
                email: 'produto@teste.com.br',
                modules: [
                    {
                        name: 'products',
                    },
                ],
            },
        ];
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map