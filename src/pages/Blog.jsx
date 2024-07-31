import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../mixins.scss';

import Banner from "../assets/banner.jpg";
import coder from "../assets/Blog/coder.jpg";
import croissance from "../assets/Blog/croissance.jpg";
import google from "../assets/Blog/google.jpg";
import screens from "../assets/Blog/screens.jpg";
import seo from "../assets/Blog/seo.jpg";
import technos from "../assets/Blog/technos.png";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="container text-center">
        <img src={Banner} alt="banniere" className="img-fluid mb-4" />
        <h1>BLOG</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="blue_line mx-auto"></div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={coder} alt="code" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 22 août 2022</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={croissance} alt="croissance" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 20 août 2022</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={google} alt="google" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 1 août 2022</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={screens} alt="screens" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Coder en responsive design</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 31 juillet 2022</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={seo} alt="seo" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 30 juillet 2022</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={technos} alt="technos" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
                <div className="blog_carte_2 mt-2"><p>Publié le 12 juillet 2022</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

  