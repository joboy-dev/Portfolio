import './Home.css'
import { NavLink } from 'react-router-dom'

// Components
import SectionTitle from '../../components/SectionTitle'
import ProjectCard from '../../components/cards/ProjectCard'

export default function Home() {
  return (
    <div className='Home'>
      <section className='hero'>
        <div className="info">
          <h1>ADEGBEHINGBE, <span>Oluwakorede Joseph</span></h1>
          <p>I am a <span>Software Developer</span></p>
        </div>

        <div className="img-container">
          <img src="assets/images/joseph.jpg" alt="my pic" />
        </div>
      </section>

      <section className="about">
        <SectionTitle iconName={'about'} title='About me' />

        <div className="about-me">
          <p>I am a computer scientist who graduated from Babcock University. I am also a very passionate and results-driven Software Developer with over 2 years of hands-on coding experience. I specialize in creating web and mobile applications that not only look great but also deliver exceptional user experiences because I believe that I won't want other people to use a product that I myself won't enjoy.</p>

          <NavLink className='btn' to={'/about'}>See more</NavLink>
        </div>

      </section>
      <div className="hr"></div>

      <section className="projects">
        <SectionTitle iconName={'projects'} title='My projects' />
        
        <div className="all-projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>
      </section>
      <div className="hr"></div>
    </div>
  )
}
