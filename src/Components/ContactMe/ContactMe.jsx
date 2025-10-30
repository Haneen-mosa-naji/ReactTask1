import ContactMeStyle from './ContactMe.module.css';

function ContactMe() {
  return (
    <section className={`container ${ContactMeStyle.Contact} d-flex flex-column gap-3 w-100 my-5`} id="Contact">
      <h2 className={`${ContactMeStyle.Title}`}>Contact Me</h2>
      <form className={` d-flex flex-column  ${ContactMeStyle.Form}`} >

          <input className={`${ContactMeStyle.Input} `} type="text" id="name" name="name" placeholder="Full Name" required />
 
          <input className={`${ContactMeStyle.Input} `} type="email" id="email" name="email" placeholder="Email Address" required />
        
      
          <input className={`${ContactMeStyle.Input} `} type="tel" id="phone" name="phone" placeholder="Phone Number" />
        
          <textarea className={`${ContactMeStyle.Textarea}`} id="message" name="message" placeholder="Message" rows="5" required></textarea>
        
          <input className={`${ContactMeStyle.Button}`} type="submit" id="send" value="Send" />
      
      </form>
    </section>
  );
}

export default ContactMe;
