import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

// Style imports
import '../styles/nav.scss';

// Page imports

// Component imports

// Context imports

import {routes} from './config';

const Header = () => {
  const [sidenavShowing, setSidenavShowing] = useState(false);

  return (
    <header>
      <nav style={{flexDirection: 'column'}}>
        {/* Main navbar list */}
        <ul>
          {/* Sidenav */}
          <li id="sidenav-trigger">
            <a href="#!" onClick={() => setSidenavShowing(true)}>
              {/* <SidenavMenu /> */}
            </a>
          </li>
          <li id="brand-logo">
            <Link to={routes.home} onClick={() => {}}>
              Brand Logo
            </Link>
          </li>
          {/* vvv for flex positioning if needed vvv */}
          {/* <li id="invisible-item"></li> */}
          <li>
            <Link to={routes.about} onClick={() => {}}>
              About
            </Link>
          </li>
          <li>
            <Link to={routes.home} onClick={() => {}}>
              Home
            </Link>
          </li>
          <li>
            <Link to={routes.contact} onClick={() => {}}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
