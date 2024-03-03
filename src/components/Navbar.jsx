import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className=''>
        <div className="img-container">
            <img src='assets/images/joseph.jpg' alt="my pic"/>
        </div>

        <h2><span>Adegbehingbe, </span>Oluwakorede Joseph</h2>

        <div className="socials">
            <div className="icon">
                <NavLink to={'https://www.github.com/joboy-dev'} target='_blank'>
                    <img src="assets/icons/github_icon.png" alt="github" />
                </NavLink>
            </div>
            <div className="icon">
                <NavLink to={'https://www.linkedin.com/in/oluwakorede-adegbehingbe-242901274/'} target='_blank'>
                    <img src="assets/icons/linkedin_icon.png" alt="github" />
                </NavLink>
            </div>
            <div className="icon">
                <NavLink to={'https://twitter.com/josephkorede36?s=09'} target='_blank'>
                    <img src="assets/icons/twitter_icon.png" alt="github" />
                </NavLink>
            </div>
        </div>

        <div className="hr"></div>

        <div className="links">
            <div className='link'>
                <div className='icon'>
                    <img src='assets/icons/home_icon_light_mode.png' alt="home icon" />
                </div>
                <NavLink to={'/'}>Home</NavLink>
            </div>

            <div className='link'>
                <div className='icon'>
                    <img src='assets/icons/about_icon_light_mode.png' alt="about icon" />
                </div>
                <NavLink to={'/about'}>About me</NavLink>
            </div>

            <div className='link'>
                <div className='icon'>
                    <img src='assets/icons/projects_icon_light_mode.png' alt="projects icon" />
                </div>
                <NavLink to={'/projects'}>Projects</NavLink>
            </div>

            <div className='link'>
                <div className='icon'>
                    <img src='assets/icons/contact_icon_light_mode.png' alt="contact icon" />
                </div>
                <NavLink to={'/contact'}>Contact me</NavLink>
            </div>
        </div>

        <div className='download-button'>
            <div className='icon'>
                <img src='assets/icons/download_icon.png' alt="contact icon" />
            </div>
            <NavLink to='assets/cv.pdf' download='Adegbehingbe Oluwakorede Joseph Resume' target='_blank'>Resume</NavLink>
        </div>

        <div className="footer">
            <p>&copy; { new Date().getFullYear() }. Joboy-dev</p>
        </div>

    </nav>
  )
}
