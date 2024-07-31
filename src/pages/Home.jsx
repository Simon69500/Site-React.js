import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../mixins.scss';

import heroBg from "../assets/hero-bg.jpg";
import competenceImg from "../assets/about.jpg"; 


const Home = () => {

  const [progressColors] = useState({
    html5: "red",
    css3: "blue",
    javascript: "yellow",
    php: "purple",
    react: "green"
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate ("/About")
  };

  return (
    <div className="home">
      <Header />
      <main className="main_home">
        <div className="main_1" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button onClick={handleClick}>En savoir plus</button>
          </div>
        </div>
        <div className="main_2">
          <div className="main_conteneur">
            <div className="main_2_1">
              <h2>À propos</h2>
              <div className="blue-line"></div>
              <article>
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
              </article>
            </div>
            <div className="main_2_2">
            
              <img src={competenceImg} alt="Mes compétences" className="competence-img" />
                            
              <h2>Mes compétences</h2>
             
              <div className="main_2_text">
    <div className="skill html5">
      <p>HTML5 90%</p>
      <progress max="100" value="90" style={{ backgroundColor: progressColors.html5 }}></progress>
    </div>
    <div className="skill css3">
      <p>CSS3 80%</p>
      <progress max="100" value="80" style={{ backgroundColor: progressColors.css3 }}></progress>
    </div>
    <div className="skill javascript">
      <p>JAVASCRIPT 70%</p>
      <progress max="100" value="70" style={{ backgroundColor: progressColors.javascript }}></progress>
    </div>
    <div className="skill php">
      <p>PHP 60%</p>
      <progress max="100" value="60" style={{ backgroundColor: progressColors.php }}></progress>
    </div>
    <div className="skill react">
      <p>React 50%</p>
      <progress max="100" value="50" style={{ backgroundColor: progressColors.react }}></progress>
    </div>
  </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

