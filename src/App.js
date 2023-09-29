import ParticleBackground from "./utils/ParticleBackground";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/about-us/AboutUs";
import Project from "./pages/project/Project";
import ContactUs from "./pages/contact-us/ContactUs";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <ParticleBackground />
      <AboutUs />
      <Education />
      <Skills />
      <Project />
      <Experience />
      <ContactUs />
    </div>
  );
}

export default App;
