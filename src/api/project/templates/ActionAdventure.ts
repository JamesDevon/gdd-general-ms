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
        this.sections.push(new Section(this.sections.length, 'Game Overview', {}, getGameOveviewSubSections()));
        this.sections.push(new Section(this.sections.length, 'Gameplay', {}, getGameplaySubSections()));
        this.sections.push(new Section(this.sections.length, 'Mechanics', {}, getMechanicsSubSections()));
        this.sections.push(new Section(this.sections.length, 'Story and Narrative', {}, getStorySubSections()));
        this.sections.push(new Section(this.sections.length, 'Game World', {}, getWorldSubSections()));
        this.sections.push(new Section(this.sections.length, 'Characters', {}, getCharactersSubSections()));
        this.sections.push(new Section(this.sections.length, 'Levels', {}, getLevelsSubSections()));
        this.sections.push(new Section(this.sections.length, 'Interface', {}, getInterfaceSubSections()));
        this.project.sections = this.sections;
    }

    getProject() {
        return this.project;
    }

}