import { Router } from "express";
import { getDepartments } from "../controllers/department.controller";

const router = Router();

/**
 * @openapi
 * /departments:
 *   get:
 *     tags:
 *       - Departments
 *     summary: Get all departments (paginated)
 *     description: Returns a paginated list of hospital departments with optional search and sorting filters.
 *     operationId: getDepartments
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *           minimum: 1
 *         description: Page number (starting from 1).
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 20
 *           minimum: 1
 *           maximum: 100
 *         description: Number of records per page.
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: id
 *         description: Column name to sort by (e.g., id, name, createdAt).
 *       - in: query
 *         name: sortDir
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: Sorting direction (asc or desc).
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term to filter departments by name or description.
 *     responses:
 *       200:
 *         description: Departments fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Departments fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Department'
 *                     meta:
 *                       $ref: '#/components/schemas/PaginationMeta'
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Invalid query parameters
 *                 code:
 *                   type: string
 *                   example: BAD_QUERY
 *                 details:
 *                   type: object
 *                   description: Zod validation errors
 *       500:
 *         description: Internal server error while fetching departments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Could not fetch departments
 *                 code:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 *
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Cardiology
 *         description:
 *           type: string
 *           example: Department handling disorders of the heart and circulatory system.
 *     PaginationMeta:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *         perPage:
 *           type: integer
 *           example: 20
 *         total:
 *           type: integer
 *           example: 45
 *         totalPages:
 *           type: integer
 *           example: 3
 */
router.get("", getDepartments);

export default router;
