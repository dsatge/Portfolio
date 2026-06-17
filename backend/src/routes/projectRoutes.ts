import { Router } from 'express';
import { getAllProjects } from '../controllers/projectController.js';
import prisma from '../lib/prisma.js';

const routerProject = Router();

routerProject.get('/', async (req, res) => {
	try {
        const projects = await prisma.project.findMany({
            include: {
                skills: true
            }
        });
        
        res.json(projects);
    }
    // catch (error) {
    //     res.status(500).json({ error: "Error while gathering projects" });
    // }
	catch (error) {
    console.error("❌ ERREUR PRISMA CRITICAL :", error);
    res.status(500).json({ error: "Error while gathering projects" });
}
});

export default routerProject;