import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../mixins.scss';

import Banner from "../assets/banner.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faCode, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <Header />
      <img src={Banner} alt="banniere" className="services-img" />
      <div className="services_container">
      <h1>MON OFFRE DE SERVICES</h1>
      <p>Voici les prestations sur lesquelles je peux intervenir.</p>
      <div className="blue_line"></div>

      <div className="service_cartes">
        <div className="service_carte">
        <FontAwesomeIcon icon={faTv} className="icon"/>
          <h2>UX DESIGN</h2>
          <p>l'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
        </div>
        <div className="service_carte" >
        <FontAwesomeIcon icon={faCode} className="icon"/>
          <h2>DEVELOPPEMENT WEB  </h2>
          <p>le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
        </div>
        <div className="service_carte">
        <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="icon" />
          <h2>REFERENCEMENT</h2>
          <p>le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i>
          dans les résultats des moteurs de recherche.</p>
        </div>
      </div>
      </div>

       
      
      <Footer />
    </div>
  );
};

export default Service;
