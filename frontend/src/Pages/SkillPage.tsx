import { useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { SkillCard } from '../Components/SkillCard';
import { DisplaySkillCard } from '../Components/DisplaySkillCard'

const CARD_STYLE = [
	{card: "bg-pop-lighter text-pop-red border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-red text-pop-lighter border-white/10 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-light-grey border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-lighter text-pop-red border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-red text-pop-lighter border-white/10 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-light-grey border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
]

// const CARD_STYLE = {
// 	card1: "bg-pop-lighter text-pop-red border-pop-red/20",
// 	card2: "bg-dominant-shadow-blue text-light-grey border-slate-300",
// 	card3: "bg-light-grey text-dominant-shadow-blue border-dominant-shadow-blue/50",
// 	card4: "bg-dominant-shadow-blue text-pop-red text-slate-300 border-slate-700"
// }

export function SkillPage ({onNavigate}: {onNavigate: (page : "projects" | "skills" | "contact") => void})
{
  const [skills, setProjects] = useState<any[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<any>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
	fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
		.then(res => res.json())
		.then(data => {
			console.log("Data received :", data);
			setProjects(data);
		})
		.catch(err => console.error("Error Fetch:", err));
	}, [])

	const allCategory = Array.from(
		new Set(skills.map(s => s.category).filter(Boolean)));
	
	const toggleFilter = (categoryName: string) => {
		if (activeFilters.includes(categoryName)) {
			setActiveFilters(activeFilters.filter(name => name !== categoryName));
		}
		else {
			setActiveFilters([...activeFilters, categoryName]);
		}
		};

	const clearFilters = () => setActiveFilters([]);

	const filteredSkills = skills.filter((skill) => {
		if (activeFilters.length === 0) return true;
		return activeFilters.includes(skill.category);
	});

	return (
		<div className = 'min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces flex flex-col'>

			< Header />
			<main className='flex-grow'>
				<h2 className='text-xl mb-6 font-semibold'>Mes compétences :</h2>
				{/*Buton to Project page*/}
				<button 
					onClick={() => onNavigate("projects")}
					className='cursor-pointer rounded-xl border mb-8 p-2 hover:bg-pop-red hover:text-pop-lighter'
				>
					Voir mes Projets ➔
				</button>
				{/*Tags - filters*/}
				<h1>Filtrer par compétences techniques :</h1>
				<div className='flex flex-wrap bg-light-grey gap-4 items-center mb-8 p-4 rounded-xl border border-dominant-shadow-blue'>
					{allCategory.map((categoryName: string) => {
						const isSelected = activeFilters.includes(categoryName);
						return (
							<button
								key = {categoryName}
								onClick={() => toggleFilter(categoryName)}
								className={`text-sm cursor-pointer flex items-center px-3 py-1.5 rounded-xl border gap-1.5 
								${isSelected
									? "bg-pop-red text-pop-lighter"
									: "bg-white text-pop-red"}`}>
								<span>{categoryName}</span>
								{isSelected && <span className='text-[10px] opacity-70 hover:opacity-100'>x</span>}
							</button>
						);
					})}
					{
						activeFilters.length > 0 && (
							<button
								onClick={clearFilters}
								className='text-xs font-bold text-pop-red underline cursor-pointer pl-2 hover:text-opacity-80'>
									Réinitialiser ({activeFilters.length})
							</button>
						)
					}
				</div>
				{/*Cards table*/}
					<ul className='grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch'>
						{filteredSkills.map((skill: any, index: number) => {
							const indexStyle = index % CARD_STYLE.length;
							const currentStyle = CARD_STYLE[indexStyle];
							return (
								<li key = {skill.name}
									className='h-full'>
									<SkillCard
										Skill = {skill}
										style = {currentStyle}
										onClick = {() => setSelectedSkills(skill)}
									/>

								</li>
							);
						})}
					</ul>

			</main>
			<Footer onNavigate = {onNavigate}/>
			{selectedSkills && (
				<DisplaySkillCard
					Skill={selectedSkills}
					onClose={() => setSelectedSkills(null)}
				/>
			)}

		</div>
	)

}