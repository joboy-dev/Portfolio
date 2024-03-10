import './ProjectDetail.css'
import { useParams, Link } from 'react-router-dom'

import useTheme from '../../hooks/useTheme'
import { projects } from '../../data/projects'
import HeroSection from '../../components/HeroSection'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import Icon from '../../components/Icon'
import { faFigma, faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

export default function ProjectDetail() {
    const { id } = useParams()
    const { mode } = useTheme()

    // Filtered object based on id from useParams
    const filteredProjects = projects.filter((proj) => proj.id === id )
    console.log(filteredProjects.length);
    
    return filteredProjects.map((project) => (
        <div className='ProjectDetail'>
            <HeroSection height={20} textColor='#f1f1f1'>
                <div>
                    <h1 className='hero-title'>{project.name.toUpperCase()}</h1>
                </div>
            </HeroSection>

            <ImageCarousel images={[]} />

            <div className={`project-detail ${mode}`}>
                <div className="detail">
                    <h1>Project Overview</h1>
                    <p>{project.overview}</p>

                    <h1>Tools</h1>
                    <ul>
                        {project.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="other-details">
                    <div className="metadata">
                        <p><span>Domain: </span>{project.domain}</p>
                        <p><span>Type: </span>{project.projectType}</p>
                        <p><span>Role: </span>{project.role}</p>
                    </div>

                    <div className="metadata-links">
                        <Link className='btn' target='_blank' to={project.githubLink}><Icon icon={faGithub} size={50} /></Link>

                        {project.postmanLink && <Link className='btn' target='_blank' to={project.postmanLink}><Icon icon={faCode} size={50} /></Link>}

                        {project.googleDriveLink && <Link className='btn' target='_blank' to={project.googleDriveLink}><Icon icon={faGoogleDrive} size={50} /></Link>}

                        {project.liveLink && <Link className='btn' target='_blank' to={project.liveLink}><Icon icon={faLink} size={50} /></Link>}
                        
                        {project.figmaLink && <Link className='btn' target='_blank' to={project.figmaLink}><Icon icon={faFigma} size={50} /></Link>}
                    </div>
                </div>
            </div>
        </div>
    ))
}
