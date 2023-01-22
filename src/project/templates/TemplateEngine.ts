import {GenreEnum} from "src/enums/genre.enum";
import {Template} from "src/project/templates/Template";
import {ActionAdventure} from "src/project/templates/ActionAdventure";
import {Project} from "src/project/schemas/project/project.schema";

export class TemplateEngine {

    private static TemplateMap = new Map<string, Template> ([
       [GenreEnum.AA, new ActionAdventure()],
       [GenreEnum.FPS, new ActionAdventure()],
       [GenreEnum.RPG, new ActionAdventure()],
       [GenreEnum.RTS, new ActionAdventure()],
    ]);

    static getTemplatedProject(project: Project) : Project {
        const template: Template = this.TemplateMap.get(GenreEnum[project.genre]);
        if(!template) {
            return project;
        }
        template.constructProject(project);
        return  template.getProject()
    }
}