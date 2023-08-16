import {IEmployeeController} from "../../domain/port/in/IEmployeeController";
import {Response,Request} from "express";
import {TYPES} from "../../config/DI.types";
import {inject, injectable} from "inversify";
import {IEmployeeService} from "../../domain/application/IEmployeeService";

@injectable()
export class EmployeeController implements IEmployeeController{
    constructor(
        @inject(TYPES.EmployeeService) private employeeService: IEmployeeService
    ) {
    }

    GetEmployees=(_req: Request, res: Response)=>{
        const a=this.employeeService.GetEmployees();
         res.json(a)
    }


}