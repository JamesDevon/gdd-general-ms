import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Project, ProjectDocument} from "src/project/schemas/project/project.schema";
import {FilterQuery, Model} from "mongoose";

@Injectable()
export class ProjectRepository {

    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {
    }

    async findOne(projectFilterQuery: FilterQuery<Project>) : Promise<Project> {
        return this.projectModel.findOne(projectFilterQuery);
    }

    async find(projectFilterQuery: FilterQuery<Project>): Promise<Project[]> {
        return this.projectModel.find(projectFilterQuery);
    }

    async findAll(): Promise<Project[]> {
        return this.projectModel.find({});
    }

    async create(project: Project) : Promise<Project> {
        const newProject = new this.projectModel(project);
        return newProject.save();
    }

    async findOneAndUpdate(projectFilterQuery: FilterQuery<Project>, project: Partial<Project>) : Promise<Project> {
        return this.projectModel.findOneAndUpdate(projectFilterQuery, project);
    }

    async deleteProjectById(_id: string) : Promise<{acknowledged: boolean, deletedCount: number}> {
        return this.projectModel.deleteOne({_id});
    }
}