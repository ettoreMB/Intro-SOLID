import express from "express";
import swagger from "swagger-ui-express";

import Swagger from "../Swagger.json/";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(Swagger));
app.use("/users", usersRoutes);

export { app };
