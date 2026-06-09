const TAG_STYLE = {
	Language: "bg-pop-lighter text-pop-red border-pop-red/20",
	'Hard Skill': "bg-dominant-shadow-blue text-light-grey border-slate-300",
	'Soft Skill': "bg-light-grey text-dominant-shadow-blue border-dominant-shadow-blue/50",
	default: "bg-dominant-shadow-blue text-pop-red text-slate-300 border-slate-700"
}

export function DisplayCard({ Project, onClose }: { Project: any, onClose: () => void})
{
	return (
		<div
			className="fixed inset-0 justify-center backdrop-blur-xs items-center justify-center p-4"
			onClick={onClose}
			>
			<div
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
					<h1 className="text-4xl font-black text-white ">
						{Project.name}
					</h1> <br></br>
					<div className="flex flex-wrap gap-2 mb-6">
						<h2 className='text-pop-lighter'>Compétences :</h2>
						{Project.skills && Project.skills.map((skill: any) => {
						  const badgeColorClass = TAG_STYLE[skill.category] || TAG_STYLE["default"];
						  return (
							<span 
								key={skill.id} 
								className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded border transition-transform cursor-pointer ${badgeColorClass}`} >
								<span className='opacity-100 hover:opacity-50'>

								{skill.name}
								</span>
							</span>
						  );
						})}
					</div>					<h2 className='text-me text-pop-lighter pl-10 pr-10 pt-10'>
						Description :<br></br>
						{Project.description} <br></br><br></br>
						<a href={Project.github}>
							<div className='bg-light-grey rounded-xl pt-5 pb-5 pr-5 pl-5 text-dominant-shadow-blue hover:bg-white'>

							Lien Github :
							<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -1060 960 960" width="24px" fill="#539F95">
								<path d="M318-120q-82 0-140-58t-58-140q0-40 15-76t43-64l134-133 56 56-134 134q-17 17-25.5 38.5T200-318q0 49 34.5 83.5T318-200q23 0 45-8.5t39-25.5l133-134 57 57-134 133q-28 28-64 43t-76 15Zm79-220-57-57 223-223 57 57-223 223Zm251-28-56-57 134-133q17-17 25-38t8-44q0-50-34-85t-84-35q-23 0-44.5 8.5T558-726L425-592l-57-56 134-134q28-28 64-43t76-15q82 0 139.5 58T839-641q0 39-14.5 75T782-502L648-368Z"/>
							</svg>
							</div>
						</a>
					</h2>
				</div>
			</div>
		</div>
	)
}
