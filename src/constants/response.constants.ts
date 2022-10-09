import {Response} from "express";
import { statusCode } from "./status.constants";
import { ResponseInterface } from "./interfaces.constants";
import { AccessDenied ,APIErrorHandler } from "../utils/exceptions.utils";


export const sendResponse = (res: Response, type: "Success" | "Error", options: {
    status?: number,
    message: string,
    data?: any
}) => {

    let {message, status, data} = options

    if (!status) {
        if (type === "Success") {
            status = statusCode.HTTP_200_OK
        } else {
            status = statusCode.HTTP_500_INTERNAL_SERVER_ERROR
        }
    }

    const response: ResponseInterface = {
        status: status,
        message: {
            message: message
        }
    }

    if (data) response.message.data = data

    return res.status(status).send(response)
}


export const throwErrorResponse = (res: Response, err: any) => {

    if (err instanceof AccessDenied) {
        return sendResponse(res, "Error", {
            message: err._msg,
            status: err._status
        });
    } else if (err instanceof APIErrorHandler) {
        return sendResponse(res, "Error", {
            status: err._status,
            message: err._msg,
            data: err._info
        })
    } else if (err instanceof Object) {
        return sendResponse(res, "Error", {
            message: err.message,
            status: statusCode.HTTP_500_INTERNAL_SERVER_ERROR,
            data: {
                Errors: err.errors
            }
        });
    }

    return sendResponse(res, "Error", {
        message: err.toString()
    });
}