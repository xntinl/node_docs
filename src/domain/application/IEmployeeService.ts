import {Employee} from "../model/Employee";

export interface IEmployeeService{
    GetEmployees():Employee[]
}