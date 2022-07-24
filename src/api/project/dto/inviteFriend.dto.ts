import {IsEmail} from "class-validator";

export class InviteFriendDto {
    @IsEmail()
    email: string;
 }