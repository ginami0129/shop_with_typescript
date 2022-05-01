import express from "express";

import UserControllers from "../controllers/UserControllers";

const routes = express.Router();

routes.post("/", UserControllers.RegisterUser);
routes.post("/login", UserControllers.Login);

export { routes as UserRoutes };
