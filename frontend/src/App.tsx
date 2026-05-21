import { useEffect, useState } from 'react'

const CARD_STYLE = [
	{card: "bg-pop-red text-pop-lighter border-white/10 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-light-grey border-pop-red/20 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-dominant-shadow-blue text-white border-pop-lighter/40 rounded-xl shadow-lg border border-white/10",},
	{card: "bg-pop-lighter text-pop-red border-pop-red/20 rounded-xl shadow-lg border border-white/10",}
]

function SkillCard({ skill, style}: {skill: any, style: any})
{
	return (
		<div 
			className={`relative group p-6 hover:scale-[1.02] hover:shadow-2xl ${style.card}`}>
			<span className="absolute top-3 right-10 text-[10] uppercase tracking-widest opacity-0 group-hover:opacity-50 transition-opacity">
				Cliquer
			</span>
			<strong className='text-white text-lg block mb-1 tracking-wider font-black'>{skill.name}</strong> - {skill.category}
			<span className="text-xs uppercase tracking-wider">{skill.category}</span>						
			<p className='mt-1 text-sm opacity-90'>
				{skill.description}</p>
		</div>
	)
}

function App() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
	fetch('http://localhost:5001/api/skills')
		.then(res => res.json())
		.then(data => {
			console.log("Data received :", data);
			setSkills(data);
		})
		.catch(err => console.error("Error Fetch:", err));
	}, [])

  return (
		<div className="min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces">
			<header>
				<h1 className='text-4xl mb-4 font-Fraunces'>Mon Portfolio</h1>
				<h2 className='text-xl mb-6 font-semibold'>Mes projets :</h2>
			</header>
			<main>
				<ul className='grid grid-cols-1 md:grid-cols-4 gap-6'>
					{skills.map((skill: any) => {
						const styleIndex = skill.id % CARD_STYLE.length;
						const currentStyle = CARD_STYLE[styleIndex];

						return (
						<li key={skill.id}>
								<SkillCard
									skill={skill}
									style={currentStyle}
								/>
						</li>
					);
					})}
				</ul>
			</main>
        </div>
	)
}
export default App
