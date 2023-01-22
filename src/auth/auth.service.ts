import {ConflictException, Injectable, InternalServerErrorException, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {AuthCredentialsDto} from "src/auth/dto/auth-credentials.dto";
import {JwtService} from "@nestjs/jwt";
import {RegisterCredentialsDto} from "src/auth/dto/register-credentials.dto";
import {User} from "src/auth/entities/users/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DatabaseEnums} from "../enums/database.enums";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private usersRepository : Repository<User>, private jwtService : JwtService) {

    }

    async signUp(registerCredentialsDto: RegisterCredentialsDto) : Promise<void> {
        const {username, email, password} = registerCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.usersRepository.create({username, password: hashedPassword, email});
        try{
            await this.usersRepository.save(user);
        }catch(error){
            console.error(error);
            if (error.errno === DatabaseEnums.ER_DUP_ENTRY) {
                throw new ConflictException('Username already exists');
            }else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) : Promise<{ accessToken, userId }> {
        const {username, password} = authCredentialsDto;
        const user: User = await this.usersRepository.findOne({where: {username: username}});
        if(user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = {username};
            const accessToken : string = this.jwtService.sign(payload);
            return { accessToken, userId: user.id };
        }
        else {
            throw new UnauthorizedException("Wrong credentials");
        }
    }

}
