import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Feeling-up in progress...");

  /// skills list
const skillsData = [
    { name: 'Dockerfile', category: 'Language', icon: 'docker.svg' },
    { name: 'Shell', category: 'Language', icon: 'shell.svg' },
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
		description: "Création d'un interpréteur de commandes (un terminal Bash fonctionnel) en binôme. Ce projet \
		d'envergure nécessite la création d'un parseur de texte complexe, la gestion de l'historique, de l'environnement \
		système, des signaux Unix, ainsi que l'exécution en parallèle de processus connectés par des pipes.",
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
	{
		name: 'Inception',
		description: "Configuration d'une infrastructure système multi-conteneurs entièrement automatisée à l'aide de Docker \
		et Docker Compose. Déploiement et sécurisation de microservices interdépendants (Nginx, WordPress, MariaDB) s'exécutant \
		sur une machine virtuelle Debian dédiée, sans utiliser d'images préconfigurées.",
		github: 'https://github.com/dsatge/Inception',
		skills : ['Dockerfile', 'Shell', 'Programmation']
	},
	{
		name: 'Piscine C++',
		description: "Série de modules intensifs pour passer du paradigme procédural (C) à la Programmation Orientée Objet \
		(POO) en C++. Apprentissage des concepts clés : polymorphisme, encapsulation, héritage, classes abstraites, interfaces, \
		allocation dynamique de formes spécifiques (orthodoxe) et utilisation de la Standard Template Library (STL).",
		github: 'https://github.com/dsatge/CPP00',
		skills : ['Language C++', 'Programmation']
	},
	{
		name: 'Philosopheer',
		description: "Résolution du célèbre problème de concurrence et de synchronisation d'Edsger Dijkstra (Le dîner des philosophes). \
		Apprentissage de la programmation multithread (pthread), de l'utilisation des Mutexes pour éviter les 'Data Races' \
		(conflits d'accès) et de la prévention des blocages mortels (Deadlocks).",
		github: 'https://github.com/dsatge/Philosopher',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Pipex',
		description: "Introduction à la programmation système Unix en recodant le fonctionnement des mécanismes de pipelines du \
		terminal (|). Manipulation des processus en C (fork, execve), redirection des entrées/sorties standards (dup2) et gestion \
		rigoureuse des pipelines et des fichiers.",
		github: 'https://github.com/dsatge/pipex',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Push_swap',
		description: "Projet d’algorithmie pure consistant à trier une pile de nombres en utilisant un ensemble limité d'instructions, \
		avec un objectif d'optimisation maximal du nombre de coups. Conception et implémentation d'algorithmes de tri efficaces \
		(complexité logicielle) et manipulation de listes chaînées.",
		github: 'https://github.com/dsatge/push_swap',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'So_long',
		description: "Développement d'un petit jeu vidéo 2D en vue du dessus à l'aide de la bibliothèque graphique MiniLibX. Gestion \
		des fenêtres, rendu des textures (sprites), gestion des événements clavier et implémentation d'algorithmes de vérification de \
		chemins valides (parsing de cartes).",
		github: 'https://github.com/dsatge/so_long',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Get_next_line',
		description: "Implémentation d'une fonction algorithmique permettant de lire le contenu d'un descripteur de fichier \
		(File Descriptor) ligne par ligne. Apprentissage intensif de la gestion des variables statiques, de l'allocation mémoire \
		dynamique et de l'optimisation des lectures avec des tampons (buffers) variables.",
		github: 'https://github.com/dsatge/get_next_line',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Libft',
		description: "Recodage d'une bibliothèque de fonctions standards en C. Ce projet fondateur permet de comprendre profondément \
		la manipulation des chaînes de caractères, la gestion de la mémoire (malloc/free) et de poser les bases de la rigueur \
		algorithmique exigée à 42.",
		github: 'https://github.com/dsatge/libft',
		skills : ['Language C', 'Programmation']
	},
	{
		name: 'Parcours International',
		description: "Immersion totale de 3 ans à Sydney, transformant une année d'étude initiale (DUETI en Business Management) en \
		un parcours d'expatriation prolongé. Ce projet de vie combine une expérience de chargée de contenu digital \
		(stage puis embauche) axée sur la stratégie des réseaux sociaux, une gestion de la vie quotidienne (travail dans \
		la restauration), et l'amorçage d'une reconversion vers le développement web en cours du soir. Une aventure humaine \
		et professionnelle menée intégralement en anglais, validant une forte capacité d'adaptation, une grande résilience et un \
		bilinguisme opérationnel.",
		github: '',
		skills : ['Anglais', 'Communication', 'Esprit d\'équipe']
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