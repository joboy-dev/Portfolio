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

  // const [showAllProjects, setShowAllProjects] = useState(false)
  
  // Set a state property for filtering projects
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.domain === filter)

  const filterProjects = function(e) {
    e.preventDefault()
    setFilter(filterValue.current.value)
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

          <form onSubmit={filterProjects}>
            <select ref={filterValue}>
              <option value="All">All Projects</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Data Science and Machine Learning">Data Science and Machine Learning</option>
            </select>
            <button className='btn'>Filter</button>
          </form>
        </div>
        <div className="all-projects">
            {/* {showAllProjects ? filteredProjects.map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={project.coverPicture} />
            )) : filteredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={project.coverPicture} />
            ))} */}
            {/* {!showAllProjects && <button onClick={() => {setShowAllProjects(true)}}>Load more</button>} */}

            {filteredProjects.length !== 0 ? filteredProjects.map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={project.coverPicture} />
          )) : <p className={`no-projects ${mode}`}>No projects available for this domain yet.</p> }
        </div>
      </div>
    </div>
  )
}
