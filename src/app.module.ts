import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './CompanyController';
import { ProductsController } from './ProductsController';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController,CompanyController, ProductsController],
  providers: [AppService ],
})
export class AppModule {}
