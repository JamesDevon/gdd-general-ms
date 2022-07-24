import { Module } from '@nestjs/common';
import { ProjectService } from 'src/api/project/project.service';
import { ProjectController } from 'src/api/project/project.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "src/api/project/schemas/project/project.schema";
import {ProjectRepository} from "src/api/project/schemas/project/project.repository";
import {AuthModule} from "src/api/auth/auth.module";
import {ProfileModule} from "../profile/profile.module";

@Module({
  imports: [
      MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}]),
      AuthModule,
      ProfileModule,
  ],
  providers: [ProjectService, ProjectRepository],
  exports: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
