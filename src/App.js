import './app.scss';
import {
  About,
  Hero,
  Projects,
  WorkingProjects,
  Footer,
} from './Components/componentExport';

function App() {
  return (
    <>
      <Hero />
      <About />
      <WorkingProjects />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
