import {DI} from "../config/inversify.config";
import {HttpServer} from "../infrastructure/server/HttpServer";
import {TYPES} from "../config/DI.types";
export async function bootstrap() {
    try {
        DI.get<HttpServer>(TYPES.HttpServer).listen();
    } catch (e) {
        console.log(e)
    }
}