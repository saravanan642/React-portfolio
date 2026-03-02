import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_mkxblos",
      "template_rw2zkwu",
      formData,
      "zRv3_fcYGYMfIRxRw"
    )
    .then(() => {
      console.log("SUCCESS!");
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      console.log("FAILED...", error);
    });
  };

  return (
    <section className="min-h-screen 
    bg-gradient-to-br from-[#0f1f3d] via-[#0b2a4a] to-[#0a1c33] 
    text-white px-6 md:px-20 py-28">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="space-y-8">
          <h1 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>

          {submitted && (
            <p className="text-green-400 font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
        </div>

        <div className="bg-white/5 backdrop-blur-xl 
        border border-white/10 rounded-3xl p-10">

          <form className="space-y-6" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:border-cyan-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:border-cyan-400 focus:outline-none"
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 
              focus:border-cyan-400 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg 
              bg-cyan-600 hover:bg-cyan-700 
              transition duration-300 font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;