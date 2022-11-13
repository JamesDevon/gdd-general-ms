
export class MultiselectContent {
    title: string;
    description: string;
    selected: boolean;

    constructor(title: string, description: string, selected?: boolean) {
        this.title = title;
        this.description = description;
        this.selected = (selected != undefined) ? selected : false;
    }
}