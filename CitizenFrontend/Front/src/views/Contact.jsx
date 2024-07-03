import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>123 Main Street</p>
          <p>India, IN</p>
          <p>Phone: +44 123 456 789</p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" placeholder="Your Name" />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" placeholder="Your Email" />
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <a href="/users">Back</a>
    </div>
  );
}

export default Contact;