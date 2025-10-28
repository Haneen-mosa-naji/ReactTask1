import HeroStyle from './Hero.module.css';
import Heroimg from './../../assets/images/avataaars.svg'
function Hero() { 


    return <>
        <section className={`${HeroStyle.StartBootstrap}`} id="StartBootstrap">
        <img src={Heroimg}/>
        <h1 >Start Bootstrap</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
    </>
 }

 export default Hero;