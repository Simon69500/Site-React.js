import '../mixins.scss';

import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { faGreaterThan ,faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import '../Footer.scss';

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
    <footer className="footer">
      <div className="footer_link">
        <h3>John Doe</h3>
        <p>40 rue Laure Diebold</p>
        <p>69009, Lyon, France</p>
        <p>Téléphone : 06 20 30 40 50</p>
        <div>
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>

      <div className="footer_link">
        <h3>Liens utiles</h3>
        <NavLink className="menu_1" exact to="/" activeClassName="active">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Accueil
        </NavLink>
        <NavLink className="menu_2" to="/About">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> A propos
        </NavLink>
        <NavLink className="menu_3" to="/Service">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Services
        </NavLink>
        <NavLink className="menu_4" to="/Contact">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Me contacter
        </NavLink>
        <NavLink className="menu_5" to="/About">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Mentions légales
        </NavLink>
      </div>

      <div className="footer_link">
        <h3>Mes dernières réalisations</h3>
        <NavLink className="menu_1" exact to="/Realisation" activeClassName="active">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Fresh food
        </NavLink>
        <NavLink className="menu_2" to="/Realisation">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Restaurant Akira
        </NavLink>
        <NavLink className="menu_3" to="/Realisation">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Espace bien-être
        </NavLink>
      </div>

      <div className="footer_link">
        <h3>Mes derniers articles</h3>
        <NavLink className="menu_1" exact to="/Blog" activeClassName="active">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Coder son site en HTML/CSS
        </NavLink>
        <NavLink className="menu_2" to="/Blog">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Vendre ses produits sur le web
        </NavLink>
        <NavLink className="menu_3" to="/Blog">
          <FontAwesomeIcon icon={faGreaterThan} className="arrow-icon blue" /> Se positionner sur Google
        </NavLink>
      </div>
    </footer>

    <div className="footer_copyright">
  <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
</div>

{isVisible && (
  <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
    <FontAwesomeIcon icon={faArrowUp} />
  </button>
)}


    </div>
  );
};

export default Footer;

