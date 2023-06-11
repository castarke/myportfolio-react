import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a className="text-light" href="https://github.com/castarke?tab=repositories">
              <i className="fab fa-github mr-1"></i> GitHub
            </a>
          </li>
          <li className="list-inline-item">
            <a className="text-light" href="https://www.linkedin.com/in/castarke/">
              <i className="fab fa-linkedin mr-1"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
