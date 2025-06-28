"use client";

import type React from "react";
import { useState } from "react";
import api from "../../axios/axios.config";
import type { ApiResponse } from "../../types";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // handle checks here

    // Handle form submission here
    const response: ApiResponse = await api.post("/contact", formData);

    if (response.data.success) {
      toast.success("Form Submitted Successfully");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error(response.data.message);
    }

    setLoading(false);
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
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
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
            required
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
