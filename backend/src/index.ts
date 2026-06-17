import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './lib/prisma.js';
import routerSkill from './routes/skillRoutes.js';
import routerProject from './routes/projectRoutes.js';

// Init
dotenv.config(); // chaerge .env
const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors()); // To connect front to backend, check security
app.use(express.json()); // To read json

// --- ROUTES ---
app.use('/api/skills', routerSkill);
app.use('/api/projects', routerProject);


// Server launch
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});