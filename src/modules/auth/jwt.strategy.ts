import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'aassaddfggzzlllma33ZZZFF555666',
        });
    }

    async validate(payload: any){
        return {
            id : payload.sub ,
            name: payload.name,
            tenat: "hamitouche"
        }
    }
}
