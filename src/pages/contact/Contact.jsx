import { useState } from 'react';
import './contact.scss';

import { LuPhone, LuMapPin } from 'react-icons/lu';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setIsLoading(true);

    const apiUrl = import.meta.env.DEV
      ? import.meta.env.VITE_LOCAL_API
      : import.meta.env.VITE_REMOTE_API;

    try {
      const response = await fetch(`${apiUrl}/contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(true);
        console.error('Error:', await response.text());
      }
    } catch (error) {
      setError(true);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Reach out to us</h1>
      <div className="location">
        <LuPhone /> +358 403 698 459, <LuMapPin /> Vantaa, Finland
      </div>

      <div className="contact-us-content">
        <div className="contact-us-imgContainer">
          <img src="/images/contact-us.png" alt="Contact Us" />
        </div>
        <form onSubmit={sendEmail} className="contact-us-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="contact-us-input"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="contact-us-input"
            required
          />
          <textarea
            className="contact-us-textArea"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
            required
          ></textarea>
          {success && (
            <span className="success">
              Your message has been sent successfully.
            </span>
          )}
          {error && <span className="error">Something went wrong!</span>}
          {isLoading && <span className="send">Sending, please wait...</span>}
          <button type="submit" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
