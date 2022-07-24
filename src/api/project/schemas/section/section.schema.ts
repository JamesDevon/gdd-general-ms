import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Section {


    constructor(_id: number, title: string, content: Object) {
        this._id = _id;
        this.title = title;
        this.content = content;
    }

    @Prop()
    _id: number;

    @Prop()
    title: string;

    @Prop({type: Object})
    content: Object;
}

export const SectionSchema = SchemaFactory.createForClass(Section);

export type SectionDocument = Section & Document;