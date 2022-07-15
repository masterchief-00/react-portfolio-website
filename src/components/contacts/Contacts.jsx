import {React,useRef} from 'react'
import './contacts.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'; 

const Contacts = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqf9th3', 'template_9mmkp7t', form.current, '4MPCUQgPObHt-uozQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>myemail19@gmail.com</h5>
            <a href="mailto:myemail19@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <SiMessenger className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>Pacifique Kwizera</h5>
            <a href="https://m.me/pacific.kwizera.75" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+2501234567</h5>
            <a href="https://api.whatsapp.com/send?phone=+2501234567" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name="message" placeholder='Your message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts