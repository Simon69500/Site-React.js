import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import '../mixins.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="flex-container">
        <div className="left-content">
          <h3>JOHN DOE</h3>
        </div>
        <div className={`right-content ${isMenuOpen ? 'menu-active' : ''}`}>
          <div className="menu-burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <NavLink className="menu_1" exact to="/" activeClassName="active">
              ACCUEIL
            </NavLink>
            <NavLink className="menu_2" to="/Service" activeClassName="active">
              SERVICES
            </NavLink>
            <NavLink className="menu_3" to="/Realisation" activeClassName="active">
              REALISATIONS
            </NavLink>
            <NavLink className="menu_4" to="/Blog" activeClassName="active">
              BLOG
            </NavLink>
            <NavLink className="menu_5" to="/Contact" activeClassName="active">
              ME CONTACTER
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
