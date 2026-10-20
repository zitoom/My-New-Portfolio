import React, { useState, useEffect } from 'react';

interface NidraBreathworkModalProps {
  onClose: () => void;
}

export const NidraBreathworkModal: React.FC<NidraBreathworkModalProps> = ({ onClose }) => {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cycleCount, setCycleCount] = useState(1);
  const [technique, setTechnique] = useState<'box' | '478'>('box');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1;

        // Transition phase
        if (technique === 'box') {
          // Box: Inhale (4s) -> Hold (4s) -> Exhale (4s) -> Rest (4s)
          if (phase === 'Inhale') {
            setPhase('Hold');
            return 4;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            return 4;
          } else if (phase === 'Exhale') {
            setPhase('Rest');
            return 4;
          } else {
            setPhase('Inhale');
            setCycleCount((c) => c + 1);
            return 4;
          }
        } else {
          // 4-7-8
          if (phase === 'Inhale') {
            setPhase('Hold');
            return 7;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            return 8;
          } else {
            setPhase('Inhale');
            setCycleCount((c) => c + 1);
            return 4;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, technique]);

  const isExpanding = phase === 'Inhale';
  const isContracting = phase === 'Exhale';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0c1322] border border-[#424754]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#dce2f8] overflow-hidden flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-radial from-[#2f3aa3]/20 via-transparent to-transparent pointer-events-none" />

        {/* Header */}
        <div className="w-full flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#2f3aa3]/30 text-[#bdc2ff] border border-[#2f3aa3]">
              NIDRA BREATHWORK &middot; CADENCE ENGINE
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 flex items-center justify-center text-[#c2c6d6]"
          >
            &times;
          </button>
        </div>

        {/* Technique Selector */}
        <div className="flex items-center gap-2 p-1 bg-[#151b2b] rounded-xl border border-[#424754]/30 mb-8 relative z-10">
          <button
            onClick={() => {
              setTechnique('box');
              setPhase('Inhale');
              setSecondsLeft(4);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              technique === 'box' ? 'bg-[#4d8eff] text-white' : 'text-[#8c909f] hover:text-[#dce2f8]'
            }`}
          >
            Box Breathing (4-4-4-4)
          </button>
          <button
            onClick={() => {
              setTechnique('478');
              setPhase('Inhale');
              setSecondsLeft(4);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              technique === '478' ? 'bg-[#4d8eff] text-white' : 'text-[#8c909f] hover:text-[#dce2f8]'
            }`}
          >
            Relaxation (4-7-8)
          </button>
        </div>

        {/* Breathing Animation Rings */}
        <div className="relative w-64 h-64 my-4 flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#bdc2ff]/20 via-[#4d8eff]/15 to-[#2fd9f4]/20 blur-xl transition-all duration-1000 ease-in-out"
            style={{
              transform: isExpanding ? 'scale(1.15)' : isContracting ? 'scale(0.85)' : 'scale(1)',
              opacity: isExpanding || phase === 'Hold' ? 0.8 : 0.4
            }}
          />

          {/* Middle Ring */}
          <div
            className="absolute inset-4 rounded-full border border-[#2fd9f4]/40 transition-all duration-1000 ease-in-out"
            style={{
              transform: isExpanding ? 'scale(1.08)' : isContracting ? 'scale(0.92)' : 'scale(1)',
              boxShadow: '0 0 40px rgba(47, 217, 244, 0.2)'
            }}
          />

          {/* Center Cadence Disk */}
          <div
            className="w-40 h-40 rounded-full bg-gradient-to-br from-[#191f2f] to-[#2f3aa3]/50 border-2 border-[#adc6ff]/60 flex flex-col items-center justify-center shadow-2xl transition-all duration-1000 ease-in-out relative z-10"
            style={{
              transform: isExpanding ? 'scale(1.1)' : isContracting ? 'scale(0.9)' : 'scale(1)'
            }}
          >
            <span className="font-mono text-2xl font-bold text-[#dce2f8] mb-0.5">
              {secondsLeft}s
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#2fd9f4]">
              {phase}
            </span>
          </div>
        </div>

        {/* Subtitle instructions */}
        <p className="text-sm text-[#8c909f] max-w-sm mb-6 mt-4 relative z-10 leading-relaxed">
          {phase === 'Inhale' && 'Slowly breathe in through your nose, expanding your diaphragm.'}
          {phase === 'Hold' && 'Hold gently at the top. Let your shoulders stay relaxed.'}
          {phase === 'Exhale' && 'Release smoothly through your mouth, letting tension dissolve.'}
          {phase === 'Rest' && 'Pause calmly before the next natural breath begins.'}
        </p>

        {/* Cycle indicator */}
        <div className="font-mono text-xs text-[#adc6ff] flex items-center gap-4 relative z-10">
          <span>CYCLE: #{cycleCount}</span>
          <span>AUTONOMIC CADENCE: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
