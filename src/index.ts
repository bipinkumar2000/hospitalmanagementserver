import express from "express";
import { requestLogger } from "./middlewares/logger.middleware";
import { errorHandler } from "./middlewares/http-error.middleware";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";
import healthRoutes from "./routes/health.route";
import departmentRoutes from "./routes/department.route";

const app = express();

app.use(express.json());
app.use(requestLogger);

const baseURL = "/hospital-management/api/v1";

// Swagger UI
app.use(`${baseURL}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(`${baseURL}/health`, healthRoutes);
app.use(`${baseURL}/departments`, departmentRoutes);

app.use(errorHandler);

export default app;
