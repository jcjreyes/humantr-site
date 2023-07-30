import AnimatedPage from './AnimatedPage';
import React, { useState, useEffect } from 'react';
import ImageSlider from './components/ImageSlider.js';
import { ArmsSliderData } from './components/ArmsSliderData.js';
import { AnimatePresence, motion } from 'framer-motion';

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
            <motion.svg viewBox='0 0 476.26 1200' height='100vh' width='120%'>
              <g id='Arms'>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M144,563s27,7,35,7,27,.08,36-2,12.14-1.54,12.14-1.54S224,608,222,620s-6,46-2,59,4,17,3,20,0,29,1,31c0,0,2,25,2,41,0,0,0,17-3,31a161.69,161.69,0,0,0-3,31c.05,14.87,2,27.62,2,32a13.05,13.05,0,0,1,1,8c-1,4-1,14,1,17,0,0,7,9,5,19-1.87,9.34-6.35,11.7-12.64,15.23a6.25,6.25,0,0,0-2.29,2.22c-1.44,2.4-4.07,7.48-4.07,12.55,0,0,0,6-10,13,0,0-14,17-24,12s-13-6-17-7c-3.83-1-10.4-7.4-5.71-12.34a26.1,26.1,0,0,0,2.09-2.48c5.54-7.35,25.89-35,27.62-46.18,0,0,4-23,0-34,0,0-13-51-13-55s-7-24-3-44,4-34,0-40-8-19-6-30,1-44,0-50-9-20-9-29a241.52,241.52,0,0,0-2-28C149,579,144,563,144,563Z'
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M229,564s.73-2,2.37-2S258,565,272,565c9.82,0,26.15-1.48,35-2.36a5.1,5.1,0,0,1,5.58,5.61c-.81,7.69-2.27,20.7-3.61,28.75-2,12-7,19-7,27s-3,19-6,24-4,38-3,45-3,22-5,25-3,29-2,33,1,4,0,13-6,24-5,32-3,25-5,30c-1.94,4.84-2.94,19.06-3.91,25.41a5.43,5.43,0,0,0,0,1.21c.34,4.16,2.53,28.16,7.95,35.38,2.93,3.91,23.89,32.92,26.82,37.7a4.21,4.21,0,0,1,.33.63c.79,1.78,4.1,10.42-2.15,16.67-6.75,6.75-9.78,14.43-16.26,15a4.77,4.77,0,0,0-1.25.24c-1.89.7-8.69,2.44-15.49-5.21-7.37-8.29-30.92-36.71-35-42a50.88,50.88,0,0,1-3-5c-.5-1.63-2.66-4.73-3-9s.87-11.74,3-16c0,0-2-24,4-29s2-26,2-26-6-25-6-32V760s6-25,6-30-7-19-6-26-2-27,1-33,6-18,3-27,0-50,0-52S228,569,229,564Z'
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
              Forced Labor and Human Slavery
            </h2>
            <p style={{ flex: 1, fontSize: '1.25rem' }}>
              Labor trafficking is a form of human trafficking which involves
              deception and coercion of people in order to engage in labor
              services against their will or exploitatively. Victims of labor
              trafficking are subjected to unsafe working conditions, extremely
              low wages as well as abuse from their employers.
              <br />
              <br />
              The issue of labor trafficking arises from deceptive recruitment
              aimed at enticing poorer and vulnerable individuals with hopes of
              finding employment by moving to bigger cities or to other
              countries. Domestic helpers, agriculture laborers, seafarers and
              construction workers are some occupations that are vulnerable to
              exploitative practices and abuse from employers in the form of
              binding them to the company through contracts, passport/visa
              confiscation and blackmail.
              <br />
            </p>
            <ImageSlider slides={ArmsSliderData} />
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default ArmsPage;
