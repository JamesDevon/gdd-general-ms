import {DropDownContent} from "../../../schemas/content/DropDownContent";

export function getGameFlowSummary(): DropDownContent {
    const valuePool = 'ABCDEFGHIGKLMNOPQRSTUVXYZ';
    return new DropDownContent('Button', new Set<string>(valuePool.split('')));
}