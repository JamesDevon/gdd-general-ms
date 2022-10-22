import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Section {


    constructor(_id: number, title: string, content: Object, subSections: Array<Section>) {
        this._id = _id;
        this.title = title;
        this.content = content;
        this.subSections = subSections;
    }

    @Prop()
    _id: number;

    @Prop()
    title: string;

    @Prop({type: Object})
    content: Object;

    @Prop({type: Array<Section>})
    subSections: Array<Section>;
}

export const SectionSchema = SchemaFactory.createForClass(Section);

export type SectionDocument = Section & Document;