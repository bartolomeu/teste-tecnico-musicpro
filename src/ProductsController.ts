import { Controller, Get, UseGuards } from "@nestjs/common";
import { Roles } from "./role.decorator";
import { AuthGuard } from "./auth.guard";

@Controller('products')
export class ProductsController {

  @Get()
  @Roles(['admin'])
  @UseGuards(AuthGuard)
  indexGet()  {
    return { message: 'OK' }
  }
}