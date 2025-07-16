import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main className="pt-24">
          <section id="contact" className="container mx-auto py-16 px-4 md:px-8 text-center bg-gray-900 rounded-xl shadow-inner-xl my-12">
            <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-10">General Contact</h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">For questions not related to custom mixes, use the form below.</p>
            <form onSubmit={handleContactFormSubmit} className="max-w-xl mx-auto space-y-6">
              <input type="text" name="name" placeholder="Your Name" value={contactFormState.name} onChange={handleContactFormChange} required className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
              <input type="email" name="email" placeholder="Your Email" value={contactFormState.email} onChange={handleContactFormChange} required className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
              <textarea name="message" placeholder="Your Message" rows="5" value={contactFormState.message} onChange={handleContactFormChange} required className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-y"></textarea>
              <button type="submit" disabled={formSubmissionStatus === 'submitting'} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400 disabled:opacity-50">
                {formSubmissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formSubmissionStatus === 'success' && <p className="text-emerald-400 mt-4">Thank you! Your message has been sent.</p>}
              {formSubmissionStatus === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
