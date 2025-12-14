import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
      document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (selectedProject) {
    return (
      <div>
        <Header />
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects onProjectClick={handleProjectClick} />
      </main>
      <Footer />
    </div>
  );
}