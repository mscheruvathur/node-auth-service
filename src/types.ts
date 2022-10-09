import * as express from "express";

export type PromiseResponse = Promise<express.Response<any, Record<string, any>>>
