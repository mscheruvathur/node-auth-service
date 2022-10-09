import {Request, Response, NextFunction, Router} from "express";
import { UserController } from "../controller/user.controller";

const userRouter = Router()

userRouter.post("/register", UserController.userRegistration)
userRouter.post("/login", UserController.userLogin)

export default userRouter
