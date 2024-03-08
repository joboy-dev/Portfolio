import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

import useTheme from './hooks/useTheme';

// Components
import Navbar from './components/Navbar/Navbar';

// Rputes
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import ProjectDetail from './pages/projects/ProjectDetail'
import { useEffect } from 'react';

export default function App() {
  const { mode } = useTheme()

  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  })

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />

        <div className='screens'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetail />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          
          <div className="footer">
              <p>&copy; { new Date().getFullYear() }. Joboy-dev</p>
          </div>
        </div>
      </BrowserRouter>
      
    </div>
  );
}
