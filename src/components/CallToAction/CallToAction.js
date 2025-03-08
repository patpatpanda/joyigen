"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Tack! Ditt meddelande har skickats.");
        setFormData({ email: "", subject: "", message: "", honeypot: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("Något gick fel. Försök igen senare.");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("Något gick fel. Försök igen senare.");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    
    <section id="contact" className={styles.contactSection}>
       
      <div className={styles.dividerContainer}>
        <hr className={styles.dividerLine} />
        <span className={styles.dividerIcon}>✉️</span>
        <hr className={styles.dividerLine} />
      </div>
  
      <h2 className={styles.sectionTitle}>Kontakta oss</h2>
      <p className={styles.sectionSubtitle}>
        Vi ser fram emot att höra av dig! Fyll i formuläret nedan eller ring oss för ett personligt samtal.
      </p>
      {/* Resten av formuläret */}
    
  

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Din e-postadress</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>Ämne</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Meddelande</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.formInput}
            ></textarea>
          </div>

          <div className={styles.honeypot}>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
              aria-hidden="true"
            />
          </div>

          <button type="submit" className={styles.formButton}>Skicka meddelande</button>
        </form>

        {status && <p className={styles.formStatus}>{status}</p>}
      </div>

      <div className={styles.socialMediaSection}>
        <h3 className={styles.socialTitle}>Följ oss på sociala medier</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
        </div>
        <p className={styles.contactInfo}>E-post: joyrudqvist@gmail.com | Telefon: 012-345 6789</p>
      </div>
    </section>
  );
};

export default CallToAction;
