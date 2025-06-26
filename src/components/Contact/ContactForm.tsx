"use client";

import type React from "react";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form_container">
      <div className="heading_container">
        <h2>Send us a Message</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            className="message-box"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
