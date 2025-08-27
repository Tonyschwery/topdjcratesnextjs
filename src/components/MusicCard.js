import React from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

const MusicCard = ({ pack, onPreview, currentPlayingAudioUrl, currentTrackProgress, currentTrackDuration, onSeek }) => {
  const isPlaying = (audioUrl) => currentPlayingAudioUrl === audioUrl;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentage = (clickPosition / progressBar.offsetWidth) * 100;
    onSeek(percentage);
  };

  // --- NEW FUNCTION TO HANDLE THE PIXEL EVENT ---
  const handleGetCrateClick = () => {
    // Check if the Facebook Pixel function 'fbq' is available
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: pack.title,
        content_ids: [pack.id],
        content_type: 'product',
        value: 20.00, // The discounted price
        currency: 'USD'
      });
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full animate-fade-in-up">
      <div className="relative">
        <img src={pack.cover} alt={pack.title} className="w-full h-auto object-cover" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-primary mb-2 truncate">{pack.title}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-grow">{pack.description}</p>
        
        {/* Audio Previews Section */}
        <div className="mt-auto space-y-3 pt-4">
          <h4 className="font-bold text-lg text-primary border-b border-zinc-700 pb-2 mb-3">Track Previews</h4>
          <div className="space-y-3">
            {pack.tracks.map((track) => (
              <div key={track.id}>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onPreview(track.audioPreview)}
                    className="bg-accent text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-accent"
                    aria-label={isPlaying(track.audioPreview) ? `Pause ${track.title}` : `Play ${track.title}`}
                  >
                    {isPlaying(track.audioPreview) ? (
                      <PauseIcon className="h-5 w-5" />
                    ) : (
                      <PlayIcon className="h-5 w-5" />
                    )}
                  </button>
                  <div className="text-sm text-gray-400 truncate">
                    <span className="font-medium text-text">{track.title}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                {isPlaying(track.audioPreview) && (
                  <div className="w-full flex items-center gap-2 mt-2 pl-12">
                    <div
                      className="bg-zinc-700 rounded-full h-1.5 w-full cursor-pointer"
                      onClick={handleProgressBarClick}
                    >
                      <div
                        className="bg-accent h-1.5 rounded-full"
                        style={{ width: `${currentTrackProgress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">
                      {formatTime(currentTrackDuration)}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- ACTION BUTTONS & PRICING --- */}
        <div className="flex items-center justify-between gap-4 mt-6">
          {/* Pricing Display */}
          <div className="flex items-baseline gap-2">
            <span className="text-md text-gray-500 line-through">
              $25.00
            </span>
            <span className="text-xl font-bold text-gold">
              $20.00
            </span>
          </div>

          {/* "Get Crate" Button with onClick event */}
          <a
            href={pack.gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGetCrateClick} // <-- THIS IS THE NEW CODE
            className="bg-primary text-background font-bold py-2 px-4 rounded-md text-center hover:opacity-90 transition-opacity duration-200"
          >
            Get Crate
          </a>
        </div>
        
        {/* Demo Link (if it exists) */}
        {pack.demoLink && (
          <a
            href={pack.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3 bg-zinc-800 text-text font-bold py-2 px-4 rounded-md text-center hover:bg-zinc-700 transition-colors duration-200"
          >
            Free Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default MusicCard;