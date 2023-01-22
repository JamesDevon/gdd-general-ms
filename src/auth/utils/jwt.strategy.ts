import {PassportStrategy} from "@nestjs/passport";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {ExtractJwt, Strategy} from "passport-jwt";
import {User} from "src/auth/entities/users/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(@InjectRepository(User) private usersRepository : Repository<User>){
        super({secretOrKey: 'secret', jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()});
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { username } = payload;
        const user: User = await this.usersRepository.findOne({where: {username: username}});
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}