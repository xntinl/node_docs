import {Employee} from "../../model/Employee";

export interface IEmployeeRepository{
    GetEmployees():Employee[]
}