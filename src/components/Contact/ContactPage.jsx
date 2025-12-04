import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const API_URL =
  "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/schoolMateEnquiry";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    schoolName: "",
    schoolAddress: "",
    city: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiMessage("");

    // basic required validation
    const { fullName, mobile, email, schoolName, schoolAddress, city } =
      formData;

    if (
      !fullName.trim() ||
      !mobile.trim() ||
      !email.trim() ||
      !schoolName.trim() ||
      !schoolAddress.trim() ||
      !city.trim()
    ) {
      setIsError(true);
      setApiMessage("Please fill all the required fields.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 123", // ⚠️ for production, move this to backend
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setIsError(true);
        setApiMessage(
          data?.message || "Something went wrong. Please try again."
        );
      } else {
        setIsError(false);
        setApiMessage(data.message || "Email sent Successfully");
        // clear form
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          schoolName: "",
          schoolAddress: "",
          city: "",
        });
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setApiMessage("Unable to submit right now. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section data-aos="fade-up" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions, please feel free to get in touch with us
            via phone, text, email, the form below, or even on social media!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Form */}
          <div className={styles.formBox}>
            <h3 className={styles.boxTitle}>Get In Touch</h3>

            {apiMessage && (
              <p
                className={
                  isError ? styles.errorMessage : styles.successMessage
                }
              >
                {apiMessage}
              </p>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name*"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number*"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>School / Institute Name</label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="Enter your school or institute name*"
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label>School / Institute Address</label>
                <textarea
                  rows="3"
                  name="schoolAddress"
                  placeholder="Enter the address*"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.field}>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city*"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.btn} disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3 className={styles.boxTitle}>Contact Information</h3>
              <ul className={styles.infoList}>
                <li>
                  <strong>Phone:</strong> 81100 15152
                </li>
                <li>
                  <strong>Email:</strong> aradiscovertechnologies@gmail.com
                </li>
                <li>
                  <strong>Address:</strong>67A, Giri Rd, Srinivasapuram,
                  Balaganapathy Nagar, Thanjavur, Tamil Nadu 613009
                </li>
              </ul>
            </div>

            <div className={styles.infoBox}>
              <h3 className={styles.boxTitle}>Business Hours</h3>
              <ul className={styles.hours}>
                <li>
                  <strong>Monday – Saturday</strong> 9 AM – 7 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className={styles.mapWrap}>
          <iframe
            title="ARA Discoveries Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31356.584151638952!2d79.09891303476562!3d10.767353325703617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab986fba40a6b%3A0xc60663bc6b08e04e!2sARA%20Discoveries%20Pvt%20Ltd%20%E2%80%93%20IT%20Solutions%20%26%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1763098851336!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
