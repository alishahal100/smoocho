
import './App.css'
import Home from './component/Home';
import Loading from './component/Loading'
import React, { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
   <div>
   <div>
      {isLoading ? (
        <Loading onLoaded={handleLoaded} />
      ) : (
        <div id="main-content">
          {/* Your main homepage content goes here */}
         <Home/>
        </div>
      )}
    </div>
   </div>
  )
}

export default App
