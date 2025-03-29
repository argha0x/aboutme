import React, { useState, useEffect } from 'react';

const ThemeToggle = ({ id = "theme-toggle" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to apply theme
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  };

  // On component mount, check if user already has a theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If there's a saved theme, use it; otherwise use system preference
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      applyTheme(savedTheme);
    } else if (prefersDark) {
      setIsDarkMode(true);
      applyTheme('dark');
    } else {
      applyTheme('light');
    }

    // Force a re-render when the theme changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(currentTheme === 'dark');
    };

    // Create a MutationObserver to watch for attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          handleThemeChange();
        }
      });
    });

    // Start observing the document
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    applyTheme(newTheme);
  };

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor={id}>
        <input 
          type="checkbox" 
          id={id} 
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="slider">
          <span className="slider-icon sun-icon">
            <i className="bi bi-sun-fill"></i>
          </span>
          <span className="slider-icon moon-icon">
            <i className="bi bi-moon-stars-fill"></i>
          </span>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle; 