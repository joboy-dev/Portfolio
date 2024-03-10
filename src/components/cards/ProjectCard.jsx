import './ProjectCard.css'
import { Link } from 'react-router-dom'

import useTheme from '../../hooks/useTheme'

export default function ProjectCard({id, projectName, overview, coverPicture}) {
  const { mode } = useTheme()

  return (
    <div className={`ProjectCard ${mode}`}>
      <div className="project-img">
        <img src="assets/images/project-sample.jpg" alt="" />
      </div>

      <div className="details">
        <h1>{ projectName }</h1>
        <p>{ overview.substring(0, 80) }...</p>
        <Link className="btn" to={`/projects/${id}`}>View Project</Link>
      </div>
    </div>
  )
}

