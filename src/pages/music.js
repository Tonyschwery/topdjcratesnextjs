import React from 'react';
import Head from 'next/head';
import MusicCard from '@/components/MusicCard';

// Simplified Music Page Component
export default function MusicPage({ musicPacks, currentlyPlayingAudioUrl, currentTrackProgress, currentTrackDuration, handlePreview, handleSeek }) {
  return (
    <>
      <Head>
        <title>High-Quality DJ Music & Crates | TOP DJ CRATES</title>
        <meta 
          name="description" 
          content="Save on high-quality DJ music. Browse the best DJ crates for Afro House, Funky House, Arabic Remixes, and more." 
        />
      </Head>
      
      {/* Page-specific content */}
      <div className="px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            The Best DJ Crates Online
          </h1>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto">
            High-quality, curated music for professional DJs. Stop searching and start playing.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {musicPacks && musicPacks.map(pack => (
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
      </div>
    </>
  );
}