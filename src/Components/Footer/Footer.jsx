import FooterStyle from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${FooterStyle.footer} `}>
      <div className="container my-5">
        <div className="row">
          <div className={`col-md-4 ${FooterStyle.footerChild} ${FooterStyle.footerPart1}`}>
            <h4>Location</h4>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

       <div className={`col-md-4 ${FooterStyle.footerChild} ${FooterStyle.footerPart2}`}>
  <h4>Around the Web</h4>
  <a href="#">F</a>
  <a href="#">T</a>
  <a href="#">in</a>
  <a href="#">0</a>
</div>

          <div className={`col-md-4 ${FooterStyle.footerChild} ${FooterStyle.footerPart3}`}>
            <h4>About Freelancer</h4>
            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="https://startbootstrap.com/" className={`${FooterStyle.StartBootstrap}`}>Start Bootstrap</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
