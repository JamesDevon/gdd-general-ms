import { Module } from '@nestjs/common';
import { ProjectService } from 'src/project/project.service';
import { ProjectController } from 'src/project/project.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "src/project/schemas/project/project.schema";
import {ProjectRepository} from "src/project/schemas/project/project.repository";
import {AuthModule} from "src/auth/auth.module";
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
