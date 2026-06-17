import { useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { DisplayCard } from '../Components/DisplayCard'
import { ProjectCard } from '../Components/ProjectCard'

const CARD_STYLE = [
	{card: "bg-light-grey-blue text-dominant-shadow-blue border-pop-lighter/40 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-red text-pop-lighter border-white/10 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-light-grey border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-lighter text-pop-red border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-red text-pop-lighter border-white/10 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-light-grey border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
]

export function ProjectPage ({onNavigate}: {onNavigate: (page: "projects" | "skills" | "contact") => void})
{
	const [projects, setProjects] = useState([]);
	const [selectedProjects, setSelectedProjects] = useState<any>(null);
	const [activeFilters, setActiveFilters] = useState<number[]>([]);

	useEffect(() => {
	fetch('https://portfolio-backend-ui8s.onrender.com/api/projects')
		.then(res => res.json())
		.then(data => {
			console.log("Data received :", data);
			setProjects(data);
		})
		.catch(err => console.error("Error Fetch:", err));
	}, [])

	const allSkills = Array.from(
		new Map(
			projects.flatMap((p) => p.skills || []).map((s) => [s.id, s])).values()
		);
	
	const toggleFilter = (skillId: number) => {
		if (activeFilters.includes(skillId)) {
			setActiveFilters(activeFilters.filter(id => id !== skillId));
		}
		else {
			setActiveFilters([...activeFilters, skillId]);
		}
		};

	const clearFilters = () => setActiveFilters([]);

	const filteredProjects = projects.filter((project) => {
		if (activeFilters.length === 0) return true;
		return activeFilters.every(filterId =>
			project.skills?.some((skill: any) => skill.id === filterId)
		);
	});

	return (
		<div className="min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces flex flex-col">
			<Header />
			<main className='flex-grow'>
				<h2 className='text-xl mb-6 font-semibold'>Mes projets :</h2>
				{/*Buton to Skill page*/}
				<button 
					onClick= {() => onNavigate("skills")}
					className='cursor-pointer rounded-xl border mb-8 p-2 hover:bg-pop-red hover:text-pop-lighter'
				>
					Voir mes Skills ➔

				</button>
				{/*Tags - filters*/}
				<h1>Filtrer par compétences :</h1>
				<div className='flex flex-wrap bg-light-grey gap-2 items-center mb-8 p-4 rounded-xl border border-dominant-shadow-blue'>
					{allSkills.map((skill: any) => {
						const isSelected = activeFilters.includes(skill.id);
						return (
							<button
								key = {skill.id}
								onClick = {() => toggleFilter(skill.id)}
								className={`text-sm cursor-pointer flex items-center px-3 py-1.5 rounded-xl border gap-1.5 
								${isSelected
									? "bg-pop-red text-pop-lighter"
									: "bg-white text-pop-red"}`}
							>
								<span>{skill.name}</span>
								{isSelected && <span className='text-[10px] opacity-70 hover:opacity-100'>x</span>}
							</button>
						);
					})}
					{activeFilters.length > 0 && (
						<button
							onClick = {clearFilters}
							className='text-xs font-bold text-pop-red underline cursor-pointer pl-2 hover:text-opacity-80'>
								Réinitialiser ({activeFilters.length})
							</button>
					)}
				</div>
				{/*Cards table*/}
				{/*Filters has no project available */}
				{filteredProjects.length === 0 && (
					<div className='text-center'>
						<p className=''>Aucun projet ne comprend toutes ces compétences pour le moment.</p>
					</div>
				)}
				{/*Show project according to filters*/}
				<ul className='grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch'>
					{filteredProjects.map((project: any) => {
						const styleIndex = project.id % CARD_STYLE.length;
						const currentStyle = CARD_STYLE[styleIndex];

						return (
						<li key={project.id}
							className='h-full'>
								<ProjectCard
									Project={project}
									style={currentStyle}
									onClick={() => setSelectedProjects(project)}
								/>
						</li>
					);
					})}
				</ul>
			</main>
			<Footer onNavigate={onNavigate}/>
			{selectedProjects && (
				<DisplayCard
					Project={selectedProjects}
					onClose={() => setSelectedProjects(null)}
				/>
			)}
		</div>
	)
}