import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma.js';

export const getAllSkills = async (req: Request, res: Response) => {
	try
	{
		const skills = await prisma.skill.findMany();
		res.json(skills);
	}
	catch (error)
	{
		res.status(500).json({error: 'Error while reaching skills'});
	}
}