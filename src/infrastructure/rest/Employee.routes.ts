import {inject, injectable} from "inversify";
import {TYPES} from "../../config/DI.types";
import {Router} from "../server/Router";
import {IEmployeeController} from "../../domain/port/in/IEmployeeController";
import {IRoutes} from "../server/IRouter";

@injectable()
export class EmployeeRoutes implements IRoutes{
    constructor(
        @inject(TYPES.EmployeeController) private employeeController: IEmployeeController,
        @inject(TYPES.EmployeeRouter) public router: Router,
    ) {}

    registerRoutes(): Router {
        const expressRouter = this.router.getRouter();
        expressRouter.get("/dev", this.employeeController.GetEmployees);
        return this.router;
    }
}