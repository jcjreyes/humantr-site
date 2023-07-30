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
            <motion.svg viewBox='0 0 476.26 800' height='100vh' width='100%'>
              <g id='Arms'>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M174.5,183a1,1,0,0,1,1,1.35c-3.31,8.53-22,56.68-27.5,66.7-6,11-6,75.54-1,81,5.92,6.47-11,29-12,36s1.83,25.34-1,31c-2,4-26.54,93.36-26,88,0,0,2,15,5,24,2.82,8.47-.55,20.47-1,21.87a.84.84,0,0,0,0,.27v18.13a16.59,16.59,0,0,1,0,2.73c-.75,2.52-3.49,9.37-6,1-3-10-3-12-4-12-2.83,0,.53,16.56-1,23-.4,1.69-2,8.16-5,8-1.83-.1-4.62-1.62-5-8-1-17-2-32-5-17s-4,27-9,27c-5.77,0-6-6-2-25l0-.08c.1-.89,1.81-15.54-4-2-6,14-4.91,18.31-8,19-9,2-5-19,0-31a.26.26,0,0,0,0-.08c.3-1,5.58-18.66-9-8,0,0-15,13-15,5s9.49-15.61,13-20c4-5-4-5,14-17,9.74-6.5,12-34,13-47,0,0,2-52,5-57,0,0,12-31,11-35s1.22-36.67,4.61-42.33S104.5,278.52,105,271s9-53,14-60,14-19,35-24C167,183.91,172.31,183.11,174.5,183Z'
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={4}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M290.5,183.32a1,1,0,0,0-1,1.34c3.31,8.54,22,56.69,27.5,66.71,6,11,6,75.54,1,81-5.92,6.47,11,29,12,36s-1.83,25.34,1,31c2,4,26.54,93.36,26,88,0,0-2,15-5,24-2.82,8.46.55,20.47,1,21.86a.9.9,0,0,1,0,.28v18.13a5.37,5.37,0,0,0,.23,1.54c.75,2.52,3.26,10.55,5.77,2.19,3-10,3-12,4-12,2.83,0-.53,16.55,1,23,.4,1.68,2,8.16,5,8,1.83-.1,4.62-1.63,5-8,1-17,2-32,5-17s4,27,9,27c5.77,0,6-6,2-25,0,0,0-.06,0-.08-.1-.9-1.81-15.54,4-2,6,14,4.91,18.31,8,19,9,2,5-19,0-31,0,0,0,0,0-.07-.3-1-5.58-18.66,9-8,0,0,15,13,15,5s-9.49-15.62-13-20c-4-5,4-5-14-17-9.74-6.5-12-34-13-47,0,0-2-52-5-57,0,0-12-31-11-35s-1.22-36.67-4.61-42.34-4.89-37.14-5.39-44.66-9-53-14-60-14-19-35-24C298,184.28,292.69,183.48,290.5,183.32Z'
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
