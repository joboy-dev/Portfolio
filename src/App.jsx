import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Rputes
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className='screens'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
