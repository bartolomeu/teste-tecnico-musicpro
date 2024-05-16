import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { Reflector } from "@nestjs/core";
import { Roles } from "./role.decorator";
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    return this.validateAccess(context);
  }

  validateAccess(context: ExecutionContext): boolean {
    const headers = context.switchToHttp().getRequest().headers;    
    const email = headers.email;
    
    const user = this.userService.getUsers().find(user => user.email === email);
    if(!user) return false;

    const roles = this.reflector.get(Roles, context.getHandler());

    const hasRole = roles.every(role => user.modules.find(mod => mod.name === role));
    
    return hasRole;

  }
  
}