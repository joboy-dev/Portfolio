import './Projects.css'

import HeroSection from '../../components/HeroSection'
import Icon from '../../components/Icon'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../../hooks/useTheme'

export default function Projects() {
  const { mode } =  useTheme()
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
    </div>
  )
}
