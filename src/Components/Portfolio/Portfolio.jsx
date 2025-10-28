import PortfolioStyle from './Portfolio.module.css';
import PortfolioStyleimg1 from './../../assets/images/cabin.png';
import PortfolioStyleimg2 from './../../assets/images/cake.png';
import PortfolioStyleimg3 from './../../assets/images/circus.png';
import PortfolioStyleimg4 from './../../assets/images/game.png';
import PortfolioStyleimg5 from './../../assets/images/safe.png';
import PortfolioStyleimg6 from './../../assets/images/submarine.png';

function Portfolio() {
  return (
    <>
      <section className={PortfolioStyle.Portfolio} id="Portfolio">
        <div className="container">
          <h2 className="text-center mb-4">Portfolio</h2>

          <div className="row">
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg1} alt="this is image" className="img-fluid rounded" />
            </div>
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg2} alt="this is image" className="img-fluid rounded" />
            </div>
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg3} alt="this is image" className="img-fluid rounded" />
            </div>
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg4} alt="this is image" className="img-fluid rounded" />
            </div>
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg5} alt="this is image" className="img-fluid rounded" />
            </div>
            <div className={`col-md-4 mb-4 ${PortfolioStyle.images}`}>
              <img src={PortfolioStyleimg6} alt="this is image" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
