import {injectable} from "inversify";
import {IEmployeeService} from "./IEmployeeService";
import {Employee} from "../model/Employee";

@injectable()
export class EmployeeService implements IEmployeeService{


    GetEmployees():Employee[]{
        return[{
            name:"javier"
        }]
    }

}