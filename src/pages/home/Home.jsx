import './Home.css'
import { Link } from 'react-router-dom'

import useTheme from '../../hooks/useTheme'

// Components
import SectionTitle from '../../components/SectionTitle'
import ProjectCard from '../../components/cards/ProjectCard'
import ServiceList from '../../components/ServiceList'
import HeroSection from '../../components/HeroSection'

// Icons
import { faUser, faFolder, faServer, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const { mode } = useTheme()

  return (
    <div className='Home'>
      <HeroSection height={100}>
        <div className="info">
            <h1>ADEGBEHINGBE, <span>Oluwakorede Joseph</span></h1>
            <p>I am a <span>Software Developer</span></p>
          </div>

          <div className="img-container">
            <img src="assets/images/joseph.jpg" alt="my pic" />
        </div>
      </HeroSection>

      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}

      <section className="about">
        <SectionTitle faIcon={faUser} title='About me' />

        <div className={`about-me ${mode}`}>
          <p>I am a computer scientist who graduated from Babcock University. I am also a very passionate and results-driven Software Developer with over 2 years of hands-on coding experience. I specialize in creating web and mobile applications that not only look great but also deliver exceptional user experiences because I believe that I won't want other people to use a product that I myself won't enjoy.</p>

          <Link className='btn' to={'/about'}>See more</Link>
        </div>

      </section>
      <div className="hr"></div>

      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}

      <section className="projects">
        <SectionTitle faIcon={faFolder} title='My projects' />
        
        <div className="all-projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <Link className={`btn ${mode}`} to={'/projects'}>See more</Link>
      </section>
      <div className="hr"></div>

      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}

      <section className="services">
        <SectionTitle faIcon={faServer} title='My services' />
        <ServiceList />
      </section>
      <div className="hr"></div>

      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}


      <section className='contact'>
        <SectionTitle faIcon={faPhone} title='Contact me' />

        <div className={`contact-me ${mode}`}>
          <p>I am always looking for new opportunities to learn and grow in the software industry.</p>
          <p>If you have any questions or you would like more information as to what I do, feel free to reach out.</p>

          <Link className='btn' to={'/contact'}>Contact me</Link>
        </div>
      </section>
    </div>
  )
}
