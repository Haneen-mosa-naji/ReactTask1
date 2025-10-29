import HeroStyle from './Hero.module.css';
import Heroimg from './../../assets/images/avataaars.svg';

function Hero() {
  return (
    <section className={HeroStyle.StartBootstrap} id="StartBootstrap">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <img src={Heroimg} alt="Avatar" className={HeroStyle.HeroImg} />
        <h1>Start Bootstrap</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}

export default Hero;
