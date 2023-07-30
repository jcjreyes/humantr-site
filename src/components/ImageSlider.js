import React from 'react';
import { ArmsSliderData } from './ArmsSliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const sliderStyle = {
  position: 'relative',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const imageStyle = {
  width: '500px',
  height: '300px',
  borderRadius: '20px',
  boxShadow: '-2px 0px 14px 0px rgba(0,0,0,0.25)',
};

const arrowStyle = {
  fontSize: '1.5rem',
  color: 'black',
  zIndex: '10',
  cursor: 'pointer',
  userSelect: 'none',
};

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <section className='slider' style={sliderStyle}>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt='image'
                className='image'
                style={imageStyle}
              />
            )}
          </div>
        );
      })}
      <br />
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '2rem',
        }}
      >
        <FaArrowAltCircleLeft
          className='left-arrow'
          onClick={prevSlide}
          style={arrowStyle}
        />
        <FaArrowAltCircleRight
          className='right-arrow'
          onClick={nextSlide}
          style={arrowStyle}
        />
      </nav>
    </section>
  );
};

export default ImageSlider;
