import React, { useState, useEffect } from 'react';

export const TTSPlayground: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en-US');
  const [speechText, setSpeechText] = useState(
    'Real-time edge speech synthesis engine with low latency streaming buffers and natural inflection.'
  );
  const [speechRate, setSpeechRate] = useState(1.0);
  const [speechPitch, setSpeechPitch] = useState(1.0);
  const [latency] = useState('18ms');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const languages = [
    { code: 'en-US', label: 'EN-US (Neural)' },
    { code: 'es-ES', label: 'ES-MX (Neural)' },
    { code: 'ja-JP', label: 'JA-JP (Bilingual)' },
    { code: 'fr-FR', label: 'FR-FR (Studio)' }
  ];

  const handleSpeak = () => {
    if (!isSupported) {
      // Simulated playback state
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2400);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = selectedLang;
      utterance.rate = speechRate;
      utterance.pitch = speechPitch;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <article className="bg-[#151b2b] border border-[#424754]/35 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2fd9f4]" />
            <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
              AUDIO NEURAL SYNTHESIS
            </span>
          </div>
          <span className="font-mono text-xs text-[#8c909f]">TTS ENGINE v0.9.8</span>
        </div>

        <h3 className="text-2xl font-bold text-[#dce2f8] mb-2">
          Neural Text-to-Speech Engine
        </h3>
        <p className="text-sm text-[#8c909f] mb-6 leading-relaxed">
          Ultra-low latency multilingual speech synthesis running across edge token buffers with streaming chunk playback.
        </p>

        {/* Interactive Synthesizer Console */}
        <div className="bg-[#070e1d] p-4 sm:p-5 rounded-2xl border border-[#424754]/30 mb-6 space-y-4">
          {/* Animated Waveform Visualizer */}
          <div className="flex items-center justify-between h-14 px-4 bg-[#191f2f] rounded-xl gap-1.5 overflow-hidden">
            {[4, 8, 12, 6, 10, 3, 9, 14, 7, 11, 5, 10, 8, 4, 9, 13, 6, 11, 4].map((h, i) => {
              const activeHeight = isPlaying ? Math.min(14, (h * 1.3) % 14 + 3) : Math.max(3, h * 0.5);
              return (
                <span
                  key={i}
                  style={{ height: `${activeHeight * 3.5}px` }}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    isPlaying
                      ? i % 2 === 0
                        ? 'bg-[#2fd9f4] animate-pulse'
                        : 'bg-[#4d8eff]'
                      : 'bg-[#424754]'
                  }`}
                />
              );
            })}
          </div>

          {/* Telemetry info */}
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <span className="text-[#dce2f8]">
              SYNTHESIS: <span className="text-[#2fd9f4]">{isPlaying ? 'Active Streaming Chunk #04' : 'Ready / Idle'}</span>
            </span>
            <span className="text-[#8c909f]">
              CHUNK LATENCY: <span className="text-[#4d8eff] font-semibold">{latency}</span>
            </span>
          </div>

          {/* Input text */}
          <div className="space-y-1">
            <label htmlFor="tts-input" className="block font-mono text-[11px] text-[#8c909f] uppercase tracking-wider">
              Speech Prompt
            </label>
            <input
              id="tts-input"
              type="text"
              value={speechText}
              onChange={(e) => setSpeechText(e.target.value)}
              className="w-full bg-[#151b2b] border border-[#424754]/40 rounded-lg px-3 py-2 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
              placeholder="Enter text to synthesize..."
            />
          </div>

          {/* Language Selection Chips */}
          <div className="space-y-1.5 pt-2 border-t border-[#424754]/20">
            <span className="font-mono text-[11px] text-[#8c909f] uppercase tracking-wider block">
              Language Token Models
            </span>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setSelectedLang(lang.code)}
                  className={`font-mono text-xs px-2.5 py-1 rounded-md transition-colors ${
                    selectedLang === lang.code
                      ? 'bg-[#2fd9f4]/20 text-[#2fd9f4] border border-[#2fd9f4]/50'
                      : 'bg-[#191f2f] text-[#8c909f] hover:text-[#dce2f8] border border-[#424754]/30'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rate & Pitch Controls */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#424754]/20">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-[#8c909f] mb-1">
                <span>SPEED: {speechRate}x</span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.5"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#191f2f] rounded-lg appearance-none cursor-pointer accent-[#2fd9f4]"
              />
            </div>
            <div>
              <div className="flex justify-between text-[11px] font-mono text-[#8c909f] mb-1">
                <span>PITCH: {speechPitch}x</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.2"
                step="0.1"
                value={speechPitch}
                onChange={(e) => setSpeechPitch(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#191f2f] rounded-lg appearance-none cursor-pointer accent-[#4d8eff]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action controls */}
      <div className="flex items-center gap-3">
        {isPlaying ? (
          <button
            type="button"
            onClick={handleStop}
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#191f2f] hover:bg-[#232a3a] text-[#adc6ff] border border-[#adc6ff]/40 text-xs font-medium tracking-wide uppercase transition-colors"
          >
            <span className="w-2 h-2 rounded-sm bg-[#adc6ff]" />
            <span>Stop Playback</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSpeak}
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#4d8eff] text-white hover:bg-[#3b82f6] text-xs font-medium tracking-wide uppercase transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Play Synthesized Audio</span>
          </button>
        )}
        <span className="text-[11px] font-mono text-[#8c909f]">
          {isSupported ? 'WebSpeech Engine Active' : 'Audio Preview Mode'}
        </span>
      </div>
    </article>
  );
};
