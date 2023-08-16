import {Employee} from "../../domain/model/Employee";
import {IEmployeeRepository} from "../../domain/port/out/IEmployeeRepository";
import { injectable} from "inversify";

@injectable()
export class EmployeeRepository implements IEmployeeRepository{

    GetEmployees(): Employee[] {
        return [];
    }

}