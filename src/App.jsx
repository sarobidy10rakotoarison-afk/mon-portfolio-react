import Navbar from "./components/navbar";
import "./App.css";
import Hero from "./components/hero";
import Projets from "./components/projets";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Projets />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;

