import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import "./styles.css";
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Intro></Intro>
      <Navigation></Navigation>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
