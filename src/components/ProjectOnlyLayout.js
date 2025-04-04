import React from 'react';
import ThemeToggle from './ThemeToggle';

const ProjectOnlyLayout = ({ children }) => {
  return (
    <div className="project-only-layout">
      <div className="floating-theme-toggle">
        <ThemeToggle id="project-theme-toggle" />
      </div>
      <main className="py-3">
        {children}
      </main>
    </div>
  );
};

export default ProjectOnlyLayout; 