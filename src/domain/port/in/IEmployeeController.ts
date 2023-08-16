import {Response,Request} from "express";

export interface IEmployeeController {
    GetEmployees(req:Request,res:Response):void;
}