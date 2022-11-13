import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class RegisterCredentialsDto {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password is too week',
    })
    password: string;

}