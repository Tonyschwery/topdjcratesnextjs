import React, { useRef, useCallback } from 'react';

// Helper function to format time from seconds to MM:SS
const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const MusicCard = ({ pack, onPreview, currentPlayingAudioUrl, currentTrackProgress, currentTrackDuration, onSeek }) => {
  const isPlayingThisTrackInPack = (trackAudioUrl) => currentPlayingAudioUrl === trackAudioUrl;
  const progressBarRef = useRef(null);

  const handleProgressBarClick = useCallback((event) => {
    if (progressBarRef.current && currentTrackDuration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const width = rect.width;
      const seekPercentage = (clickX / width) * 100;
      onSeek(seekPercentage);
    }
  }, [currentTrackDuration, onSeek]);
  
  const handleBuyClick = () => {
    window.open(pack.gumroadLink, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = () => {
      if(pack.demoLink) {
          window.open(pack.demoLink, '_blank', 'noopener,noreferrer');
      }
  };

  return (
    <div className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700 hover:border-emerald-500 flex flex-col">
      <img src={pack.cover} alt={`${pack.title} Album Cover`} className="w-full aspect-square object-cover rounded-t-xl transition-all duration-300 group-hover:opacity-80" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/4b5563/ffffff?text=Image+Unavailable'; }} />
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{pack.title}</h4>
        <p className="text-emerald-400 text-sm sm:text-md mb-1">{pack.artist}</p>
        <p className="text-gray-400 text-xs sm:text-sm mb-4">
          {(() => {
              const description = pack.description;
              const regex = /((?:Over\s*)?\d+\+)/;
              const parts = description.split(regex);
              if (parts.length > 2) {
                  return (<>{parts[0]}<strong className="font-bold text-gray-200">{parts[1]}</strong>{parts[2]}</>);
              }
              return description;
          })()}
        </p>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <h5 className="text-lg font-semibold text-gray-200 mb-3">Track Previews:</h5>
          <ul className="space-y-2">
            {pack.tracks.map(track => {
              const isTrackCurrentlyPlaying = isPlayingThisTrackInPack(track.audioPreview);
              return (
                <li key={track.id} className="flex flex-col items-start bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-gray-300 text-sm truncate mr-2">{track.title}</span>
                    <button onClick={() => onPreview(track.audioPreview)} className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white transition-colors duration-200 ${isTrackCurrentlyPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`} aria-label={isTrackCurrentlyPlaying ? "Pause audio" : "Play audio"}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">{isTrackCurrentlyPlaying ? (<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />) : (<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.034A1 1 0 008 8v4a1 1 0 001.555.966l3-2a1 1 0 000-1.932l-3-2z" clipRule="evenodd" />)}</svg>
                    </button>
                  </div>
                  {isTrackCurrentlyPlaying && currentTrackDuration > 0 && (
                    <div className="w-full mt-1">
                      <div ref={progressBarRef} className="relative h-4 bg-gray-600 rounded-full cursor-pointer flex items-center overflow-hidden" onClick={handleProgressBarClick} style={{ background: 'linear-gradient(to right, #4B5563 0%, #4B5563 100%), repeating-linear-gradient(90deg, #374151 0px, #374151 2px, transparent 2px, transparent 4px, #374151 4px, #374151 6px)', backgroundSize: '100% 100%, 10% 100%', backgroundPosition: '0% 0%' }}>
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full z-10" style={{ width: `${currentTrackProgress}%` }}></div>
                        <div className="absolute w-4 h-4 bg-white rounded-full shadow-lg border-2 border-emerald-500 transform -translate-x-1/2 z-20" style={{ left: `${currentTrackProgress}%` }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>{formatTime((currentTrackProgress / 100) * currentTrackDuration)}</span>
                        <span>{formatTime(currentTrackDuration)}</span>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-auto pt-6 space-y-3">
          <button onClick={handleBuyClick} className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-75">Buy Pack</button>
          {pack.demoLink && (
             <button onClick={handleDemoClick} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75">Get Free Demo</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
