
import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    // Convert FormData to URLSearchParams format
    const formDataEntries: Record<string, string> = {};
    data.forEach((value, key) => {
      formDataEntries[key] = value.toString();
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataEntries).toString()
    })
      .then(() => {
      setSubmitted(true);
      setSubmitting(false);
      form.reset(); // clear form
      setTimeout(() => {
        setSubmitted(false); // reset thank-you message
      }, 5000);
    })
      .catch(() => {
        alert('Error submitting form');
        setSubmitting(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 reveal">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto reveal">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info */}
          <div className="reveal h-full">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <Mail size={24} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <a href="mailto:gulshannagar5525@gmail.com" className="text-gray-600 hover:text-teal transition-colors">
                        gulshannagar5525@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <Phone size={24} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <a href="tel:8690305357" className="text-gray-600 hover:text-teal transition-colors">
                        8690305357
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <MapPin size={24} className="text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <p className="text-gray-600">Kota, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-4">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/gulshan-nagar-b9b847283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-full hover:bg-teal transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/Gulshan-nagar" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-full hover:bg-teal transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal h-full">
            {submitted ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-navy mb-4">Thank you!</h3>
                <p>Your message has been submitted. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                netlify-honeypot="bot-field"
                className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col justify-between"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Your message here..." required></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="mt-6 bg-navy text-white px-6 py-3 rounded w-full hover:bg-teal transition-colors">
                  {submitting ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
