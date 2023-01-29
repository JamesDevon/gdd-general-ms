import {Section} from "../../../schemas/section/section.schema";

export const getGameplaySubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Objectives', {}, []));
    subSections.push(new Section('Game Progression', {}, []));
    subSections.push(new Section('Play Flow', {}, []));
    subSections.push(new Section('Mission/challenge Structure', {}, []));
    subSections.push(new Section('Puzzle Structure', {}, []));
    return subSections;
};