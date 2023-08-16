import {inject, injectable} from "inversify";
import http from "http";
import express from "express";
import {TYPES} from "../../config/DI.types";
import {EmployeeRoutes} from "../rest/Employee.routes";

@injectable()
export class HttpServer{

    server: http.Server | null = null;
    constructor(
        @inject(TYPES.EmployeeRoutes) private employeeRoutes: EmployeeRoutes,
    ) {
        employeeRoutes.registerRoutes();
        this.server = http.createServer(
            express()
                .use("/api/employee", this.employeeRoutes.router.getRouter())
        );
    }
    getServer(): http.Server | null {
        return this.server;
    }
    listen(){
        this.server?.listen(4200, () => {
            console.log('server is started')
        });
    }
}