import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="d-flex flex-column flex-md-row">
      <Sidebar />
      <div style={isMobile ? {} : { marginLeft: '280px', width: 'calc(100% - 280px)' }}>
        <main className="py-3">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 