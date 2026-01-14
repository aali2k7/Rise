"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xpqqzooj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-light relative">
      {/* Contact Form */}
      <section className="section">
        <div className="max-w-xl mx-auto px-6">
          <div className="card">
            <h2 className="text-h3 text-text-primary mb-8">
              Enquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-button"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-button"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-button"
              />

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-button bg-white"
              >
                <option value="">Select a course</option>
                <option value="class-11">Class 11</option>
                <option value="class-12">Class 12</option>
                <option value="jee">JEE Preparation</option>
                <option value="neet">NEET Preparation</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-button resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Thank You!
            </h3>
            <p className="text-text-secondary mb-6">
              Thank you for submitting your details.  
              Please wait until one of our associates gets in touch with you.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
