import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best DJ Crates for Pro & Female DJs | TOP DJ CRATES</title>
        <meta 
          name="description" 
          content="Where do DJs get their music? From the best DJ crates online. Save on high-quality DJ music, handpicked for professional and female DJs. Stop searching, start playing." 
        />
        <meta 
          name="keywords" 
          content="female djs, best dj crates, save on dj music, best music for djs, where do djs get their music, high quality dj music, dj packs, music for djs, afro house, funky house, arabic mashups" 
        />
        {/* Open Graph tags for social sharing will inherit from _app.js, but we can override them for specific pages if needed */}
        <meta property="og:title" content="Best DJ Crates for Pro & Female DJs | TOP DJ CRATES" />
        <meta property="og:description" content="The ultimate source for high-quality, exclusive DJ music packs. Curated for professional and female DJs to save time and elevate sets." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main>
          <section id="home" className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url("https://i.imgur.com/wSLtGSN.jpeg")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-purple-950 opacity-60"></div>
            <div className="z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl animate-fade-in-up">
                The Best Music For Pro & Female DJs
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg animate-fade-in-up delay-200">
                Stop wondering where DJs get their music. We provide the best DJ crates with high-quality, exclusive tracks that save you time and money.
              </p>
              <Link href="/music" legacyBehavior>
                <a className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-75">
                  Explore The Crates
                </a>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
