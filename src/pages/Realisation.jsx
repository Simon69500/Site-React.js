import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../mixins.scss';

import Banner from "../assets/banner.jpg";
import Food from "../assets/fresh-food.jpg";
import Espace from "../assets/espace-bien-etre.jpg";
import Restaurant from "../assets/restaurant-japonais.jpg";

const Realisation = () => {
  return (
    <div>
      <Header />
      <div className="container text-center">
        <img src={Banner} alt="banniere" className="img-fluid mb-4" />
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="blue_line mx-auto"></div>

        <div className="row mt-4">
          {/* Card Fresh Food */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Food} alt="fresh food" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                <a href="#" className="btn btn-primary">Voir</a>
              </div>
            </div>
          </div>

          {/* Card Restaurant Akira */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Restaurant} alt="restaurant japonais" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <a href="#" className="btn btn-primary">Voir</a>
              </div>
            </div>
          </div>
          
          {/* Card Espace Bien-être */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Espace} alt="espace bien-être" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">Réalisation d'un site vitrine pour un patricien de bien-être.</p>
                <a href="#" className="btn btn-primary">Voir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Realisation;

