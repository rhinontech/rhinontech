import About from "../pages/about-me/About";
import Contact from "../pages/contact-me/Contact";
import Header from "../pages/header/Header";
import Profile from "../pages/profile/Profile";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";

function Home() {
  return (
    <div className="bg-[#232732] main-page rounded-lg">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
