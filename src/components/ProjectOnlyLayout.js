import React from 'react';
import ThemeToggle from './ThemeToggle';

const ProjectOnlyLayout = ({ children }) => {
  return (
    <div className="project-only-layout">
      <div className="floating-theme-toggle">
        <ThemeToggle id="project-theme-toggle" />
      </div>
      <main className="py-3 px-md-4">
        <div className="project-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ProjectOnlyLayout; 