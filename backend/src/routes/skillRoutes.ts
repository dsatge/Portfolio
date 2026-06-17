import { Router } from 'express';
import { getAllSkills } from '../controllers/skillController.js';
import prisma from '../lib/prisma.js';

const routerSkill = Router();

routerSkill.get('/', async (req, res) => {
    try {
        const skills = await prisma.skill.findMany({
            include: {
                ProjectSkills: true 
            }
        });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: "Erreur" });
    }
});

export default routerSkill;