import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Landing.js';
import { AnimatePresence } from 'framer-motion';
import BodyPage from './BodyPage.js';
import ArmsPage from './ArmsPage.js';
import HeadPage from './HeadPage.js';
import TorsoPage from './TorsoPage.js';
import PelvisPage from './PelvisPage.js';
import LegsPage from './LegsPage.js';
import Header from './Footer.js';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='/body' element={<BodyPage />} />
            <Route path='/head' element={<HeadPage />} />
            <Route path='/torso' element={<TorsoPage />} />
            <Route path='/legs' element={<LegsPage />} />
            <Route path='/pelvis' element={<PelvisPage />} />
            <Route path='/arms' element={<ArmsPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
