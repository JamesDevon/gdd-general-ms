import {Project} from "src/api/project/schemas/project/project.schema";
import {Section} from "src/api/project/schemas/section/section.schema";

export abstract class Template {

    project: Project;
    sections: Section[] = [];

    abstract constructProject(project: Project);
    abstract getProject();
}