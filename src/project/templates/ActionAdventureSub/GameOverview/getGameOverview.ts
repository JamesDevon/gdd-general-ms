import {Section} from "../../../schemas/section/section.schema";
import {ContentTypeEnum} from "../../../../enums/ContentType.enum";
import {getTargetAudiences} from "./getTargetAudiences";
import {getGenresSubSections} from "./getGenres";

export const getGameOverviewSubSections = () => {
    const subSections: Array<Section> = [];
    subSections.push(new Section('Game Concept', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section('Target Audience', getTargetAudiences(), [], ContentTypeEnum.MultiSelect));
    subSections.push(new Section('Genre(s)', getGenresSubSections(), [], ContentTypeEnum.MultiSelect));
    subSections.push(new Section('Game Flow Summary', {}, [], ContentTypeEnum.FreeText));
    subSections.push(new Section('Look and Feel', {}, [], ContentTypeEnum.FreeText));
    return subSections;
};