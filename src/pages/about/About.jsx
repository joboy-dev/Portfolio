import './About.css'
import { Link } from 'react-router-dom'

import useTheme from '../../hooks/useTheme'

import HeroSection from '../../components/HeroSection'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Tabbar from '../../components/Tabbar/TabBar'
import Experience from './Experience'
import Skills from './Skills'
import Certifications from './Certifications'
import Education from './Education'
import Awards from './Awards'

// Tabs for the tab bar component
const tabs = [
  { title: 'Experience',content: <Experience /> },
  { title: 'Skills', content: <Skills /> },
  { title: 'Certifications', content: <Certifications /> },
  { title: 'Education', content: <Education /> },
  { title: 'Awards', content: <Awards /> },
]


export default function About() {
  const { mode } = useTheme()

  return (
    <div className={`About ${mode}`}>
      <HeroSection height={60} textColor='#F1F1F1'>
        <div>
          <h1 className='hero-title'>ABOUT ME</h1>
          <p className='hero-subtitle'>Always ready to learn and grow</p>
        </div>
      </HeroSection>
        
      <section className={`about-me ${mode}`}>
        <div className="img-container">
          <img src="assets/images/joseph.jpg" alt="" />
        </div>

        <div className="content">
          <h1>About me</h1>
          <h2>ADEGBEHINGBE, Oluwakorede Joseph</h2>
          <p>I am a computer scientist who graduated from Babcock University. I am also a very passionate and results-driven software developer with over 2 years of hands-on coding experience in multiple programming languages and frameworks. I specialize in creating web and mobile applications that not only look great but also deliver exceptional user experiences because I believe that I won't want other people to use a product that I myself won't enjoy.</p>

          <p>I spend most of my time coding and trying to learn new things. I am always open to trying new things and figuring out how to solve problems as I feel it is very rewarding when I figure out how to solve problems I have never solved before.</p>
          <Link to={'/contact'} className={`btn ${mode}`}>Reach out to me</Link>
        </div>  
      </section>
      <div className="hr"></div>

      <section className="additional-info">
        <SectionTitle faIcon={faInfoCircle} title='Additional Info' />
        <Tabbar tabs={tabs} />
      </section>

    </div>
  )
}
