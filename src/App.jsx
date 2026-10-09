import Navbar from "./components/navbar";
import "./App.css";
import Hero from "./components/hero";
import Projets from "./components/projets";
import Skills from "./components/skills";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Projets />
        <Skills/>
      </main>
    </div>
  );
}
export default App;

