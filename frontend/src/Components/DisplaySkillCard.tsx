import {useState } from 'react'

export function DisplaySkillCard({ Skill, onClose }: { Skill: any, onClose: () => void})
{
  const [setSelectedSkills] = useState<any>(null);

	return (
		<div
			className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-8 lg:p-16"
			onClick={onClose}
			>
			<div
				className="w-full max-w-7xl h-full relative animate-fade-in rounded-2xl"
				onClick={(e) => e.stopPropagation()}
				>
				<button
					onClick={onClose}
					className="absolute top-4 right-4"
					>
				</button>
				<div className='rounded-xl bg-pop-red p-8 ml-10 mr-10 mt-15 mb-15 pl-10 pt-10 pb-10'>
					<button 
						onClick={onClose}
						className="absolute group right-20 top-16 p-8 text-sm text-light-grey  transition-transform cursor-pointer">
						<span className='absolute text-[10px] opacity-100 group-hover:opacity-50'>
							<svg xmlns="http://www.w3.org/2000/svg" mt-20 height="44px" viewBox="0 -960 960 960" width="44px" fill="#e3e3e3">
								<path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
							</svg>
						</span>
					</button>
					<h1 className="text-xl md:text-2xl lg:text-4xl font-black text-white ">
						{Skill.name}
					</h1> <br></br>
					<div className='space-y-3 max-h-[500px] overflow-y-auto pr-2'>

					<h2 className='text-sm md:text-me lg:text-lg text-pop-lighter pt-10'>
						Projets comportant cette compétence :<br></br>
						{Skill.ProjectSkills && Skill.ProjectSkills.length > 0 ? (							Skill.ProjectSkills.map((project: any) => (
							<a href={project.github}>
								<div 
									onClick={() => setSelectedSkills(project)}
									className={`relative group bg-light-grey rounded-xl text-dominant-shadow-blue hover:bg-white text-sm md:text-me lg:text-lg hover:shadow-2xl h-full min-h[200px] justify-between`}>
									<span className="absolute text-sm top-3 right-3 text-[10] tracking-widest opacity-0 group-hover:opacity-70 transition-opacity">
										Cliquer pour voir sur Github ↗
									</span>
									<strong className='text-dominant-shadow-blue text-sm md:text-me lg:text-lg block p-2 md:p-2 lg:p-3 mb-1 mt-5 tracking-wider font-black'>{project.name}</strong>
									<div className='p-2 md:p-2 lg:p-4'>
										{project.description}
									</div>
									<br></br>
										
								</div>
							</a>
								
							))
							) : (
								<p className='p-4 md:p-6 lg:p-10 test-sm md:text-lg lg:text-xl justify-center'>Aucun projet n'est lié a cette compétence</p>
							)
						}
					</h2>
					</div>

				</div>
			</div>
		</div>
	)
}
