import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma.js';

export const getAllProjects = async (req: Request, res: Response) => {
	try
	{
		const projects = await prisma.project.findMany();
		res.json(projects);
	}
	catch (error)
	{
		res.status(500).json({error: 'Error while reaching projetcs'});
	}
}