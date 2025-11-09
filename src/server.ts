import app from "./index";
import dotenv from "dotenv";
import logger from "./utils/logger";
import sequelize from "./config/sequelize.config";
dotenv.config();

const port = process.env.PORT || 8080;

(async () => {
  try {
    app.listen(port, async () => {
      await sequelize.authenticate();
      await sequelize.sync();
      logger.info(`Started application on port ${port}`);
      logger.info(
        `Visit http://localhost:8080/hospital-management/api/v1/docs/ for API documentation`,
      );
    });
  } catch (error) {
    logger.error("Could not start the server");
    logger.error(error);
  }
})();
