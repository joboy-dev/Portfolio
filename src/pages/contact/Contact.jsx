import './Contact.css'
import { Link } from 'react-router-dom'

import HeroSection from '../../components/HeroSection'
import Icon from '../../components/Icon'
import useTheme from '../../hooks/useTheme'
import { useRef } from 'react'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  const { mode } =  useTheme()
  const name = useRef()
  const email = useRef()
  const message = useRef()

  const resetForm = function() {
    name.current.value = ''
    email.current.value = ''
    message.current.value = ''
  }

  const handleSubmit = function(e) {
    e.preventDefault()
    console.log(name.current.value, email, message);
    resetForm()
  }

  return (
    <div className={`Contact ${mode}`}>
      <HeroSection height={60} textColor='#f1f1f1'>
        <div>
          <h1 className='hero-title'>CONTACT ME</h1>
          <p className='hero-subtitle'>I am always looking for opportunities to grow as a developer.</p><br />
          <p className='hero-subtitle'>If you have any questions or you would like more information as to what I do, feel free to reach out through the form provided below or reach out to me through my contact information.</p>
        </div>
      </HeroSection>

      <div className="contact-content">
        <div className={`contact-details ${mode}`}>
          <h1>Contact Info</h1>
          <div className="hr"></div>
          <p><b>Email: </b><Link to={'mailto:oluwakoredeadegbehingbe@gmail.com'}>oluwakoredeadegbehingbe@gmail.com</Link></p>
          <p><b>Phone: </b><Link to={'tel:+2348021351855'}>+234 8021351855</Link>, <Link to={'tel:+2349059033185'}>+234 9059033185</Link></p>
          <p><Link to={'https://twitter.com/josephkorede36?s=09'} target='_blank'>Follow me on Twitter</Link> <Icon icon={faXTwitter} size={30}/></p>
          <p><Link to={'https://www.linkedin.com/in/oluwakorede-adegbehingbe-242901274/'} target='_blank'>Connect with me on LinkedIn</Link> <Icon icon={faLinkedin} size={30}/></p>
        </div>

        <form onSubmit={handleSubmit} className={`contact-form ${mode}`}>
          <h1>Send me a message</h1>
          <div className="hr"></div>

          <label>
            <span>Email</span>
            <input type="text" placeholder='Enter your email' ref={email} />
          </label>

          <label>
            <span>Name</span>
            <input type="text" placeholder='Enter your email' ref={name}/>
          </label>

          <label>
            <span>Message</span>
            <textarea placeholder='Enter your message' ref={message}></textarea>
          </label>

          <button>Send message</button>
        </form>
      </div>
    </div>
  )
}
