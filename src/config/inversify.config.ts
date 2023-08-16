import { Container } from "inversify";
import {TYPES} from "./DI.types";
import {IEmployeeController} from "../domain/port/in/IEmployeeController";
import {EmployeeController} from "../infrastructure/rest/Employee.controller";
import {EmployeeRoutes} from "../infrastructure/rest/Employee.routes";
import {HttpServer} from "../infrastructure/server/HttpServer";
import {Router} from "../infrastructure/server/Router";
import {IEmployeeService} from "../domain/application/IEmployeeService";
import {IEmployeeRepository} from "../domain/port/out/IEmployeeRepository";
import {EmployeeRepository} from "../infrastructure/repository/EmployeeRepository";
import {EmployeeService} from "../domain/application/EmployeeService";

const DI = new Container();

DI.bind<IEmployeeRepository>(TYPES.EmployeeRepository).to(EmployeeRepository).inSingletonScope();
DI.bind<IEmployeeController>(TYPES.EmployeeController).to(EmployeeController).inSingletonScope();
DI.bind<Router>(TYPES.EmployeeRouter).to(Router).inSingletonScope();
DI.bind<EmployeeRoutes>(TYPES.EmployeeRoutes).to(EmployeeRoutes).inSingletonScope();
DI.bind<HttpServer>(TYPES.HttpServer).to(HttpServer).inSingletonScope();
DI.bind<IEmployeeService>(TYPES.EmployeeService).to(EmployeeService).inSingletonScope();

export { DI };