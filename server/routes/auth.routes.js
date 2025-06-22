import express from 'express';
import { login, isAuthenticated } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login with wallet address
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - walletAddress
 *             properties:
 *               walletAddress:
 *                 type: string
 *                 description: User's wallet address
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Server error
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/isAuthenticated:
 *   get:
 *     summary: Check if user is authenticated
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User is authenticated
 *       401:
 *         description: User is not authenticated
 */
router.get('/isAuthenticated', authMiddleware, isAuthenticated);

export default router; 