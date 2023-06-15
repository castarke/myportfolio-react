// importing react
import React from 'react';

// creating a footer with styling, which includes 3 social media links and icons
const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#343a40', color: '#fff', padding: '1rem 0' }}>
      <div className='container'>
        <ul className='list-inline mb-0'>
          <li className='list-inline-item'>
            <a className='text-light' href='https://github.com/castarke?tab=repositories'>
              <i className='fab fa-github mr-1'></i> GitHub
            </a>
          </li>
          <li className='list-inline-item'>
            <a className='text-light' href='https://www.linkedin.com/in/castarke/'>
              <i className='fab fa-linkedin mr-1'></i> LinkedIn
            </a>
          </li>
          <li className='list-inline-item'>
            <a className='text-light' href='https://www.instagram.com/castarke/'>
              <i className='fab fa-instagram mr-1'></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
