// Routes.js

import React, { useState, useEffect } from 'react';
import Tasks from '../app';

// Define the Route component
const Route = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  return currentPath === path ? component : null;
};

// Define the Router component
export const Router = ({ children }) => {
  return <>{children}</>;
};

// Define the individual route components
export const RouteTasks = () => <Route path="/tasks" component={<Tasks />} />;

// Export other routes as needed
// export const RouteAbout = () => <Route path="/about" component={<About />} />;
