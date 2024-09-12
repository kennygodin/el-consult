import Button from '../../components/button/Button';
import './contact.scss';

import { LuPhone } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';

function Contact() {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Reach out to us</h1>
      <div className="location">
        <LuPhone /> +358 403 698 459, <LuMapPin /> Vantaa, Finland
      </div>

      <div className="contact-us-content">
        <div className="contact-us-imgContainer">
          <img src="/images/contact-us.png" alt="" />
        </div>
        <form className="contact-us-form">
          <input type="text" placeholder="Name" className="contact-us-input" />
          <input type="text" placeholder="Email" className="contact-us-input" />
          <textarea
            className="contact-us-textArea"
            placeholder="Your message..."
            cols="30"
            rows="10"
          ></textarea>
          <Button path="#" label="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
