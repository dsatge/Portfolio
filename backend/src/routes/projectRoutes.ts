import { Router } from 'express';
import { getAllProjects } from '../controllers/projectController.js';

const routerProject = Router();

routerProject.get('/', getAllProjects);

export default routerProject;