import { Header } from '../Components/Header'

export function ContactPage ({onNavigate}: {onNavigate: (page: "projects" | "skills" | "contact") => void})
{
	return (
		<div className="min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces flex flex-col">
			<Header />
			<main>
				<div className='bg-pop-red text-pop-lighter'>
					<p className='flex justify-center p-1 md:p-2 lg:p-1 md:text-xl lg:text-4xl'>
					</p>
				</div>
				<div className='p-4 text-md md:text-md lg:text-xl flex justify-center'>
					<h1>Je suis Déborah Satge, si mon profil vous intéresse n'hésitez a me contacter.</h1>
				</div>
				<div className="px-4 md:px-10 lg:px-120 bg-pop-lighter p-2 md:p-4 lg:p-6  rounded-lg">
					<h1 className='b-8 text-lg font-bold'>Mes infos</h1>
					<p>
						Email : deborah.satge@yahoo.fr<br/>
						Téléphone : 06.34.46.70.77<br/>
						Linkedin : <a href='www.linkedin.com/in/deborah-satge-59b517154' className='underline'>linkedin/deborah-satge</a><br></br>
						Github : <a href='https://github.com/dsatge' className='underline'> githhub/dsatge </a>
					</p>
				</div>
				<br/>
			</main>
			<div>
			<footer>
				<ul className="flex justify-between items-center w-full px-4 md:px-10 lg:px-120">
					<li>
						<button 
							className='cursor-pointer rounded-xl border mb-8 p-1 md:p-4 lg:p-6 hover:bg-pop-red hover:text-pop-lighter'
							onClick={() => onNavigate("skills")}>
							Mes Compétences
						</button>
					</li>
					<li>
						<button 
							className='cursor-pointer rounded-xl border mb-8 p-1 md:p-4 lg:p-6 hover:bg-pop-red hover:text-pop-lighter'
							onClick={() => onNavigate("projects")}>
							Mes Projets
						</button>
					</li>
					<li>
						<a 
							href="/Cv_2026_DeborahSatge.pdf"
							target="_blank"
							rel="noopener noreferrer">
							<button 
								className='cursor-pointer rounded-xl border mb-8 p-1 md:p-4 lg:p-6 hover:bg-pop-red hover:text-pop-lighter'
								onClick={() => onNavigate("projects")}>
								Mon CV
							</button>
						</a>
					</li>
				</ul>

			</footer>
					</div>
		</div>
		)
}