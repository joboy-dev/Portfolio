import { NavLink } from 'react-router-dom'

import './Navbar.css'
import Icon from './Icon'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faFolder, faPhone, faDownload, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
    // Get theme details
    const { mode, changeMode } = useTheme()

    const handleModeChange = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <nav className={`${mode}`}>
            <div className="img-container">
                <img src='assets/images/joseph.jpg' alt="my pic"/>
            </div>

            <div className={`mode ${mode}`} onClick={handleModeChange}>
                <Icon icon={ mode === 'light' ? faMoon : faSun } color={ mode === 'light' ?'#0C1618' : '#F1F1F1'} size={30} />
            </div>

            <h2><span>Adegbehingbe, </span>Oluwakorede Joseph</h2>

            <div className="socials">
                <div className="icon">
                    <NavLink to={'https://www.github.com/joboy-dev'} target='_blank'>
                        <Icon icon={faGithub} color='#004643' size={35} />
                    </NavLink>
                </div>
                <div className="icon">
                    <NavLink to={'https://www.linkedin.com/in/oluwakorede-adegbehingbe-242901274/'} target='_blank'>
                        <Icon icon={faLinkedin} color='#004643' size={35} />
                    </NavLink>
                </div>
                <div className="icon">
                    <NavLink to={'https://twitter.com/josephkorede36?s=09'} target='_blank'>
                        <Icon icon={faXTwitter} color='#004643' size={35} />
                    </NavLink>
                </div>
            </div>

            <div className="hr"></div>

            <div className="links">
                <div className='link'>
                    <div className='icon'>
                        <Icon icon={faHome} color='#004643' size={25} />
                    </div>
                    <NavLink to={'/'}>Home</NavLink>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <Icon icon={faUser} color='#004643' size={25} />
                    </div>
                    <NavLink to={'/about'}>About me</NavLink>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <Icon icon={faFolder} color='#004643' size={25} />
                    </div>
                    <NavLink to={'/projects'}>Projects</NavLink>
                </div>

                <div className='link'>
                    <div className='icon'>
                        <Icon icon={faPhone} color='#004643' size={25} />
                    </div>
                    <NavLink to={'/contact'}>Contact me</NavLink>
                </div>
            </div>

            <div className='download-button'>
                <div className='icon'>
                    <Icon icon={faDownload} color='#004643' size={25} />
                </div>
                <NavLink to='assets/cv.pdf' download='Adegbehingbe Oluwakorede Joseph Resume' target='_blank'>Resume</NavLink>
            </div>

            <div className="footer">
                <p>&copy; { new Date().getFullYear() }. Joboy-dev</p>
            </div>

        </nav>
    )
}
