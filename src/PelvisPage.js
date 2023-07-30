import AnimatedPage from './AnimatedPage';
import React, { useState, useEffect } from 'react';
import ImageSlider from './components/ImageSlider.js';
import { PelvisSliderData } from './components/PelvisSliderData.js';
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
            width: '85%',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            padding: '0.5rem',
            margin: 'auto',
          }}
        >
          <div style={lineStyle}>
            <motion.svg viewBox='0 0 476.26 1000' height='100vh' width='100%'>
              <g id='Head'>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={5}
                  strokeDasharray='0 1'
                  fill='none'
                  d='M143,453s16,15,85,15c57.14,0,82.74-10.29,89.85-13.82a1.29,1.29,0,0,1,1.87,1.3c-.9,8.26-1.72,45.93-1.72,58.52,0,15-6,42-7,45-.93,2.8-68.1,3.86-81.09-.08a2.87,2.87,0,0,1-2-2.51L225,524l2.85,36.1A2.83,2.83,0,0,1,226,563c-5.65,2.08-18.94,2.37-41,3-17.37.5-26.14-3.79-39.18-5.87a2.94,2.94,0,0,0-1.17.14c-.81.2-2.86-1.84-3.65-26.27V494C141,472.39,142.9,448.77,143,453Z'
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
              Sex Tafficking
            </h2>
            <p style={{ flex: 1, fontSize: '1.25rem' }}>
              The Philippines has one of the highest victim populations for
              sexual exploitation and it has remained a significant problem,
              especially during the social media age. Victims are usually minors
              and an estimated 100,000 children are impacted by sex trafficking.
              A lot of people have been using the internet in recent years, and
              it makes them more vulnerable to being groomed or exploited,
              especially if a person has a social media account. Fellow
              Filipinos are often involved in the recruitment process and have
              connections with nightclub owners located where they want their
              victims to be deployed.
              <br />
              <br />
              Most victims of sex trafficking are often led to believe that they
              are being given a secure job as an “entertainer” In reality they
              are forced to be dancers or prostitutes. Children are often the
              most exploited sexually, and it has seen a significant increase
              during the pandemic, often children will be messaged on social
              media and they ask them to perform acts on camera in exchange for
              money.
              <br />
              <br />
              Another known way people enter sex trafficking is by being sold to
              traffickers, often by their own families. In a country known for
              its culture about the importance of family, the ability of one to
              sell their own kin is despicable. They are often sold due to the
              family requiring finances to help survive for the coming months or
              years due to low overall income or to help settle a debt.
            </p>
            <ImageSlider slides={PelvisSliderData} />
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default ArmsPage;
