import { useEffect, useState } from 'react'
import { Header } from '../Components/Header'

export function SkillPage ({onNavigate}: {onNavigate: () => void})
{
  const [skills, setProjects] = useState<any[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string>("All");
  const [activeFilters, setActiveFilters] = useState<any>(null);

  useEffect(() => {
	fetch('http://localhost:5001/api/skills')
		.then(res => res.json())
		.then(data => {
			console.log("Data received :", data);
			setProjects(data);
		})
		.catch(err => console.error("Error Fetch:", err));
	}, [])

	return (
		<div className = 'min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces'>

			< Header />
			<main>
				<h2 className='text-xl mb-6 font-semibold'>Mes compétences :</h2>
				<button 
					onClick={onNavigate}
					className='cursor-pointer rounded-xl border mb-8 p-2 hover:bg-pop-red hover:text-pop-lighter'
				>
					Voir mes Projets ➔

				</button>

			</main>
		</div>
	)

}