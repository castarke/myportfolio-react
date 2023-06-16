// importing all the necessary pages 
import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
// import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Portfolio from './Portfolio';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
        // importing portfolio because thats where the data is. Project function is brought into the portfolio page
      case 'Projects':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;

      default:
        return <About />;
    }
  };
  
  return (
    // creating the navbar with naavbar links
    <div>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a
            className='navbar-item'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/castarke?tab=repositories'
          >
            <span className='content is-large' style={{size:'55px'}}>Candler Starke</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
