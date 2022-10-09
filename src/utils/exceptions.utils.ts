
export class AccessDenied {

    _msg: string
    _status: number

    constructor (message: string) {
        this._msg =  (message) ? message : "Access Denied";
        this._status = 400
    }

}

export class APIErrorHandler {

    _msg: string;
    _status: number;
    _info: any;

    constructor (message: string, status: number = 500, additionalInfo: any = {} ) {
        this._msg = message;
        this._status = status;
        this._info = additionalInfo;
    }

}