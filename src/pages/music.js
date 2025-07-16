import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicCard from '@/components/MusicCard';

// This page receives the shared audio player state and music data as props from _app.js
export default function MusicPage({ musicPacks, currentlyPlayingAudioUrl, currentTrackProgress, currentTrackDuration, handlePreview, handleSeek }) {
  return (
    <>
      <Head>
        <title>High-Quality DJ Music & Crates | TOP DJ CRATES</title>
        <meta 
          name="description" 
          content="Save on high-quality DJ music. Browse the best DJ crates for Afro House, Funky House, Arabic Remixes, and more. The answer to where DJs get their music is here." 
        />
        <meta 
          name="keywords" 
          content="dj music, dj crates, afro house dj, funky house music, arabic remixes, dj packs, high-quality wav, music for female djs" 
        />
        <meta property="og:title" content="High-Quality DJ Music & Crates | TOP DJ CRATES" />
        <meta property="og:description" content="Browse exclusive, handpicked DJ crates ready for your set. High-quality WAV files for professional and female DJs." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main className="pt-24">
          <section id="music" className="container mx-auto py-16 px-4 md:px-8 bg-gray-900 rounded-xl shadow-inner-xl my-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-400 mb-4 relative">
              The Best DJ Crates Online
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto">
              High-quality, curated music for professional DJs. Stop searching and start playing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {musicPacks.map(pack => (
                <MusicCard 
                  key={pack.id} 
                  pack={pack} 
                  onPreview={handlePreview} 
                  currentPlayingAudioUrl={currentlyPlayingAudioUrl} 
                  currentTrackProgress={currentTrackProgress} 
                  currentTrackDuration={currentTrackDuration} 
                  onSeek={handleSeek} 
                />
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
