import React, { useEffect } from 'react';

const SidebarToggle = () => {
  useEffect(() => {
    const handleSidebarToggle = (event) => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    };

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', handleSidebarToggle);
    }

    return () => {
      if (sidebarToggle) {
        sidebarToggle.removeEventListener('click', handleSidebarToggle);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SidebarToggle;
