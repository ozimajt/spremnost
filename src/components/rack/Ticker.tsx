'use client';

export default function Ticker() {
  const text =
    '\u25B8\u25B8\u25B8 SPREMNOST CONTROL NET \u00B7 v0.1.0 \u00B7 \u0408\u0415\u0414\u0418\u041D\u0421\u0422\u0412\u041E \u2014 \u041E\u0422\u041F\u041E\u0420\u041D\u041E\u0421\u0422 \u2014 \u0417\u041D\u0410\u040A\u0415 \u00B7 Jednota \u2014 Odolnos\u0165 \u2014 Vedomosti \u00B7 4 \u010CLANOV \u010CAK\u00C1 NA AKTIV\u00C1CIU \u25B8\u25B8\u25B8';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: 28,
        background: '#0c1008',
        borderTop: '1px solid #333',
        borderBottom: '1px solid #0a0a08',
        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8)',
      }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)',
          zIndex: 2,
        }}
      />

      {/* Scrolling text */}
      <div
        className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap"
        style={{
          animation: 'tickerScroll 30s linear infinite',
          fontFamily: "'VT323', 'Share Tech Mono', monospace",
          fontSize: 16,
          color: '#88cc44',
          textShadow: '0 0 6px rgba(136,204,68,0.6), 0 0 12px rgba(136,204,68,0.2)',
          letterSpacing: 2,
          paddingLeft: '100%',
          zIndex: 1,
        }}
      >
        {text}
        <span style={{ display: 'inline-block', width: 120 }} />
        {text}
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
