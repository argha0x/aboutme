import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to sections when navigating with hashes
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // If we have a hash in the URL
    if (location.hash) {
      // Get the element with the ID that matches the hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to that element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]); // Re-run when location changes

  return null; // This component doesn't render anything
};

export default ScrollToSection; 