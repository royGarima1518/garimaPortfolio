import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Resume from './pages/resume';
import Home from './pages/home';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Navbar from './components/navbar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInt = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js */}
      {
        renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} int={handleInt} />
      )}
      {/* navbar */}
      <Navbar />



      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*'element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

