import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './lib/prisma.js';
import routerSkill from './routes/skillRoutes.js';

// Init
dotenv.config(); // chaerge .env
const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors()); // To connect front to backend, check security
app.use(express.json()); // To read json

// --- ROUTES ---
app.use('/api/skills', routerSkill);

app.get('/api/projects', async (req, res) => {
	try {
        const projects = await prisma.project.findMany({
            include: {
                skills: true
            }
        });
        
        res.json(projects);
    }
    catch (error) {
        console.error("❌ Erreur Prisma :", error);
        res.status(500).json({ error: "Error while gathering projects" });
    }
});

app.get('/api/skills', async (req, res) => {
	try {
        const skills = await prisma.skill.findMany({
            include: {
                ProjectSkills: true
            }
        });
        
        res.json(skills);
    }
    catch (error) {
        console.error("❌ Erreur Prisma :", error);
        res.status(500).json({ error: "Error while gathering skills" });
    }
});

// Server launch
app.listen(PORT, () => {
  console.log(`Link to server : http://localhost:${PORT}`);
});