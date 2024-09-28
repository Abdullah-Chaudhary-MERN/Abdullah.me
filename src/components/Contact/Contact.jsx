import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for the loader

  // Error state for validation
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (data) => {
    let valid = true;
    let errors = { name: "", email: "", message: "" };

    // Validate name
    if (!data.from_name) {
      errors.name = "Name is required.";
      valid = false;
    }

    // Validate email (simple email regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(data.email)) {
      errors.email = "Please enter a valid email.";
      valid = false;
    }

    // Validate message
    if (!data.message) {
      errors.message = "Message is required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      from_name: e.target.from_name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Validate form
    if (!validateForm(formData)) {
      return; // Do not proceed if validation fails
    }

    // Show loader when form is submitting
    setLoading(true);

    emailjs.sendForm(
      'service_z45mjz8',
      'template_003h2ds',
      form.current,
      'Dc1Co-iq2QKRZkp1g'
    ).then(
      (result) => {
        console.log(result.text);
        console.log(done);
        setDone(true);
        form.current.reset(); // Reset form on success
        setShowMessage(true);

        // Hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);

        // Hide loader after the process is complete
        setLoading(false);
      },
      (error) => {
        console.log(error.text);

        // Hide loader if there was an error
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact-form" id="contact">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user" placeholder="Name" />
          {errors.name && <span className="error-message">{errors.name}</span>} {/* Name error message */}
          <input type="email" name="email" className="user" placeholder="Email" />
          {errors.email && <span className="error-message">{errors.email}</span>} {/* Email error message */}
          <textarea name="message" className="user" placeholder="Message" />
          {errors.message && <span className="error-message">{errors.message}</span>} {/* Message error message */}
          <input type="submit" value="Send" className="button" />
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>

      {/* Thank You Message */}
      {showMessage && (
        <div className="thank-you-message">
          Thanks for Reaching out to me!
        </div>
      )}
    </div>
  );
};

export default Contact;
