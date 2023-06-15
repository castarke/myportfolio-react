// importing react
import React from 'react';
// creating navigation function with props
function Navigation(props) {
  // each of the tabs
  const tabs = ['About', 'Projects', 'Contact', 'Resume'];
  return (
    <div className='tabs is-centered'>
      <ul className='nav nav-tabs'>
        {tabs.map((tab) => (
          <li
            className={
              // if current page is a specific tab, then the tab active
              props.currentPage === tab ? 'nav-item is-active' : 'nav-item'
            }
            key={tab}
          >
            <a
              href={'#' + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
