import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ProjectService} from "src/project/project.service";
import {CreateProjectRequestDto} from "src/project/dto/create-project.request.dto";
import {AuthGuard} from "@nestjs/passport";
import {Project} from "src/project/schemas/project/project.schema";
import {GetUser} from "src/auth/utils/decorators/get-user.decorator";
import {User} from "src/auth/entities/users/user.entity";
import {UpdateProjectRequestDto} from "src/project/dto/update-project.request.dto";
import {InviteFriendDto} from "./dto/inviteFriend.dto";
import {Section} from "./schemas/section/section.schema";

@UseGuards(AuthGuard())
@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService) {
    }

    @HttpCode(200)
    @Get()
    getProjectsForUser(@GetUser() user: User) : Promise<Project[]> {
        return this.projectService.getProjectByUserId(user.id);
    }

    @HttpCode(201)
    @Post()
    createNewProject(@Body() newProject: CreateProjectRequestDto, @GetUser() user: User) : Promise<Project> {
        newProject.userId = user.id;
        return this.projectService.createProject(newProject);
    }

    @HttpCode(200)
    @Put(":projectId")
    updateProject(@Body() project: Partial<UpdateProjectRequestDto>, @Param("projectId") projectId: string, @GetUser() user: User) : Promise<Project> {
        return this.projectService.updateProject(project, projectId, user.id);
    }

    @HttpCode(200)
    @Put(":projectId/section/:sectionId")
    updateProjectSection(@Body() content: any, @Param("projectId") projectId: string, @Param("sectionId") sectionId: string, @GetUser() user: User) : Promise<{project: Project, section: Section}> {
        return this.projectService.updateProjectSection(projectId, sectionId, content.content);
    }

    @HttpCode(200)
    @Delete(":projectId" )
    deleteProjectById(@Param("projectId") projectId: string, @GetUser() user: User) {
        return this.projectService.deleteProjectById(projectId, user.id);
    }

    @HttpCode(200)
    @Post(":projectId/invite")
    async inviteAFriend(@Param("projectId") projectId: string, @GetUser() user: User, @Body() body : InviteFriendDto) {
        await this.projectService.addUserToContributors(projectId, body.email, user.id);
    }

}
