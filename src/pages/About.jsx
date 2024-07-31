import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Accordion from "../Components/Accordion";
import '../About.scss';
import '../mixins.scss';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <h1>MENTIONS LEGALES</h1>
        <div className="blue_line"></div>
        <div className="about_contenair">
          <Accordion title="Editeur du site">
            <div className='about_accordion'>
            <h3>John Doe</h3>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>06 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            </div>
            
          </Accordion>
          <Accordion title="Hébergeur">
          <div className='about_accordion'>
            <h3>Always Data</h3>
            <p>91 rue du Faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <p>www.alwaysdata.com</p>
            </div>
          </Accordion>
          <Accordion title="Crédits">
          <div className='about_accordion'>
            <h3>Crédits</h3>
            <p>Site développé par john Doe, étudiant du CEF</p>
            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target='_blank'>Pixabay</a></p>
            </div>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

