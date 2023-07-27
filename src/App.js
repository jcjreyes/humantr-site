import './App.css';

import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/head' element={<HeadPage />} />
        <Route path='/torso' element={<TorsoPage />} />
        <Route path='/legs' element={<LegsPage />} />
        <Route path='/pelvis' element={<PelvisPage />} />
        <Route path='/arms' element={<ArmsPage />} />
      </Routes>
    </Router>
  );
};
// Implement separate components for each body part pages

const HumanBodyDiagram = () => {
  const [highlightedPart, setHighlightedPart] = useState(null);

  const handleMouseEnter = (part) => {
    setHighlightedPart(part);
  };

  const handleMouseLeave = () => {
    setHighlightedPart(null);
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='600px'
      viewBox='0 0 476.26 1006'
    >
      <Link to='/legs'>
        <g id='Legs'>
          <path
            d='M144,563s27,7,35,7,27,.08,36-2,12.14-1.54,12.14-1.54S224,608,222,620s-6,46-2,59,4,17,3,20,0,29,1,31c0,0,2,25,2,41,0,0,0,17-3,31a161.69,161.69,0,0,0-3,31c.05,14.87,2,27.62,2,32a13.05,13.05,0,0,1,1,8c-1,4-1,14,1,17,0,0,7,9,5,19-1.87,9.34-6.35,11.7-12.64,15.23a6.25,6.25,0,0,0-2.29,2.22c-1.44,2.4-4.07,7.48-4.07,12.55,0,0,0,6-10,13,0,0-14,17-24,12s-13-6-17-7c-3.83-1-10.4-7.4-5.71-12.34a26.1,26.1,0,0,0,2.09-2.48c5.54-7.35,25.89-35,27.62-46.18,0,0,4-23,0-34,0,0-13-51-13-55s-7-24-3-44,4-34,0-40-8-19-6-30,1-44,0-50-9-20-9-29a241.52,241.52,0,0,0-2-28C149,579,144,563,144,563Z'
            onMouseEnter={() => handleMouseEnter('legs')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'legs' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
          <path
            d='M229,564s.73-2,2.37-2S258,565,272,565c9.82,0,26.15-1.48,35-2.36a5.1,5.1,0,0,1,5.58,5.61c-.81,7.69-2.27,20.7-3.61,28.75-2,12-7,19-7,27s-3,19-6,24-4,38-3,45-3,22-5,25-3,29-2,33,1,4,0,13-6,24-5,32-3,25-5,30c-1.94,4.84-2.94,19.06-3.91,25.41a5.43,5.43,0,0,0,0,1.21c.34,4.16,2.53,28.16,7.95,35.38,2.93,3.91,23.89,32.92,26.82,37.7a4.21,4.21,0,0,1,.33.63c.79,1.78,4.1,10.42-2.15,16.67-6.75,6.75-9.78,14.43-16.26,15a4.77,4.77,0,0,0-1.25.24c-1.89.7-8.69,2.44-15.49-5.21-7.37-8.29-30.92-36.71-35-42a50.88,50.88,0,0,1-3-5c-.5-1.63-2.66-4.73-3-9s.87-11.74,3-16c0,0-2-24,4-29s2-26,2-26-6-25-6-32V760s6-25,6-30-7-19-6-26-2-27,1-33,6-18,3-27,0-50,0-52S228,569,229,564Z'
            onMouseEnter={() => handleMouseEnter('legs')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'legs' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
        </g>
      </Link>
      <Link to='pelvis'>
        <g id='Pelvis'>
          <path
            d='M143,453s16,15,85,15c57.14,0,82.74-10.29,89.85-13.82a1.29,1.29,0,0,1,1.87,1.3c-.9,8.26-1.72,45.93-1.72,58.52,0,15-6,42-7,45-.93,2.8-68.1,3.86-81.09-.08a2.87,2.87,0,0,1-2-2.51L225,524l2.85,36.1A2.83,2.83,0,0,1,226,563c-5.65,2.08-18.94,2.37-41,3-17.37.5-26.14-3.79-39.18-5.87a2.94,2.94,0,0,0-1.17.14c-.81.2-2.86-1.84-3.65-26.27V494C141,472.39,142.9,448.77,143,453Z'
            onMouseEnter={() => handleMouseEnter('pelvis')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'pelvis' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
        </g>
      </Link>
      <Link to='/arms'>
        <g id='Arms'>
          <path
            d='M174.5,183a1,1,0,0,1,1,1.35c-3.31,8.53-22,56.68-27.5,66.7-6,11-6,75.54-1,81,5.92,6.47-11,29-12,36s1.83,25.34-1,31c-2,4-26.54,93.36-26,88,0,0,2,15,5,24,2.82,8.47-.55,20.47-1,21.87a.84.84,0,0,0,0,.27v18.13a16.59,16.59,0,0,1,0,2.73c-.75,2.52-3.49,9.37-6,1-3-10-3-12-4-12-2.83,0,.53,16.56-1,23-.4,1.69-2,8.16-5,8-1.83-.1-4.62-1.62-5-8-1-17-2-32-5-17s-4,27-9,27c-5.77,0-6-6-2-25l0-.08c.1-.89,1.81-15.54-4-2-6,14-4.91,18.31-8,19-9,2-5-19,0-31a.26.26,0,0,0,0-.08c.3-1,5.58-18.66-9-8,0,0-15,13-15,5s9.49-15.61,13-20c4-5-4-5,14-17,9.74-6.5,12-34,13-47,0,0,2-52,5-57,0,0,12-31,11-35s1.22-36.67,4.61-42.33S104.5,278.52,105,271s9-53,14-60,14-19,35-24C167,183.91,172.31,183.11,174.5,183Z'
            onMouseEnter={() => handleMouseEnter('arms')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'arms' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
          <path
            d='M290.5,183.32a1,1,0,0,0-1,1.34c3.31,8.54,22,56.69,27.5,66.71,6,11,6,75.54,1,81-5.92,6.47,11,29,12,36s-1.83,25.34,1,31c2,4,26.54,93.36,26,88,0,0-2,15-5,24-2.82,8.46.55,20.47,1,21.86a.9.9,0,0,1,0,.28v18.13a5.37,5.37,0,0,0,.23,1.54c.75,2.52,3.26,10.55,5.77,2.19,3-10,3-12,4-12,2.83,0-.53,16.55,1,23,.4,1.68,2,8.16,5,8,1.83-.1,4.62-1.63,5-8,1-17,2-32,5-17s4,27,9,27c5.77,0,6-6,2-25,0,0,0-.06,0-.08-.1-.9-1.81-15.54,4-2,6,14,4.91,18.31,8,19,9,2,5-19,0-31,0,0,0,0,0-.07-.3-1-5.58-18.66,9-8,0,0,15,13,15,5s-9.49-15.62-13-20c-4-5,4-5-14-17-9.74-6.5-12-34-13-47,0,0-2-52-5-57,0,0-12-31-11-35s-1.22-36.67-4.61-42.34-4.89-37.14-5.39-44.66-9-53-14-60-14-19-35-24C298,184.28,292.69,183.48,290.5,183.32Z'
            onMouseEnter={() => handleMouseEnter('arms')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'arms' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
        </g>
      </Link>
      <Link to='/torso'>
        <g id='Torso'>
          <path
            d='M232,173.46V464s89-2,89-17c0,0-2.14-17.19-5.24-33.95-1.58-8.57-4.88-17.9-5.23-23-.77-11-2.09-44.93,4.19-61.91,6.08-16.44-1.05-75.88-1.05-75.88s-31.58-57.26-28.27-69.89c0,0-19.12-11.44-21.4-14.44S258,173,232,173.46Z'
            onMouseEnter={() => handleMouseEnter('torso')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'torso' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
          <path
            d='M232,173.46V464s-89-2-89-17c0,0,2.14-17.19,5.24-33.95,1.58-8.57,4.88-17.9,5.23-23,.77-11,2.09-44.93-4.19-61.91-6.08-16.44,1.05-75.88,1.05-75.88s31.58-57.26,28.27-69.89c0,0,19.12-11.44,21.4-14.44S206,173,232,173.46Z'
            onMouseEnter={() => handleMouseEnter('torso')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'torso' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
        </g>
      </Link>
      <Link to='/head'>
        <g id='Head'>
          <path
            d='M214,43s-17,8-22,17-9,22-9,29-4,6-4,14a20.6,20.6,0,0,0,11,17l5,19s5,6,7,8,1,11,0,16,29,7,29,7,21-1,26-4,3-10,3-10l.4-15.1A23.3,23.3,0,0,0,266,133c2-5,0-10,2-15,2.17-5.41,11-2,11-16,0-12.25-2.83-10-4.46-13.88A6.89,6.89,0,0,1,274.1,85,45.73,45.73,0,0,0,266,58c-5-7-15-14-27-16C223.22,39.37,214,43,214,43Z'
            onMouseEnter={() => handleMouseEnter('head')}
            onMouseLeave={handleMouseLeave}
            style={{
              fill: highlightedPart === 'head' ? 'red' : 'black',
              transition: 'fill 0.5s ease',
            }}
          />
        </g>
      </Link>
    </svg>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Human Body Diagram</h1>
      {/* Add more links for other body parts */}
      <HumanBodyDiagram />
    </div>
  );
};

const HeadPage = () => {
  return (
    <div>
      <h2>Head Page</h2>
      {/* Add content specific to the head page */}
    </div>
  );
};

const TorsoPage = () => {
  return (
    <div>
      <h2>Torso Page</h2>
      {/* Add content specific to the torso page */}
    </div>
  );
};

const ArmsPage = () => {
  return (
    <div>
      <h2>Arms Page</h2>
      {/* Add content specific to the torso page */}
    </div>
  );
};

const PelvisPage = () => {
  return (
    <div>
      <h2>Pelvis Page</h2>
      {/* Add content specific to the torso page */}
    </div>
  );
};

const LegsPage = () => {
  return (
    <div>
      <h2>Legs Page</h2>
      {/* Add content specific to the torso page */}
    </div>
  );
};

export default App;
