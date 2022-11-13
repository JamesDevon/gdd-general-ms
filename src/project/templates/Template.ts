import {Project} from "src/project/schemas/project/project.schema";
import {Section} from "src/project/schemas/section/section.schema";

export abstract class Template {

    project: Project;
    sections: Section[] = [];

    abstract constructProject(project: Project);
    abstract getProject();
}