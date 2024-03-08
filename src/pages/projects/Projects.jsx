import './Projects.css'
import { faCode, faFolder } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

import HeroSection from '../../components/HeroSection'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/cards/ProjectCard'
import Icon from '../../components/Icon'
import useTheme from '../../hooks/useTheme'
import { projects } from '../../data/projects'

export default function Projects() {
  const { mode } =  useTheme()
  const filterValue = useRef()
  const [showAllProjects, setShowAllProjects] = useState(false)

  const showAll = function() {
    setShowAllProjects(true)
  }

  return (
    <div className={`Projects ${mode}`}>
      <HeroSection height={60}>
        <div>
          <Icon icon={faCode} size={100} />
          <h1 className='hero-title'>MY PROJECTS</h1>
          <p className='hero-subtitle'>These are the projects I have worked on during my time in the software development industry.</p>
          <p className='hero-subtitle'>Feel free to take a look</p>
        </div>
      </HeroSection>

      <div className="projects-container">
        <div className="head">
          <SectionTitle faIcon={faFolder} title='ALL PROJECTS' />

          <form onSubmit={() => {}}>
            <select ref={filterValue}>
              <option value="1">One</option>
            </select>
          </form>
        </div>
        <div className="all-projects">
            {showAllProjects ? projects.map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={''} />
            )) : projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={''} />
            ))}

            {!showAllProjects && <button onClick={showAll}>Load more</button>}
        </div>
        </div>
    </div>
  )
}
