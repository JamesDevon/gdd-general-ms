import {Project} from "src/api/project/schemas/project/project.schema";
import {Section} from "src/api/project/schemas/section/section.schema";
import {Template} from "src/api/project/templates/Template";
import {
    getCharactersSubSections,
    getGameOveviewSubSections,
    getGameplaySubSections, getInterfaceSubSections, getLevelsSubSections,
    getMechanicsSubSections, getStorySubSections, getWorldSubSections
} from "./ActionAdventureSub/getSubSections";

export  class ActionAdventure extends Template{


    constructProject(project: Project) {
        this.project = project
        this.sections = [];
        this.sections.push(new Section('Game Overview', {}, getGameOveviewSubSections()));
        this.sections.push(new Section('Gameplay', {}, getGameplaySubSections()));
        this.sections.push(new Section('Mechanics', {}, getMechanicsSubSections()));
        this.sections.push(new Section('Story and Narrative', {}, getStorySubSections()));
        this.sections.push(new Section('Game World', {}, getWorldSubSections()));
        this.sections.push(new Section('Characters', {}, getCharactersSubSections()));
        this.sections.push(new Section('Levels', {}, getLevelsSubSections()));
        this.sections.push(new Section('Interface', {}, getInterfaceSubSections()));
        this.project.sections = this.sections;
    }

    getProject() {
        return this.project;
    }

}