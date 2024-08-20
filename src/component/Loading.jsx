import React, { useEffect } from "react";

const Loading = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 5000); // Duration matches the animation duration

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="w-screen h-screen">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-animation fixed  top-0 w-full transform scale-y-[-1]"
        >
          <defs>
            {/* Main chocolate gradient */}
            <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4a2e21", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#3c281c", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#2e1f14", stopOpacity: 1 }} />
            </linearGradient>

            {/* Highlight gradient for 3D effect */}
            <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#6b3e2e", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
            </linearGradient>

            {/* Shadow gradient for 3D effect */}
            <linearGradient id="shadowGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#2b1b12", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
            </linearGradient>
          </defs>

          {/* Main chocolate path with motion */}
          <path
            fill="url(#chocolateGradient)"
            fillOpacity="1"
            d="M0,160 C60,200 120,200 180,160 C240,120 300,80 360,100 C420,120 480,200 540,240 C600,280 660,260 720,200 C780,140 840,100 900,140 C960,180 1020,260 1080,280 C1140,300 1200,260 1260,220 C1320,180 1380,140 1440,140 L1440,320 L0,320 Z"
          >
           
          </path>

          {/* Highlight effect path */}
          <path
            fill="url(#highlightGradient)"
            fillOpacity="0.6"
            d="M0,160 C60,200 120,200 180,160 C240,120 300,80 360,100 C420,120 480,200 540,240 C600,280 660,260 720,200 C780,140 840,100 900,140 C960,180 1020,260 1080,280 C1140,300 1200,260 1260,220 C1320,180 1380,140 1440,140 L1440,320 L0,320 Z"
            transform="translate(0, -8)" // Slightly raised for a realistic highlight effect
          ></path>

          {/* Shadow effect path */}
          <path
            fill="url(#shadowGradient)"
            fillOpacity="0.5"
            d="M0,160 C60,200 120,200 180,160 C240,120 300,80 360,100 C420,120 480,200 540,240 C600,280 660,260 720,200 C780,140 840,100 900,140 C960,180 1020,260 1080,280 C1140,300 1200,260 1260,220 C1320,180 1380,140 1440,140 L1440,320 L0,320 Z"
            transform="translate(0, 10)" // Slightly lowered for a realistic shadow effect
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
