import React, { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📨 Message sent successfully from ${formData.name}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 flex justify-center items-center">
      <div className="bg-white bg-opacity-80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-gray-200">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
          📩 Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-gray-400 text-lg" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300"
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          {/* Submit Button with Dark Theme */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-500 to-black text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
