import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import mainLogo from './media/logo.png';
import './App.css';
import AnimatedPage from './AnimatedPage.js';

const flexStyle = {
  display: 'flex',
  height: 'calc(100vh - 10.5rem)',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
};

const textStyle = {
  height: 'calc(100vh - var(60px)',
  padding: '2.75rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  lineHeight: '1.5',
  fontSize: '1.25rem',
};

const breakStyle = {
  borderTop: '1px solid #1e0404',
  width: '90%',
  height: '2rem',
  margin: '1rem auto 0',
};

const Landing = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyle = {
    borderRadius: '11px',
    textShadow: '1px 1px 3px #666666',
    fontfamily: 'Courier New',
    color: '#ff0f0f',
    fontsize: '23px',
    background: '#3b3b3b',
    padding: '10px 20px 10px 20px',
    textdecoration: 'none',
    transform: isHover ? 'scale(1.1)' : 'scale(1.0)',
  };
  return (
    <>
      <AnimatedPage>
        <main>
          <header
            style={{
              margin: '2rem',
              padding: '1rem',
              height: '0.25rem',
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            <h2>Welcome to the Maya Foundation Website.</h2>
          </header>
          <div
            className='whole'
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridColumnGap: '2rem',
            }}
          >
            <div className='left-sidebar' style={flexStyle}>
              <img
                src={mainLogo}
                style={{
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <div className='line-break' style={breakStyle}></div>
              <div className='credits' style={{ fontStyle: 'italic' }}>
                Presentation by
                <br />
                Chua, Galimpin, Noza, O’Hara, Pangilinan
              </div>
              <br />
              <br />
              <br />
              <div>
                <Link to='/body'>
                  <a
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyle}
                  >
                    Continue
                  </a>
                </Link>
              </div>
            </div>
            <div className='right-sidebar' style={textStyle}>
              The Philippines, a popular destination for bustling cities,
              tropical beaches and colorful culture is, unknown to many, a
              hotbed for illegal activity such as human trafficking and modern
              slavery. The Maya Foundation is an organization dedicated to the
              prevention of human trafficking through awareness and community
              work as well as fundraising for the rehabilitation of victims of
              related crimes.
              <br />
              <br />
              Our website aims to display the many ways the human body is used
              with ill-intent.
              <p style={{ fontStyle: 'italic', fontSize: '16px' }}>
                This website is powered by our partner organization, Arise
                Foundation.* Donate to the cause; click the top-right link.
                <br />
                *not officially. This website is for an academic requirement.
              </p>
            </div>
          </div>
        </main>
      </AnimatedPage>
    </>
  );
};

export default Landing;
