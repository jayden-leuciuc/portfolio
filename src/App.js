import './app.scss';
import About from './Components/About/About.js';
import Hero from './Components/Hero/Hero.js';
import Projects from './Components/Projects/Projects.js';
import WorkingProjects from './Components/WorkingProjects/WorkingProjects';

function App() {
  return (
    <>
      <Hero />
      <About />
      <WorkingProjects />
      <Projects />
    </>
  );
}

export default App;
