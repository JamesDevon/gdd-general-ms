import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Mysql} from 'src/config/Mysql';
import {ProjectModule} from "src/project/project.module";
import {MongooseModule} from "@nestjs/mongoose";
import { ProfileModule } from 'src/profile/profile.module';
import {EditorModule} from "src/editor/editor.module";
import {MongoDb} from "src/config/MongoDb";


@Module({
  imports: [
      TypeOrmModule.forRoot(Mysql.getConfig()),
      MongooseModule.forRoot(MongoDb.getConfig().uri),
      AuthModule,
      ProjectModule,
      ProfileModule,
      EditorModule,
  ],
    providers: [
        ProjectModule,
    ]
})
export class AppModule {}
