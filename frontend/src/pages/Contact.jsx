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
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-hunter-green">Contact Me</h2>
        <p className="text-lg text-eerie-black">Let's discuss your next project or collaboration</p>
      </div>
      
      <div className="bg-dun p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-hunter-green mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-ash-gray rounded-md focus:border-sky-blue focus:ring-2 focus:ring-sky-blue focus:outline-none transition-colors bg-seasalt text-eerie-black"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-hunter-green mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-ash-gray rounded-md focus:border-sky-blue focus:ring-2 focus:ring-sky-blue focus:outline-none transition-colors bg-seasalt text-eerie-black"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-hunter-green mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell me about your project or what you'd like to discuss"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-ash-gray rounded-md focus:border-sky-blue focus:ring-2 focus:ring-sky-blue focus:outline-none transition-colors bg-seasalt text-eerie-black resize-vertical"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-sky-blue text-seasalt px-6 py-3 rounded-md hover:bg-hunter-green transition-colors font-medium text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-eerie-black mb-4">Or reach me directly at:</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:your@email.com" className="text-sky-blue hover:text-hunter-green transition-colors">
            📧 Email
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-sky-blue hover:text-hunter-green transition-colors">
            💼 LinkedIn
          </a>
          <a href="https://github.com/yourusername" className="text-sky-blue hover:text-hunter-green transition-colors">
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
