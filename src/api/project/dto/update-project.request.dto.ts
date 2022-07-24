import {GenreEnum} from "src/enums/genre.enum";

export class UpdateProjectRequestDto {
    title: string;
    genre: GenreEnum;
    description: string;
}