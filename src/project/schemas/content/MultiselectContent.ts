import {randomUUID} from "crypto";

export class MultiselectContent {
    id: string;
    title: string;
    description: string;
    selected: boolean;

    constructor(title: string, description: string, selected?: boolean) {
        this.id = randomUUID();
        this.title = title;
        this.description = description;
        this.selected = (selected != undefined) ? selected : false;
    }
}