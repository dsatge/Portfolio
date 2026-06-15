import { useState } from 'react'
import { SkillPage } from './Pages/SkillPage'
import { ProjectPage } from './Pages/ProjectPage';
import { ContactPage } from './Pages/ContactPage';




function App() {
  const [currentPage, setCurrentPage] = useState<"projects" | "skills" | "contact">("projects");

	if (currentPage === "skills"){
		return <SkillPage onNavigate={setCurrentPage} />};

	if (currentPage === "projects"){
		return <ProjectPage onNavigate = {setCurrentPage} />};

	if (currentPage === "contact"){
		return <ContactPage onNavigate = {setCurrentPage} />};

  return (
	<div>
		{/* <button onClick={() => setCurrentPage("skills")}>
			Voir mes Compétences →
		</button> */}
	</div>
	)
}
export default App
