import AnimatedPage from './AnimatedPage';
import React, { useState, useEffect } from 'react';
import ImageSlider from './components/ImageSlider.js';
import { AnimatePresence, motion } from 'framer-motion';
import { TorsoSliderData } from './components/TorsoSliderData';

const ArmsPage = () => {
  const lineStyle = {
    width: '100%',
    height: 'min-content',
    stroke: 'black',
  };

  const pathTransition = {
    duration: 2,
    ease: 'easeInOut',
  };

  return (
    <>
      <AnimatedPage>
        <div
          style={{
            width: '75%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '1rem',
            margin: 'auto',
          }}
        >
          <div style={lineStyle}>
            <motion.svg viewBox='0 0 476.26 800' height='100vh' width='100%'>
              <g id='Arms'>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M232,173.46V464s-89-2-89-17c0,0,2.14-17.19,5.24-33.95,1.58-8.57,4.88-17.9,5.23-23,.77-11,2.09-44.93-4.19-61.91-6.08-16.44,1.05-75.88,1.05-75.88s31.58-57.26,28.27-69.89c0,0,19.12-11.44,21.4-14.44S206,173,232,173.46Z'
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M232,173.46V464s89-2,89-17c0,0-2.14-17.19-5.24-33.95-1.58-8.57-4.88-17.9-5.23-23-.77-11-2.09-44.93,4.19-61.91,6.08-16.44-1.05-75.88-1.05-75.88s-31.58-57.26-28.27-69.89c0,0-19.12-11.44-21.4-14.44S258,173,232,173.46Z'
                />
              </g>
            </motion.svg>
          </div>
          <div
            className='content'
            style={{
              textAlign: 'justify',
              display: 'flex',
              flexDirection: 'column',
              padding: '0.25rem',
              gap: '1rem',
            }}
          >
            <h2 style={{ fontWeight: 800, fontSize: '2.25rem' }}>
              The Organ Trade
            </h2>
            <p style={{ flex: 1, fontSize: '1.25rem' }}>
              The illegal organ is a subset of human trafficking that is present
              in the Philippines. The black market for organs is fueled by a
              high demand and a shortage of supply for organs needed for
              transplantation worldwide. The illegal industry showcases a
              horrifying manifestation of greed.
              <br />
              <br />
              The issues arise from traffickers’ enticing of the poor, desperate
              and uninformed to voluntarily sell their organs. In Baseco,
              Manila, local officials estimate that some 3,000 of the area’s
              50,000 residents have sold one of their kidneys and have paid as
              low as PHP 20,000 after the operation. The organs are then sold
              for a large markup to buyers lower on the transplant waiting list.
              Only having one kidney left has left some of these people
              suffering from higher blood pressures and a vulnerability to renal
              disorders.
            </p>
            <ImageSlider slides={TorsoSliderData} />
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default ArmsPage;
