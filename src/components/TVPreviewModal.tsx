import React, { useState } from 'react';

interface TVPreviewModalProps {
  onClose: () => void;
}

export const TVPreviewModal: React.FC<TVPreviewModalProps> = ({ onClose }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrack, setActiveTrack] = useState('Deep Ambient Wave');

  const tracks = [
    { title: 'Deep Ambient Wave', artist: 'Binaural Architecture', duration: '04:12', genre: 'Low-Frequency' },
    { title: 'Synth Glaze Flow', artist: 'Modulation Labs', duration: '03:48', genre: 'Chillwave' },
    { title: 'Midnight Starlight', artist: 'Nordic Horizon', duration: '05:30', genre: 'Downtempo' },
    { title: 'Tokyo Neons', artist: 'Shibuya Soundscape', duration: '03:15', genre: 'Lo-Fi Jazz' }
  ];

  const handleDpad = (direction: 'up' | 'down' | 'left' | 'right' | 'select') => {
    if (direction === 'up') {
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    } else if (direction === 'down') {
      setFocusedIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    } else if (direction === 'select') {
      setActiveTrack(tracks[focusedIndex].title);
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c1322] border border-[#424754]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#dce2f8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#2f3aa3]/30 text-[#bdc2ff] border border-[#2f3aa3]">
              ANDROID TV &middot; 10-FOOT SIMULATOR
            </span>
            <span className="font-mono text-xs text-[#8c909f] hidden sm:inline">
              Kotlin / Jetpack Compose / Media3
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center text-[#c2c6d6]"
          >
            &times;
          </button>
        </div>

        {/* TV OLED Simulation Screen */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-[#232a3a] bg-[#070e1d] shadow-2xl mb-6 p-6 aspect-video flex flex-col justify-between">
          {/* Ambient Living Room Backlight effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#191f2f]/80 via-[#070e1d] to-[#151b2b]/90 pointer-events-none" />

          {/* Top Bar of TV App */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#bdc2ff] text-[#131e8c] flex items-center justify-center font-bold text-xs">
                M
              </div>
              <span className="font-semibold text-base tracking-tight text-[#dce2f8]">MusicFlow TV</span>
            </div>
            <div className="font-mono text-xs text-[#8c909f] flex items-center gap-3">
              <span>Living Room OLED</span>
              <span className="text-[#2fd9f4]">&bull; 4K 60FPS</span>
            </div>
          </div>

          {/* Center Playback Card */}
          <div className="relative z-10 flex items-center gap-6 my-auto">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#4d8eff]/30 to-[#2fd9f4]/20 border border-[#424754]/50 flex items-center justify-center shadow-2xl overflow-hidden group">
              <span className="text-4xl animate-pulse">&#9835;</span>
            </div>
            <div className="flex-1">
              <span className="font-mono text-[11px] text-[#2fd9f4] uppercase tracking-wider block mb-1">
                {isPlaying ? 'Now Playing' : 'Paused'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#dce2f8] mb-1">
                {activeTrack}
              </h3>
              <p className="text-xs sm:text-sm text-[#8c909f] mb-3">
                Android Media3 &middot; ExoPlayer Engine &middot; Spatial Lossless
              </p>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[#191f2f] rounded-full overflow-hidden mb-1">
                <div className="h-full bg-gradient-to-r from-[#adc6ff] to-[#2fd9f4] w-2/3 rounded-full" />
              </div>
              <div className="flex justify-between font-mono text-[10px] text-[#8c909f]">
                <span>02:45</span>
                <span>04:12</span>
              </div>
            </div>
          </div>

          {/* D-Pad Target List items */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {tracks.map((t, i) => {
              const isFocused = focusedIndex === i;
              const isCurrent = activeTrack === t.title;
              return (
                <div
                  key={i}
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    isFocused
                      ? 'bg-[#2f3aa3]/50 border-[#adc6ff] scale-105 shadow-lg shadow-[#4d8eff]/20 ring-2 ring-[#adc6ff]/50'
                      : 'bg-[#151b2b]/60 border-[#424754]/30'
                  }`}
                >
                  <div className="font-mono text-[10px] text-[#8c909f] flex justify-between">
                    <span>{t.duration}</span>
                    {isCurrent && <span className="text-[#2fd9f4]">&bull; PLAYING</span>}
                  </div>
                  <div className="font-semibold text-xs text-[#dce2f8] truncate mt-1">{t.title}</div>
                  <div className="text-[10px] text-[#8c909f] truncate">{t.artist}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Virtual D-Pad Remote Controller */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#151b2b] p-4 rounded-2xl border border-[#424754]/30">
          <div>
            <h4 className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider font-semibold">
              Tactile D-Pad Remote Navigation
            </h4>
            <p className="text-xs text-[#8c909f]">
              Use virtual controls to experience 10-foot TV directional browsing &amp; focus states.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDpad('up')}
              className="w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center font-bold text-lg"
              title="Navigate Up/Previous"
            >
              &uarr;
            </button>
            <button
              onClick={() => handleDpad('select')}
              className="px-4 h-10 rounded-xl bg-[#4d8eff] hover:bg-[#3b82f6] text-white font-mono text-xs font-bold"
              title="Select / Play Track"
            >
              OK / SELECT
            </button>
            <button
              onClick={() => handleDpad('down')}
              className="w-10 h-10 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center font-bold text-lg"
              title="Navigate Down/Next"
            >
              &darr;
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 h-10 rounded-xl bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-xs font-mono text-[#2fd9f4]"
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
