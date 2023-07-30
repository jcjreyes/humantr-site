import AnimatedPage from './AnimatedPage';
import React, { useState, useEffect } from 'react';
import ImageSlider from './components/ImageSlider.js';
import { HeadSliderData } from './components/HeadSliderData.js';
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
            <motion.svg viewBox='0 0 476.26 300' height='100vh' width='120%'>
              <g id='Head'>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={pathTransition}
                  strokeWidth={5}
                  strokeDasharray='0 1'
                  fill='none'
                  d='
                  M214,43s-17,8-22,17-9,22-9,29-4,6-4,14a20.6,20.6,0,0,0,11,17l5,19s5,6,7,8,1,11,0,16,29,7,29,7,21-1,26-4,3-10,3-10l.4-15.1A23.3,23.3,0,0,0,266,133c2-5,0-10,2-15,2.17-5.41,11-2,11-16,0-12.25-2.83-10-4.46-13.88A6.89,6.89,0,0,1,274.1,85,45.73,45.73,0,0,0,266,58c-5-7-15-14-27-16C223.22,39.37,214,43,214,43Z'
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
              Modus Operandi, Manipulation
            </h2>
            <p style={{ flex: 1, fontSize: '1.25rem' }}>
              Human traffickers come in different ways, and they are not only
              strangers. A lot of cases of human trafficking are perpetrated by
              people that are trusted by the victim. They utilize a wide array
              of modus operandi and manipulation tactics with the aim of control
              and exploitation of their victims. The most common way is the
              promise of work, especially in a country stricken with poverty, a
              false promise of a job to someone who is in debt can make them an
              easy target for those who are looking to exploit others.
              <br />
              <br />
              Traffickers also use the internet to create fake accounts and earn
              the trust of their chosen victims and gather sensitive information
              about them, once done they promptly reveal their intentions and
              begin to exploit them into doing what they want. Traffickers are
              also known to coerce others by threatening them or their loved
              ones, they often use a strategy known as debt bondage, where they
              get a victim to pledge their labor as repayment for a debt.
              Employers take advantage of this and notify the victim that they
              are not working enough and still have a significant amount despite
              already working several hours under them, keeping them in an
              endless cycle of repayment.
              <br />
              <br />
              Other common tactics include false promises of employment, social
              media and messaging platforms, kidnapping, usury, document
              confiscation, threats of violence and many other methods. It is
              important to be aware of these methods as it may allow one to
              avoid themselves and others from falling for these predatory
              practices.
              <br />
            </p>
            <ImageSlider slides={HeadSliderData} />
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};

export default ArmsPage;
