import './ProjectCard.css'
import { Link } from 'react-router-dom'

export default function ProjectCard() {
  return (
    <div className='ProjectCard'>
      <div className="project-img">
        <img src="assets/images/project-sample.jpg" alt="" />
      </div>

      <div className="details">
        <h1>Project name</h1>
        <p>Description...</p>
        <Link className="btn">View</Link>
      </div>
    </div>
  )
}

