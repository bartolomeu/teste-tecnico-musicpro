import { Module } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { UserModule } from "./user.module";

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard],
})
export class AuthModule {}