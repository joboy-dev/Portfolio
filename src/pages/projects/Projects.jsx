import './Projects.css'
import { faCode, faFolder } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const sendMessage = function(e) {
    e.preventDefault()
    console.log(filterValue.current.value);
    navigate(`/projects?filter=${filterValue.current.value}`)
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

          <form onSubmit={sendMessage}>
            <select ref={filterValue}>
              <option value="None">None Selected</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Frontend Development">Frontend Development</option>
            </select>
            <button className='btn'>Filter</button>
          </form>
        </div>
        <div className="all-projects">
            {showAllProjects ? projects.map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={project.coverPicture} />
            )) : projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} id={project.id} projectName={project.name} overview={project.overview} coverPicture={project.coverPicture} />
            ))}

            {!showAllProjects && <button onClick={() => {setShowAllProjects(true)}}>Load more</button>}
        </div>
        </div>
    </div>
  )
}
