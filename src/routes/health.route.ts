import { Router } from "express";
import { fetchHealth } from "../controllers/health.controller";

const router = Router();

/**
 * @openapi
 * {
 *   "/health": {
 *     "get": {
 *       "summary": "Check server health",
 *       "tags": ["Health"],
 *       "responses": {
 *         "200": {
 *           "description": "Server is healthy",
 *           "content": {
 *             "application/json": {
 *               "schema": {
 *                 "allOf": [
 *                   { "$ref": "#/components/schemas/HttpResponse" },
 *                   {
 *                     "type": "object",
 *                     "properties": {
 *                       "message": {
 *                         "type": "string",
 *                         "example": "Server is healthy"
 *                       }
 *                     }
 *                   }
 *                 ]
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
router.get("", fetchHealth);

export default router;
