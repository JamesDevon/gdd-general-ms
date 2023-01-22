import {Project} from "../schemas/project/project.schema";
import {Section} from "../schemas/section/section.schema";
import {ContentTypeEnum} from "../../enums/ContentType.enum";

export class ProjectTree {

    private project: Project;

    constructor(project: Project) {
        this.project = project;
    }

    getProject(): Project {
        return this.project;
    }

    getSectionPath(sectionKey: string) : Array<number> {
        return this.findSectionPath(this.project.sections, sectionKey);
    }

    getSection(path: Array<number>): Section | null {
        return this.findSection(this.project.sections, path);
    }

    replaceSection(section: Section, path: Array<number>): void {
        let sectionOnScope = section;
        let parentSection: Section;
        let index: number;
        const adam = path[0];
        path.pop();
        while (path.length > 0) {
            parentSection = this.findSection(this.project.sections, path);
            index = parentSection.subSections.findIndex((s) => s._id == sectionOnScope._id);
            parentSection.subSections[index] = sectionOnScope;
            sectionOnScope = parentSection;
            path.pop();
        }
        this.project.sections[adam] = sectionOnScope;
    };

    private findSectionPath(parentSections: Array<Section>, sectionKey: string): Array<number> {
        const pathArray: Array<number> = [];
        for (let i=0; i<parentSections.length; i++) {
            const isEqual = sectionKey === parentSections[i]._id;
            if (isEqual) {
                pathArray.push(i);
                return pathArray;
            }
            if (parentSections[i].subSections) {
                const included = this.isIncludedIn(parentSections[i].subSections, sectionKey);
                if (included) {
                    pathArray.push(i);
                    pathArray.push(...this.findSectionPath(parentSections[i].subSections, sectionKey));
                    return pathArray;
                }
            }
        }
        return pathArray;
    };

    private findSection(parentSections: Array<Section>, path: Array<number>): Section | null {
        let section: Section = {
            title: '',
            content: '',
            _id: '',
            type: ContentTypeEnum.Parent,
            subSections: parentSections,
        };
        for (let i=0; i<path.length; i++) {
            section = section.subSections[path[i]];
        }
        return section;
    };

    private isIncludedIn(parentSections: Array<Section>, subSectionKey: string = ''): boolean{
        let found = false;
        for (let i=0; i<parentSections.length; i++) {
            found = (parentSections[i]._id === subSectionKey);
            if (found) {
                return found;
            } else if (parentSections[i].subSections) {
                found = this.isIncludedIn(parentSections[i].subSections, subSectionKey);
            }
        }
        return found;
    };


}