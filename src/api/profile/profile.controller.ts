import {Controller, Get, Param, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {ProfileService} from "src/api/profile/profile.service";
import {User} from "src/api/auth/entities/users/user.entity";
import { Response } from 'express';
import {GetUser} from "src/api/auth/utils/decorators/get-user.decorator";

@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService) {
    }


    @UseGuards(AuthGuard())
    @Get('/details/:userId')
    getDetails(@Param("userId") userId: string, @Res() response: Response, @GetUser() user: User) {
        const fetchedUser : Promise<User> = this.profileService.getDetails(userId);
        fetchedUser.then(userResult => {
           if(userResult && userResult.id === user.id) {
               response.status(200).send({id: userResult.id, email: userResult.email, username: userResult.username});
           } else {
               response.status(403).send({message: 'You do not have access to this user information'});
           }
        });
    }
}
