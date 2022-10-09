
export interface ResponseInterface {
    status: number;
    message: {
        message: string;
        data?: any;
    }
}