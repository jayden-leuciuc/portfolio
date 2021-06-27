import './app.scss';
import { About, Hero, Projects, Footer } from './Components/componentExport';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
