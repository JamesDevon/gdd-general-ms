import {SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {NestGateway} from "@nestjs/websockets/interfaces/nest-gateway.interface";
import {Logger} from "@nestjs/common";
import {Socket, Server} from 'socket.io';
import {ProjectService} from "src/api/project/project.service";
import {Project} from "src/api/project/schemas/project/project.schema";
import {EditorService} from "./editor.service";

@WebSocketGateway({cors: true})
export class EditorGateway implements NestGateway   {

    private logger: Logger = new Logger(EditorGateway.name);

    private server;

    constructor(private projectService: ProjectService, private editorService: EditorService) {
    }


    afterInit(server: Server): void {
        this.server = server;
        this.logger.debug('WebSocket init!');
    }

    handleConnection(client: Socket, ...args: any[]): void {
        this.logger.debug(`client connected: ${client.id}`);
    }

    handleDisconnect(client: any): void {
        this.logger.debug(`client disconnected: ${client.id}`);
    }

    @SubscribeMessage('get-document')
    async getDocument(client: Socket, data: { projectId: string, sectionId: string }): Promise<void> {
        const {projectId, sectionId} = data;
        this.logger.debug("User subscribed to get-document with id : "+projectId);
        this.logger.debug("Loading section id : "+sectionId);
        if (projectId == null || sectionId == null) return;
        const project: Project = await this.projectService.getProjectById(projectId);
        const room = projectId+sectionId;
        client.join(room);
        this.logger.debug("User joined room : "+room);
        const sectionIndex = project.sections.findIndex(s => s._id == sectionId);
        if (sectionIndex == null) return ;
        client.emit("load-document",  project.sections[sectionIndex].content || {});
        this.logger.debug("Data emitted : "+room);
        client.on("save-document", async (dataToSave:String) => {
            this.logger.debug("Saving document : "+room);
            project.sections[sectionIndex].content = dataToSave;
            await this.projectService.updateProject(project, projectId, project.userId);
        })
        client.on('send-changes', (delta: string) => {
            this.logger.debug("Broadcasting changes : "+room);
            client.broadcast.to(room).emit('receive-changes',delta);
        });
    }

}