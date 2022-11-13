import {SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {NestGateway} from "@nestjs/websockets/interfaces/nest-gateway.interface";
import {Logger} from "@nestjs/common";
import {Socket, Server} from 'socket.io';
import {ProjectService} from "src/project/project.service";
import {Project} from "src/project/schemas/project/project.schema";
import {EditorService} from "./editor.service";
import {ProjectTree} from "../project/utils/ProjectTree";
import {Section} from "../project/schemas/section/section.schema";

@WebSocketGateway({cors: true})
export class EditorGateway implements NestGateway   {

    private logger: Logger = new Logger(EditorGateway.name);

    private server;

    constructor(private projectService: ProjectService, private editorService: EditorService) {
    }


    afterInit(server: Server): void {
        this.server = server;
    }

    handleConnection(client: Socket, ...args: any[]): void {
    }

    handleDisconnect(client: any): void {
    }

    @SubscribeMessage('get-document')
    async getDocument(client: Socket, data: { projectId: string, sectionId: string }): Promise<void> {
        const {projectId, sectionId} = data;
        if (projectId == null || sectionId == null) return;
        let project: Project = await this.projectService.getProjectById(projectId);
        let projectTree: ProjectTree = new ProjectTree(project);
        let sectionPath: Array<number> = projectTree.getSectionPath(sectionId);
        if (!sectionPath.length) return ;
        let section: Section = projectTree.getSection(sectionPath);
        client.emit("load-document",  section.content || {});
        client.on("save-document", async (dataToSave: {content: string}) => {
            project = await this.projectService.getProjectById(projectId);
            projectTree = new ProjectTree(project);
            sectionPath = projectTree.getSectionPath(sectionId);
            section = projectTree.getSection(sectionPath);
            section.content = dataToSave.content;
            projectTree.replaceSection(section, sectionPath);
            await this.projectService.updateProject(projectTree.getProject(), projectId, project.userId);
        })
    }

}