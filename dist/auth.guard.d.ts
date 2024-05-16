import { CanActivate, ExecutionContext } from "@nestjs/common";
import { UserService } from "./user.service";
import { Reflector } from "@nestjs/core";
export declare class AuthGuard implements CanActivate {
    private userService;
    private reflector;
    constructor(userService: UserService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    validateAccess(context: ExecutionContext): boolean;
}
