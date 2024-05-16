import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { Roles } from "./role.decorator";

@Controller('company')
export class CompanyController {

  @Get()
  @Roles(['company'])
  @UseGuards(AuthGuard)
  indexGet()  {
    return { message: 'OK' }
  }
}