import React, { useState } from 'react';
import Head from 'next/head';

// Simplified Contact Page Component
export default function ContactPage() {
  const [contactFormState, setContactFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmissionStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xdkzwaaq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormState)
      });
      if (response.ok) {
        setFormSubmissionStatus('success');
        setContactFormState({ name: '', email: '', message: '' });
      } else { throw new Error('Form submission failed'); }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setFormSubmissionStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - TOP DJ CRATES</title>
        <meta name="description" content="Get in touch with TOP DJ CRATES for general questions and inquiries." />
      </Head>

      {/* Page-specific content */}
      <div className="px-4 py-16">
        <section id="contact" className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            General Contact
          </h1>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto mb-8">
            For questions not related to custom mixes, use the form below.
          </p>
          
          <form onSubmit={handleContactFormSubmit} className="max-w-xl mx-auto space-y-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={contactFormState.name} 
              onChange={handleContactFormChange} 
              required 
              className="w-full p-4 rounded-lg bg-zinc-900 text-text placeholder-gray-500 border border-zinc-700 focus:border-accent focus:ring-1 focus:ring-accent" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={contactFormState.email} 
              onChange={handleContactFormChange} 
              required 
              className="w-full p-4 rounded-lg bg-zinc-900 text-text placeholder-gray-500 border border-zinc-700 focus:border-accent focus:ring-1 focus:ring-accent" 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              value={contactFormState.message} 
              onChange={handleContactFormChange} 
              required 
              className="w-full p-4 rounded-lg bg-zinc-900 text-text placeholder-gray-500 border border-zinc-700 focus:border-accent focus:ring-1 focus:ring-accent resize-y"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={formSubmissionStatus === 'submitting'} 
              className="bg-accent hover:opacity-80 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {formSubmissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {formSubmissionStatus === 'success' && <p className="text-green-400 font-semibold mt-4">Thank you! Your message has been sent.</p>}
            {formSubmissionStatus === 'error' && <p className="text-red-400 font-semibold mt-4">Something went wrong. Please try again.</p>}
          </form>
        </section>
      </div>
    </>
  );
}