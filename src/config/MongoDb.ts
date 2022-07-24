import * as dotenv from 'dotenv';
import {MongooseModuleOptions} from "@nestjs/mongoose/dist/interfaces/mongoose-options.interface";

dotenv.config();

export class MongoDb {

    private static readonly config: MongooseModuleOptions = {
        type: 'mongodb',
        host: process.env.MONGO_ADDRESS,
        port: Number(process.env.MONGO_PORT),
        username: process.env.MONGO_USER,
        password: process.env.MONGOPASSWORD,
        database: process.env.MONGO_DB,
        autoLoadEntities: true,
        synchronize: true,
        useUnifiedTopology: true,
        uri: process.env.MONGO_URI
    };


    public static getConfig() {
        return this.config;
    }
}
