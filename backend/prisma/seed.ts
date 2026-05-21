import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Feeling-up in progress...");

  /// skills list
const skillsData = [
    { name: 'Anglais', category: 'Language', icon: 'anglais.svg' },
    { name: 'Francais', category: 'Language', icon: 'Francais.svg' },
    { name: 'Language C', category: 'Language', icon: 'c.svg' },
    { name: 'Language C++', category: 'Language', icon: 'cpp.svg' },
    { name: 'TypeScript', category: 'Language', icon: 'ts.svg' },
    { name: 'React', category: 'Language', icon: 'react.svg' },
    { name: 'Prisma', category: 'Language', icon: 'prisma.svg' },
    { name: 'Node JS', category: 'Language', icon: 'nodejs.svg' },
    { name: 'Docker', category: 'Language', icon: 'docker.svg' },
    { name: 'Programmation', category: 'Hard Skill', icon: 'prog.svg' },
    { name: 'Frontend', category: 'Hard Skill', icon: 'frontend.svg' },
    { name: 'Backend', category: 'Hard Skill', icon: 'backend.svg' },
    { name: 'Fullstack', category: 'Hard Skill', icon: 'fullstack.svg' },
    { name: 'Marketing', category: 'Hard Skill', icon: 'market.svg' },
    { name: 'Database', category: 'Hard Skill', icon: 'Database.svg' },
    { name: 'Esprit d\'équipe', category: 'Soft Skill', icon: 'team.svg' },
    { name: 'Communication', category: 'Soft Skill', icon: 'comm.svg' },
    { name: 'Empathie', category: 'Soft Skill', icon: 'empat.svg' },
    { name: 'Creativite', category: 'Soft Skill', icon: 'creat.svg' },
  ];

  console.log("🛠️  Insertion of skills...");
  for (const s of skillsData) {
    await prisma.skill.upsert({
      where: { name: s.name },
      update: {},
      create: s,
    });
  }

  // Project list
const projectsData = [
	{
		name: 'Ft_Printf',
		description: 'Recodage complet de la célèbre fonction printf en C.',
		github: 'https://github.com/dsatge/ft_printf.git',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Portfolio',
		description: 'Création d\'un site internet vitrine de tous les projets et notions apprises. Ce site est destinée \
		a mieux prendre en main les outils de gestion d\'un projet backend et frontend mais également la gestion d\'une \
		base de donnée via prisma.',
		github: 'https://github.com/dsatge/Portfolio.git',
		skills : ['TypeScript', 'Prisma', 'Node JS', 'React', 'Frontend', 'Backend', 'Database', 'Docker' , 'Fullstack', 'Programmation']
	},
	{
		name: 'Minishell',
		description: 'Recodage d\'un terminal de type shell. Pour cela il a fallut comprendre le fonctionnement et le \
		comportement de bash pour pouvoir enssuite le recréer. Le tout sous forme de travail de groupe.',
		github: 'https://github.com/dsatge/mini_shell.git',
		skills : ['Language C', 'Esprit d\'équipe', 'Programmation']
	},
	{
		name: 'Ft_IRC',
		description: 'Creation d\'un chat relais internet (Internet Relay Chat : IRC). L\'idée est de créer un serveur \
		sur lequel des personnes peuvent s\'échanger des messages directs via leurs pseudo ou bien communiquer via des \
		channels. Le tout avec un service de moderation et de restriction pour les channels mais également des messages \
		informatifs pour les utilisateurs pour savoir qui est connecté ou bien qui a quitté le serveur.',
		github: 'https://github.com/dsatge/Ft_IRC.git',
		skills : ['Language C++', 'Esprit d\'équipe', 'Programmation']
	},
]

  console.log("📁 Insertion of projects...");
for (const p of projectsData) {
	await prisma.project.upsert({
		where: { name: p.name },
		update: {},
		create: {
		  name: p.name,
		  description: p.description,
		  github: p.github,
		  skills: {
			connect: p.skills.map(skillName => ({name: skillName}))
		  }
		},
	  });

}

  console.log("✅ Database ready !");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });