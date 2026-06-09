import { useEffect, useState } from 'react'
import { SkillPage } from './Pages/SkillPage'
import { ProjectPage } from './Pages/ProjectPage';




function App() {
  const [currentPage, setCurrentPage] = useState<"projects" | "skills">("projects");

	if (currentPage === "skills"){
			return <SkillPage onNavigate = {() => setCurrentPage("projects")}/>};

	if (currentPage === "projects"){
		return <ProjectPage onNavigate = {() => setCurrentPage("skills")}/>};

	
  return (
	<div>
		{/* <button onClick={() => setCurrentPage("skills")}>
              Voir mes Compétences →
          </button> */}
	</div>
	)
}
export default App
