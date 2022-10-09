import express from "express";
import config from "config";
import log from "./logger";
import { APIVersion } from "./constants/settings.constants";
import userRouter from "./routes/user.routes";

const app = express();



const PORT = config.get("PORT") as number;
const HOST = config.get("HOST") as string;

app.use(`/${APIVersion}/user`, userRouter)

app.listen(PORT, HOST, () => {
    log.info(`Server listing at http://${HOST}:${PORT}`);
})