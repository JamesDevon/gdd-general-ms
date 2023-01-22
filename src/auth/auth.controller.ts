import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {AuthCredentialsDto} from "src/auth/dto/auth-credentials.dto";
import {AuthService} from "src/auth/auth.service";
import {RegisterCredentialsDto} from "src/auth/dto/register-credentials.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/signUp')
    signUp(@Body() registerCredentialsDto: RegisterCredentialsDto) {
        return this.authService.signUp(registerCredentialsDto);
    }

    @Post('/signIn')
    @HttpCode(200)
    signIn(@Body() authCredentialsDto: AuthCredentialsDto) : Promise<{ accessToken, userId }> {
        return this.authService.signIn(authCredentialsDto);
    }

}
