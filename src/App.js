import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import ScrollToSection from './components/ScrollToSection';
import Skillset from './components/Skillset';

// Main page component with all sections
const HomePage = () => (
  <>
    <About />
    <Education />
    <Skillset />
    <Projects />
    <Experience />
    <Publications />
    <Contact />
  </>
);

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToSection />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
