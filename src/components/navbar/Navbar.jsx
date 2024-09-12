import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { LuMenu } from 'react-icons/lu';
import { LuX } from 'react-icons/lu';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const hamburgerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <span>El-Consult</span>
      </div>
      <div className="navbar-right">
        <nav className={open ? '' : 'active'}>
          <Link
            onClick={hamburgerToggle}
            to="/"
            className={pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            onClick={hamburgerToggle}
            to="/about-us"
            className={pathname === '/about-us' ? 'active' : ''}
          >
            About us
          </Link>
          <Link
            onClick={hamburgerToggle}
            to="/services"
            className={pathname === '/services' ? 'active' : ''}
          >
            Services
          </Link>
          <Link
            onClick={hamburgerToggle}
            to="/why-choose-us"
            className={pathname === '/why-choose-us' ? 'active' : ''}
          >
            Why choose us
          </Link>
          <Link
            onClick={hamburgerToggle}
            to="/faq"
            className={pathname === '/faq' ? 'active' : ''}
          >
            FAQs
          </Link>
          <Link
            onClick={hamburgerToggle}
            to="/contact-us"
            className={pathname === '/contact-us' ? 'active' : ''}
          >
            Contact us
          </Link>
        </nav>

        <div className="darkMode">
          {/* <span>Appearance</span> */}
          <DarkModeToggle />
        </div>

        <div onClick={hamburgerToggle} className="mobile">
          {open ? (
            <LuX className="hamburger" size={25} />
          ) : (
            <LuMenu className="hamburger" size={25} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
