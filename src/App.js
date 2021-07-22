import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Skills from './components/Skills'
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font flex flex-col justify-center items-center">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*
      <Contact /> */}
    </main>
  );
}

export default App;
