import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {ContentTypeEnum} from "../../../../enums/ContentType.enum";
import {v4 as uuid} from 'uuid';

@Schema()
export class Section {


    constructor(title: string, content: Object, subSections: Array<Section>, type: ContentTypeEnum = ContentTypeEnum.FreeText) {
        this._id = uuid();
        this.title = title;
        this.content = content;
        this.subSections = subSections;
        this.type = type;
    }

    @Prop()
    _id: string;

    @Prop()
    title: string;

    @Prop()
    type: ContentTypeEnum;

    @Prop({type: Object})
    content: Object;

    @Prop({type: Array<Section>})
    subSections: Array<Section>;
}

export const SectionSchema = SchemaFactory.createForClass(Section);

export type SectionDocument = Section & Document;