export function Header ()
{
	return (
		<header>
			<div className="lg:col-span-2 space-y-4">
				<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
					Mon Portfolio 
				</h1>
				<h2 className="text-xl md:text-3xl lg:text-4xl">
					 — À la recherche d'un stage stimulant
				</h2>
			</div>

			<button>
				<a href="../public/Cv_2026_DeborahSatge.pdf"
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
							Après un parcours enrichissant dans le commerce et une expatriation de 3 ans en 
							Australie, j'ai choisi de me réorienter vers le développement informatique, un 
							univers concret qui me passionne. Aujourd'hui en fin de formation à 
							42, j'ai conçu ce portfolio pour vous présenter mes compétences et mes 
							réalisations. <br/>
							Rigoureuse, bilingue et dotée d'un fort esprit d'équipe, je recherche un stage pour mettre mon énergie et ma technique au service de vos projets.
						</p>
					</div>

					{/* Guide */}
					<div className="bg-light-grey-blue border border-slate-200/60 rounded-2xl p-2 md:p-2 lg:p-3 space-y-2">
						<h2 className="text-xs text-dominant-shadow-blue font-black uppercase tracking-wider">
							Guide de navigation
						</h2>
						<p className="text-sm text-slate-600 leading-normal">
							Ce site est une application web interactive connectée à ma base de données.
						</p>
						<ul className="text-xs text-dominant-shadow-blue text-slate-500 space-y-2 list-disc list-inside">
							<li><span className="font-bold text-slate-700">Projets :</span> Utilisez les filtres dynamiques pour trier mes codes par technologie.</li>
							<li><span className="font-bold text-slate-700">Compétences :</span> Cliquez sur une carte pour voir sa fiche et les projets associés.</li>
						</ul>
					</div>
				</div>
			</section>
			<br/>
		</header>
	)
}