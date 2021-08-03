import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font flex flex-col justify-center items-center">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
