import {Request, Response, NextFunction} from "express";
import { sendResponse, throwErrorResponse } from "../constants/response.constants";
import {statusCode} from "../constants/status.constants";


export class UserController {

    static async userRegistration (req: Request, res: Response, next: NextFunction) {
        try {
            return sendResponse(res, "Success", {
                status: statusCode.HTTP_201_CREATED,
                message: "Created",
                data: "User Created Successfully"
            })
        } catch (err) {
            return throwErrorResponse(res, err)
        }
    }

    static async userLogin (req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            return throwErrorResponse(res, err)
        }
    }



}