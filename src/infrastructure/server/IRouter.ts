import express from "express";
import {Router} from "./Router";

export interface IRouter {
    getRouter(): express.Router;
}
export interface IRoutes {
    registerRoutes(): Router;
}