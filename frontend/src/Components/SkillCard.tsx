export function SkillCard({ Skill, style, onClick}: {Skill: any, style: any, onClick: () => void})
{
	return (
		<div 
			onClick={onClick}
			className={`relative group p-4 border text-center rounded-xl text-sm hover:scale-[1.02] hover:shadow-2xl ${style.card} h-full min-h[200px] justify-between cursor-pointer`}>
			<span className="absolute text-sm top-3 right-3 text-[10] tracking-widest opacity-0 group-hover:opacity-70 transition-opacity">
				En savoir plus ↗
			</span>
			<strong className='text-white text-lg block mb-1 mt-5 tracking-wider font-black'></strong> 
			<span className="text-xl uppercase tracking-wider">{Skill.name}</span>						
			<p className='mt-1 text-sm opacity-90 line-clamp-6 leading-relaxed'>
				</p>
		</div>
	)
}