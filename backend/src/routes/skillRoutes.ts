import { Router } from 'express';
import { getAllSkills } from '../controllers/skillController.js';

const routerSkill = Router();

routerSkill.get('/', getAllSkills);

export default routerSkill;