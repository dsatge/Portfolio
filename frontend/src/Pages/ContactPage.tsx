// import { Header } from '../Components/Header'

export function ContactPage ({onNavigate}: {onNavigate: (page: "projects" | "skills" | "contact") => void})
{
	return (
		<div className="min-h-screen bg-dominant-white text-pop-red p-8 font-fraunces flex flex-col">
			<header>
				<div className="lg:col-span-2 space-y-4">
					<h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">
						Déborah Satge 
					</h1>
					<h2 className="text-xl md:text-3xl lg:text-4xl">
						<span className="font-bold">Mon Portolio</span> <br/> — À la recherche d'un stage dans le <span className="font-bold">domaine informatique</span>
					</h2>
				</div>

				<button>
					<a href="/Cv_2026_DeborahSatge.pdf"
						target="_blank"
						rel="noopener noreferrer">
						<span className="absolute top-1 mt-5 mr-1 lg:mr-15 right-3 text-md lg:text-xl cursor-pointer">
							Mon Cv
							<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="60px" fill="#690B1F">
							<path d="M200-200v-560 179-19 400Zm80-240h221q2-22 10-42t20-38H280v80Zm0 160h157q17-20 39-32.5t46-20.5q-4-6-7-13t-5-14H280v80Zm0-320h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v258q-14-26-34-46t-46-33v-179H200v560h202q-1 6-1.5 12t-.5 12v56H200Zm409-229q-29-29-29-71t29-71q29-29 71-29t71 29q29 29 29 71t-29 71q-29 29-71 29t-71-29ZM480-120v-56q0-24 12.5-44.5T528-250q36-15 74.5-22.5T680-280q39 0 77.5 7.5T832-250q23 9 35.5 29.5T880-176v56H480Z"/></svg>
						</span>
					</a>
				</button>

				<section className="max-w-7xl px-1 md:px:2 lg:px-4 md:py-2 lg:py-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-16 items-start">
						{/* Presentation */}
						<div className="lg:col-span-2 space-y-4">
							<p className="text-dominant-shadow-blue md:text-lg leading-normal ">
							Après une expérience de 3 ans dans le commerce international en 
							Australie, j'ai choisi de me réorienter vers le développement informatique, un 
							univers plus concret qui me passionne. Aujourd'hui en fin de formation à 
							l'école 42, j'ai conçu ce portfolio pour vous présenter mes compétences et mes 
							réalisations. <br/>
							Rigoureuse, curieuse et dotée d'un fort esprit d'équipe, je recherche un stage 
							pour mettre mon énergie et ma technique au service de vos projets.
							</p>
						</div>
					</div>
				</section>

			</header>
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