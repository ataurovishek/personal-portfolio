
import Header from "./sections/Header.jsx";
import Hero from './sections/Hero.jsx';
import Project from './sections/Project.jsx';
import Tap from './sections/Tape.jsx';
import Testimonias from './sections/Testimonials.jsx';
import About from './sections/About.jsx'
import Contact from "./sections/Contact.jsx";
import Footer from './sections/Footer.jsx'
import Form from "./Components/Form.jsx";
const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Project />
      <Tap />
      <Testimonias />
      <About />
      <Contact/>
      <Footer/>
      <Form/>
    </div>
  );
};

export default App;