import { Module } from "@nestjs/common";
import {EditorGateway} from "src/websockets/editor/editor.gateway";
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "src/api/project/schemas/project/project.schema";
import {EditorService} from "./editor.service";
import {ProjectModule} from "../../api/project/project.module";

@Module({
    imports : [
        MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}]),
        ProjectModule,
    ],
    providers: [EditorGateway, EditorService]
    }
)
export class EditorModule {}