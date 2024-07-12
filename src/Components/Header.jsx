import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
      <header className="header">
        <div className="flex-container">
          <div className="left-content">
            <h3>JOHN DOE</h3>
          </div>
          <div className="right-content">
            <nav className="menu">
              <Link className="menu_1" to="/">
                Accueil
              </Link>
              <Link className="menu_2" to="/Service">
                Services
              </Link>
              <Link className="menu_3" to="/Realisation">
                Réalisations
              </Link>
              <Link className="menu_4" to="/Contact">
                Blog
              </Link>
              <Link className="menu_5" to="/Contact">
                Me contacter
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  };

export default Header;
