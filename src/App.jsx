import './App.css';
import Home from './component/Home';
import Loading from './component/Loading';
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import AboutUs from './component/AboutUs';
import TermsAndConditions from './component/termsandconditions';
import PrivacyPolicy from './component/PrivacyPolicy';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // adjust the scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
      smooth: true,
      direction: 'vertical', // can be 'horizontal' for horizontal scrolling
    });

    const raf = (time) => {
      lenis.raf(time); // Run Lenis on each animation frame
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis on component unmount
      lenis.destroy();
    };
  }, []); // This will ensure that Lenis is initialized after the first render

  return (
    <div>
      {isLoading ? (
        <Loading onLoaded={handleLoaded} />
      ) : (
        <div id="main-content">
          
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/terms" element={<TermsAndConditions/>} />
              <Route path="/privacy" element={<PrivacyPolicy/>} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
