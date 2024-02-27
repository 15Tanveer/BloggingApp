import express from 'express';
import authRouter from './routes/authRoutes.js';
import blogRouter from './routes/blogRoute.js';
 

const app= express();

// to parse the body data 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// Routes
app.use('/api/blogs', blogRouter);
app.use('/api',authRouter)

export {app}