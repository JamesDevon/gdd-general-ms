import { Module } from '@nestjs/common';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileController } from 'src/profile/profile.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "src/auth/auth.module";
import {User} from "../auth/entities/users/user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([User]),
      AuthModule,
  ],
  providers: [ProfileService],
  exports: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
