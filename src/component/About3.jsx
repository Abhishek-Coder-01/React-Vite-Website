import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

function About3() {
  const form = useRef();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMsg("❌ Please fix the errors above.");
      setTimeout(() => setMsg(""), 3000);
      return;
    }

    setLoading(true);
    setMsg("");

    emailjs
      .sendForm(
        "service_6j3em29",
        "template_mxnu8ig",
        form.current,
        "pj9DmWpHrB7izjlYu"
      )
      .then(
        () => {
          setMsg("✅ Message sent successfully!");
          form.current.reset();
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setMsg(""), 3000);
        },
        (error) => {
          console.error(error.text);
          setMsg("❌ Failed to send. Please try again.");
          setLoading(false);
          setTimeout(() => setMsg(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="border-t border-[hsl(var(--border))] bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--muted))]">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Have questions or want to discuss a project? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <motion.div
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`flex h-12 w-full rounded-lg border ${errors.name ? "border-red-500" : "border-[hsl(var(--input))]"} bg-[hsl(var(--background))] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors`}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className={`flex h-12 w-full rounded-lg border ${errors.email ? "border-red-500" : "border-[hsl(var(--input))]"} bg-[hsl(var(--background))] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors`}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-2 block text-sm font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us about your project or questions..."
                  className={`flex min-h-[120px] w-full rounded-lg border ${errors.message ? "border-red-500" : "border-[hsl(var(--input))]"} bg-[hsl(var(--background))] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-colors`}
                ></textarea>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className={`rounded-lg h-12 px-6 font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center gap-2 transition-all ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
                >
                  {loading ? (
                    <>
                      
                      Sending...<svg width="22" height="22" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <circle cx="25" cy="25" r="20" stroke="#1A73E8" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="80 150">
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1s"
      repeatCount="indefinite"/>
  </circle>
</svg>

                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {msg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`rounded-lg p-4 text-center ${msg.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {msg}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Additional Contact Information */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="py-6 px-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-[hsl(var(--muted-foreground))] ">heloworld2134@gmail.com</p>
            </div>

            <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-[hsl(var(--muted-foreground))]">+91 (555) 123-4567</p>
            </div>

            <div className="p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-[hsl(var(--muted-foreground))]">123 Main St, Bhiwandi, India</p>
            </div>
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About3;