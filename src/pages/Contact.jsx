import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ContactImg from "../assets/contact-bg.jpg";

import '../mixins.scss';

const Contact = () => {
  // Gestion de l'état pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Fonction de validation des champs du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.tel) newErrors.tel = 'Le numéro de téléphone est requis';
    if (!formData.message) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Réinitialisation des champs du formulaire après soumission
    setFormData({
      name: '',
      email: '',
      tel: '',
      message: ''
    });
    
    // Optionnel : Ajouter une alerte ou un message de succès
    alert('Formulaire soumis avec succès !');
  };

  return (
    <div>
      <Header />
      <div className="img_container" style={{ backgroundImage: `url(${ContactImg})` }}>
        <div className="contact_container">
          <h1>Me Contacter</h1>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
          <div className="blue_line"></div>

          {/* Partie Formulaire */}
          <div className="form_container">
            <div className="form">
              <h2>Formulaire de contact</h2>
              <form onSubmit={handleSubmit} className="contact_form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                  placeholder="Entrez votre nom"
                />
                {errors.name && <span className="error">{errors.name}</span>}
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  placeholder="Entrez votre email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
                
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className={errors.tel ? 'input-error' : ''}
                  placeholder="Entrez votre numéro de téléphone"
                />
                {errors.tel && <span className="error">{errors.tel}</span>}
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  placeholder="Votre message"
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
                
                <button type="submit" className="submit_button">Envoyer</button>
              </form>
            </div>

            {/* Partie Contact */}
            <div className="contact_info">
              <h2>Mes coordonnées</h2>
              <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p>06 20 30 40 50</p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0111311930263!2d4.820028315742248!3d45.782812379106336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1d93312e93d%3A0x28982e97d00ae24!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1689139937201!5m2!1sfr!2sfr"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
