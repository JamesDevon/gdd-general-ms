import {Section} from "../../schemas/section/section.schema";
import {ContentTypeEnum} from "../../../../enums/ContentType.enum";

export const getGameOveviewSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Game Concept', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section('Target Audience', {}, [], ContentTypeEnum.DropDown));
    subSections.push(new Section('Genre(s)', {}, [], ContentTypeEnum.MultiSelect));
    subSections.push(new Section('Game Flow Summary', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section('Look and Feel', {}, [], ContentTypeEnum.FreeText));
    return subSections;
};

export const getGameplaySubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Objectives', {}, []));
    subSections.push(new Section('Game Progression', {}, []));
    subSections.push(new Section('Play Flow', {}, []));
    subSections.push(new Section('Mission/challenge Structure', {}, []));
    subSections.push(new Section('Puzzle Structure', {}, []));
    return subSections;
};

export const getMechanicsSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Rules', {}, []));
    subSections.push(new Section('Model of the game universe.', {}, []));
    subSections.push(new Section('Physics', {}, []));
    subSections.push(new Section('Character movement', {}, []));
    subSections.push(new Section('Objects', {}, []));
    subSections.push(new Section('Actions', {}, []));
    subSections.push(new Section('Combat', {}, []));
    subSections.push(new Section('Screen Flow', {}, []));
    subSections.push(new Section('Game Options', {}, []));
    subSections.push(new Section('Replaying and saving', {}, []));
    subSections.push(new Section('Cheats and Easter Eggs', {}, []));
    return subSections;
};

export const getStorySubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Back story', {}, []));
    subSections.push(new Section('Plot elements', {}, []));
    subSections.push(new Section('Game story progression', {}, []));
    subSections.push(new Section('Cut scenes', {}, []));
    return subSections;
};

export const getWorldSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('General look', {}, []));
    subSections.push(new Section('Areas', {}, []));
    return subSections;
};

export const getCharactersSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Back story', {}, []));
    subSections.push(new Section('Personality', {}, []));
    subSections.push(new Section('Appearance', {}, []));
    subSections.push(new Section('Abilities', {}, []));
    subSections.push(new Section('Relevance to the story', {}, []));
    subSections.push(new Section('Relationship to other characters', {}, []));
    subSections.push(new Section('Artificial Intelligence Use in Opponent and Enemy', {}, []));
    subSections.push(new Section('Non-combat and Friendly Characters', {}, []));
    return subSections;
};

export const getLevelsSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section( 'Training Leve', {}, []));
    subSections.push(new Section( 'Synopsis', {}, []));
    subSections.push(new Section( 'Required introductory material and how it is provided', {}, []));
    subSections.push(new Section( 'Objectives', {}, []));
    subSections.push(new Section( 'Details of what happens in the level', {}, []));
    subSections.push(new Section( 'Map', {}, []));
    subSections.push(new Section( 'Critical path that the player needs to take', {}, []));
    subSections.push(new Section( 'Important and incidental encounters', {}, []));
    return subSections;
};

export const getInterfaceSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Visual System', {}, []));
    subSections.push(new Section('Control System', {}, []));
    subSections.push(new Section('Audio, music, sound effects', {}, []));
    subSections.push(new Section('Game Art', {}, []));
    subSections.push(new Section('Help System', {}, []));
    return subSections;
};