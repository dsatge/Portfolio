import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Feeling-up in progress...");

  const skillsData = [
    { name: 'Anglais', category: 'Language', icon: 'anglais.svg' },
    { name: 'Francais', category: 'Language', icon: 'Francais.svg' },
    { name: 'Langage C', category: 'Language', icon: 'c.svg' },
    { name: 'Langage C++', category: 'Language', icon: 'cpp.svg' },
    { name: 'TypeScript', category: 'Language', icon: 'ts.svg' },
    { name: 'TypeScript', category: 'Language', icon: 'ts.svg' },
    { name: 'React', category: 'Language', icon: 'react.svg' },
    { name: 'Docker', category: 'Language', icon: 'docker.svg' },
    { name: 'Programmation', category: 'Hard Skill', icon: 'prog.svg' },
    { name: 'Marketing', category: 'Hard Skill', icon: 'market.svg' },
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
  console.log("📁 Insertion of projects...");
  
  await prisma.project.upsert({
    where: { name: 'Ft_Printf' },
    update: {},
    create: {
      name: 'Ft_Printf',
      description: 'Recodage complet de printf.',
      github: 'https://github.com/dsatge/printf',
      skills: {
        connect: { name: 'Langage C' } 
      }
    },
  });

  console.log("✅ Database ready !");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });