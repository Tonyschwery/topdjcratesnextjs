import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP DJ CRATES - High-Quality Music Packs & Tools</title>
        <meta
          name="description"
          content="The ultimate source for pro DJs. Stop searching and start playing with exclusive, high-quality music crates for Afro-House, Funky House, Amapiano, R&B, and more. Curated to save you time and money."
        />
        <meta
          name="keywords"
          content="dj crates, music for djs, dj music, dj packs, dj tools, music library, afro house, funky house, amapiano, r&b, hip hop, disco house, wav files, rekordbox, serato, traktor"
        />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="TOP DJ CRATES - High-Quality Music Packs & Tools" />
        <meta property="og:description" content="The ultimate source for professional DJs. Stop searching and start playing with exclusive, high-quality music crates for Afro-House, Funky House, Amapiano, R&B, and more. Curated to save you time and money." />
        <meta property="og:url" content="https://www.topdjcrates.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/wSLtGSN.jpeg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TOP DJ CRATES - High-Quality Music Packs & Tools" />
        <meta name="twitter:description" content="The ultimate source for professional DJs. Stop searching and start playing with exclusive, high-quality music crates for Afro-House, Funky House, Amapiano, R&B, and more. Curated to save you time and money." />
        <meta name="twitter:image" content="https://i.imgur.com/wSLtGSN.jpeg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main>
          <section id="home" className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url("https://i.imgur.com/wSLtGSN.jpeg")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-purple-950 opacity-60"></div>
            <div className="z-10 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl animate-fade-in-up">
                Stop Searching ! Start Playing !
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg animate-fade-in-up delay-200">
                Stop spending hours digging for tracks. We provide the best DJ crates with high-quality, exclusive tracks that save you time and money.
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