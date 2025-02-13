import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discordWebhookUrl =
      "https://discord.com/api/webhooks/1339290890233184357/jnNbvI7J1cDFnjg2iOeSnoow2Omt_EMU4h19EIvrqUtP0EDbnp4l17J8CRLP1efdVB89"; // Replace with your actual webhook URL

    const message = {
      content: `Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
    };

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-primary">
      <div className="p-6 mx-auto max-w-xl bg-white rounded-md shadow-md font-[sans-serif]">
        <h1 className="text-3xl text-black font-bold text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Hello World"
              value={formData.subject}
              onChange={handleChange}
              className="py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-600 mb-2">Message:</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;