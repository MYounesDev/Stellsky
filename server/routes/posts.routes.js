import express from "express";
import {
  createPost,
  getPosts,
  getUserPosts,
  getPostById,
  deletePost,
  cleanInvalidImages,
  likePost,
  unlikePost,
} from "../controllers/posts.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Text content of the post
 *               image:
 *                 type: string
 *                 description: Image URL or base64 string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Server error
 */
router.post("/", authMiddleware, createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts with pagination
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of posts
 *       500:
 *         description: Server error
 */
router.get("/", getPosts); // Public - herkes görebilir

/**
 * @swagger
 * /posts/user/{walletAddress}:
 *   get:
 *     summary: Get posts by a specific user
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: walletAddress
 *         required: true
 *         schema:
 *           type: string
 *         description: User's wallet address
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of user's posts
 *       500:
 *         description: Server error
 */
router.get("/user/:walletAddress", getUserPosts); // Public - herkes görebilir

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a single post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post details
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getPostById); // Public - herkes görebilir

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post (only by its author)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Not authorized to delete this post
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", authMiddleware, deletePost);

/**
 * @swagger
 * /posts/admin/clean-images:
 *   post:
 *     summary: Clean invalid image fields (admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Invalid images cleaned successfully
 *       500:
 *         description: Server error
 */
router.post("/admin/clean-images", authMiddleware, cleanInvalidImages);

// Like a post
router.put("/:id/like", authMiddleware, likePost);

// Unlike a post
router.put("/:id/unlike", authMiddleware, unlikePost);

export default router;
