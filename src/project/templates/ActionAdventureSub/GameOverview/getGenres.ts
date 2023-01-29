import {MultiselectContent} from "../../../schemas/content/MultiselectContent";

export function getGenresSubSections() : Array<MultiselectContent> {
    const genresSelections: Array<MultiselectContent> = [];
    genresSelections.push(new MultiselectContent('Platformer', ''));
    genresSelections.push(new MultiselectContent('Shooter', ''));
    genresSelections.push(new MultiselectContent('Fighting', ''));
    genresSelections.push(new MultiselectContent('Beat \'em up', ''));
    genresSelections.push(new MultiselectContent('Stealth', ''));
    genresSelections.push(new MultiselectContent('Survival', ''));
    genresSelections.push(new MultiselectContent('Survival horror', ''));
    return genresSelections;
}