import {MultiselectContent} from "../../../schemas/content/MultiselectContent";

export const getTargetAudiences = () => {
    const targetAudienceInfo: Array<MultiselectContent> = [];
    targetAudienceInfo.push(new MultiselectContent('3+', ''));
    targetAudienceInfo.push(new MultiselectContent('7+', ''));
    targetAudienceInfo.push(new MultiselectContent('12+', ''));
    targetAudienceInfo.push(new MultiselectContent('16+', ''));
    targetAudienceInfo.push(new MultiselectContent('18+', ''));
    return targetAudienceInfo;
}