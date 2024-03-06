import './ProjectCard.css'
import { Link } from 'react-router-dom'

import useTheme from '../../hooks/useTheme'

export default function ProjectCard() {
  const { mode } = useTheme()

  return (
    <div className={`ProjectCard ${mode}`}>
      <div className="project-img">
        <img src="assets/images/project-sample.jpg" alt="" loading='' />
      </div>

      <div className="details">
        <h1>Project name</h1>
        <p>Description...</p>
        <Link className="btn">View Project</Link>
      </div>
    </div>
  )
}

