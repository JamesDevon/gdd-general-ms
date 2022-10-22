import {Section} from "../../schemas/section/section.schema";
import {ContentTypeEnum} from "../../../../enums/ContentType.enum";

export const getGameOveviewSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Game Concept', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section(subSections.length, 'Target Audience', {}, [], ContentTypeEnum.DropDown));
    subSections.push(new Section(subSections.length, 'Genre(s)', {}, [], ContentTypeEnum.MultiSelect));
    subSections.push(new Section(subSections.length, 'Game Flow Summary', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section(subSections.length, 'Look and Feel', {}, [], ContentTypeEnum.FreeText));
    return subSections;
};

export const getGameplaySubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Objectives', {}, []));
    subSections.push(new Section(subSections.length, 'Game Progression', {}, []));
    subSections.push(new Section(subSections.length, 'Play Flow', {}, []));
    subSections.push(new Section(subSections.length, 'Mission/challenge Structure', {}, []));
    subSections.push(new Section(subSections.length, 'Puzzle Structure', {}, []));
    return subSections;
};

export const getMechanicsSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Rules', {}, []));
    subSections.push(new Section(subSections.length, 'Model of the game universe.', {}, []));
    subSections.push(new Section(subSections.length, 'Physics', {}, []));
    subSections.push(new Section(subSections.length, 'Character movement', {}, []));
    subSections.push(new Section(subSections.length, 'Objects', {}, []));
    subSections.push(new Section(subSections.length, 'Actions', {}, []));
    subSections.push(new Section(subSections.length, 'Combat', {}, []));
    subSections.push(new Section(subSections.length, 'Screen Flow', {}, []));
    subSections.push(new Section(subSections.length, 'Game Options', {}, []));
    subSections.push(new Section(subSections.length, 'Replaying and saving', {}, []));
    subSections.push(new Section(subSections.length, 'Cheats and Easter Eggs', {}, []));
    return subSections;
};

export const getStorySubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Back story', {}, []));
    subSections.push(new Section(subSections.length, 'Plot elements', {}, []));
    subSections.push(new Section(subSections.length, 'Game story progression', {}, []));
    subSections.push(new Section(subSections.length, 'Cut scenes', {}, []));
    return subSections;
};

export const getWorldSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'General look', {}, []));
    subSections.push(new Section(subSections.length, 'Areas', {}, []));
    return subSections;
};

export const getCharactersSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Back story', {}, []));
    subSections.push(new Section(subSections.length, 'Personality', {}, []));
    subSections.push(new Section(subSections.length, 'Appearance', {}, []));
    subSections.push(new Section(subSections.length, 'Abilities', {}, []));
    subSections.push(new Section(subSections.length, 'Relevance to the story', {}, []));
    subSections.push(new Section(subSections.length, 'Relationship to other characters', {}, []));
    subSections.push(new Section(subSections.length, 'Artificial Intelligence Use in Opponent and Enemy', {}, []));
    subSections.push(new Section(subSections.length, 'Non-combat and Friendly Characters', {}, []));
    return subSections;
};

export const getLevelsSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Training Leve', {}, []));
    subSections.push(new Section(subSections.length, 'Synopsis', {}, []));
    subSections.push(new Section(subSections.length, 'Required introductory material and how it is provided', {}, []));
    subSections.push(new Section(subSections.length, 'Objectives', {}, []));
    subSections.push(new Section(subSections.length, 'Details of what happens in the level', {}, []));
    subSections.push(new Section(subSections.length, 'Map', {}, []));
    subSections.push(new Section(subSections.length, 'Critical path that the player needs to take', {}, []));
    subSections.push(new Section(subSections.length, 'Important and incidental encounters', {}, []));
    return subSections;
};

export const getInterfaceSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section(subSections.length, 'Visual System', {}, []));
    subSections.push(new Section(subSections.length, 'Control System', {}, []));
    subSections.push(new Section(subSections.length, 'Audio, music, sound effects', {}, []));
    subSections.push(new Section(subSections.length, 'Game Art', {}, []));
    subSections.push(new Section(subSections.length, 'Help System', {}, []));
    return subSections;
};