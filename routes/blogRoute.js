// routes/blogRoutes.js
import express from 'express';
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const blogRouter = express.Router();

blogRouter.post('/', authenticateToken, createBlog);
blogRouter.get('/', authenticateToken, getAllBlogs);
blogRouter.get('/:id', authenticateToken, getBlogById);
blogRouter.put('/:id', authenticateToken, updateBlog);
blogRouter.delete('/:id', authenticateToken, deleteBlog);

export default blogRouter;
