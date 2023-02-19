import {randomUUID} from "crypto";

export class DropDownContent {
    id: string;
    title: string;
    values: string[];
    selectors: DropDownValue;

    constructor(title: string, values: Set<string>) {
        this.id = randomUUID();
        this.title = title;
        this.values = Array.from(values);
    }
}

export class DropDownValue {
    id: string;
    title: string;
    description: string;


    constructor(title: string, description: string) {
        this.id = randomUUID();
        this.title = title;
        this.description = description;
    }
}