
export function Footer ({onNavigate}: {onNavigate: (page: "projects" | "skills" | "contact") => void})
{
	return (
		<footer>
			<br></br>
			<ul className="flex justify-between items-center w-full px-4 md:px-10 lg:px-120">
				<li>
					<button 
						className='cursor-pointer rounded-xl border mb-8 p-2 hover:bg-pop-red hover:text-pop-lighter'
						onClick={() => onNavigate("contact")}
					>
						Me contacter ➔
					</button>			
				</li>
				<li><a href="/Cv_2026_DeborahSatge.pdf"
						target="_blank"
						rel="noopener noreferrer">
					<button 

						className='cursor-pointer rounded-xl border mb-8 p-2 hover:bg-pop-red hover:text-pop-lighter'
					>
						Mon Cv ➔
					</button>			
				</a>
				</li>
			</ul>
		</footer>
	)
}