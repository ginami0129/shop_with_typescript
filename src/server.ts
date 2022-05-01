import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJson from "./config/swagger/index.json";
import handleError from "./middleware/errorMiddleware";
import { ProductRoutes, UserRoutes } from "./routes";
import connectedDB from "./config/DBconfig";
import type { ErrorRequestHandler } from "express";

dotenv.config();

connectedDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));
app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);

app.use(handleError);

const PORT = process.env.PORT || 8888;
const server = app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});

export { app, server };
