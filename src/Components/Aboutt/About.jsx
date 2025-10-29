import AboutStyle from './About.module.css';

function About() {
  return (
    <section className={`${AboutStyle.About} my-5`} id="About">
      <div className="container d-flex flex-column justify-content-center align-items-md-center gap-4">
        <h2>About</h2>

        <div className={`row ${AboutStyle.Aboutflex}`}>
         
            <p className="col-md-5">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
        

          
            <p className="col-md-5">
              You can create your own custom avatar for the masthead, change the icon in the
              dividers, and add your email address to the contact form to make it fully functional!
            </p>
    
        </div>

        <div className={AboutStyle.FreeDownload}>
          <a href="https://startbootstrap.com/theme/freelancer/">
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
