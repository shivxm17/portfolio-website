"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "150e4f0e-5458-427f-8766-5142d2e54364",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-background/50 border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon-purple text-glow">Touch</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to build something extraordinary? Let&apos;s collaborate. Drop
            me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:shivamsingh17114@gmail.com"
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-4 rounded-xl bg-neon-blue/10 text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="font-medium text-white/90 group-hover:text-neon-blue transition-colors">
                      shivamsingh17114@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/connecttoshivamsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-4 rounded-xl bg-neon-purple/10 text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                    <p className="font-medium text-white/90 group-hover:text-neon-purple transition-colors">
                      linkedin.com/in/connecttoshivamsingh
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/shivxm17"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-4 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">GitHub</p>
                    <p className="font-medium text-white/90 group-hover:text-white transition-colors">
                      github.com/shivxm17
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_50px_rgba(176,38,255,0.05)]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors resize-none"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : submitted ? (
                    <span className="text-green-600">Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
