import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from './media/icon.png';

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        placeItems: 'center',
        height: '0.5rem',
        padding: '1rem',
      }}
    >
      <Link to='/'>
        <img src={icon} width='32px' />
      </Link>
      <div
        className='links'
        style={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Link to='/body'>
          <p>Diagram</p>
        </Link>
        <div className='donateLink' style={{}}>
          <p>Donate</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
