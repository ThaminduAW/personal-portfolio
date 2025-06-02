import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your backend API here (set up later)
    alert("Message sent (functionality will be added)");
  };

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-3 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
