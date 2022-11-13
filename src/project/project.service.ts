import {ForbiddenException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {ProjectRepository} from "src/project/schemas/project/project.repository";
import {Project} from "src/project/schemas/project/project.schema";
import {CreateProjectRequestDto} from "src/project/dto/create-project.request.dto";
import {DeleteProjectResponseDto} from "src/project/dto/delete-project.response.dto";
import {TemplateEngine} from "src/project/templates/TemplateEngine";
import {ProfileService} from "../profile/profile.service";
import {User} from "../auth/entities/users/user.entity";
import {HttpException} from "@nestjs/common/exceptions/http.exception";

@Injectable()
export class ProjectService {

    constructor(private readonly projectRepository: ProjectRepository, private profileService: ProfileService) {
    }

    async getProjectByUserId(userId: string) : Promise<Project[]> {
        return this.projectRepository.find({ $or: [{userId: userId}, {contributors: userId}]})
    }

    async getProjectById(projectId: string) : Promise<Project> {
        return this.projectRepository.findOne({_id: projectId});
    }

    async updateProject(updateProps : Partial<Project>, projectId: string, userId: string) : Promise<Project> {
        if (projectId == null) {
            throw Error("Id for the project to update was undefined");
        }
        const project = await this.projectRepository.findOne({_id: projectId})
        if(project.userId !== userId) {
            if (project.contributors.includes(userId)) {
                throw new ForbiddenException('User is not the owner of the project')
            }
            throw new NotFoundException("Project not found for this user")
        }
        await this.projectRepository.findOneAndUpdate({_id: projectId}, updateProps);
        return this.projectRepository.findOne({_id: projectId});
    }

    async createProject(newProject: CreateProjectRequestDto): Promise<Project> {
        const project : Project = new Project(newProject.userId, newProject.genre, newProject.title, newProject.description, newProject.sections);
        return this.projectRepository.create(TemplateEngine.getTemplatedProject(project));
    }

    async deleteProjectById(projectId: string, userId: string) : Promise<DeleteProjectResponseDto> {
        const deleteProjectResponse: DeleteProjectResponseDto = new DeleteProjectResponseDto();
        const projectForDeletion = await this.getProjectById(projectId);
        if(projectForDeletion.userId !== userId) {
            if (projectForDeletion.contributors.includes(userId)) {
                throw new ForbiddenException('User is not the owner of the project')
            }
            throw new NotFoundException("Project not found for this user")
        }
        const results : {acknowledged: boolean, deletedCount: number} = await this.projectRepository.deleteProjectById(projectId);
        deleteProjectResponse.success = (results.deletedCount > 0);
        deleteProjectResponse.message = "Project deleted successfully";
        return deleteProjectResponse;
    }

    async addUserToContributors(projectId: string, email: string, userId: string) : Promise<Project> {
        const project = await this.getProjectById(projectId);
        if(project.userId !== userId) throw new NotFoundException("Project not found for this user");
        const user : User = await this.profileService.getDetailsByEmail(email);
        if(user == null) throw new NotFoundException("User was not found!");
        if (project.contributors.includes(user.id)) throw new HttpException('User already part of the project', 208)
        project.contributors.push(user.id);
        return this.updateProject(project, projectId, userId);
    }

}
