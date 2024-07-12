import Header from "../Components/Header";
import Footer from "../Components/Footer";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main_home">
      <div className="main_1" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="content">
            <h1>Bonjour, je suis John Doe</h1>
            <h3>Développeur web full stack</h3>
            <button>En savoir plus</button>
          </div>
        </div>
        <div className="main_2">
          <div className="main_2_1">
            <h3>A propos</h3>
            <article>
              <p>texte de présentation du développeur avec ses compétences</p>
            </article>
          </div>
          <div className="main_2_2">
          <h3>Mes compétences</h3>
          <div className="main_2_text">
             <p>html5 90%</p>
             <p>CSS3 80%</p>
             <p>JAVASCRIPT 70%</p>
             <p>PHP 60%</p>
              <p>React 50%</p>
            </div>
          </div>
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
