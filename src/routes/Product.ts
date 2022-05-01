import express from "express";

import ProductControllers from "../controllers/ProductControllers";

const routes = express.Router();

routes.post("/", ProductControllers.createProduct);

export { routes as ProductRoutes };
