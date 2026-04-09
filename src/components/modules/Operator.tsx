'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ── tiny sub-components ── */

function ChromeScrew({ className }: { className?: string }) {
  return (
    <div
      className={`absolute z-10 ${className}`}
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #e8e8e8, #888 50%, #555 100%)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.6)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          right: '25%',
          height: 1.5,
          background: '#444',
          transform: 'translateY(-50%) rotate(35deg)',
          borderRadius: 1,
        }}
      />
    </div>
  );
}

function LedReadout({ label, labelCyrillic, value }: { label: string; labelCyrillic: string; value: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <div
        style={{
          background: '#0c0c0c',
          borderRadius: 2,
          padding: '2px 8px',
          border: '1px solid #333',
          boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.8)',
          minWidth: 130,
        }}
      >
        <div
          style={{
            fontFamily: "'DSEG7 Classic', 'VT323', monospace",
            fontSize: 22,
            color: '#ff3333',
            textShadow: '0 0 8px #ff3333, 0 0 20px rgba(255,50,50,0.3)',
            letterSpacing: 2,
            lineHeight: 1.2,
          }}
        >
          {value}
        </div>
      </div>
      <div
        className="flex items-center gap-1"
        style={{
          fontSize: 8,
          fontFamily: "'IBM Plex Mono', monospace",
          color: '#ddd',
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: 'uppercase',
          lineHeight: 1.1,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            background: '#ff3333',
            borderRadius: '50%',
            boxShadow: '0 0 4px #ff3333',
            flexShrink: 0,
          }}
        />
        <div>
          <div>{label}</div>
          <div style={{ color: '#aaa', fontSize: 7 }}>{labelCyrillic}</div>
        </div>
      </div>
    </div>
  );
}

function RotaryKnob({ size = 56, initialAngle = 0 }: { size?: number; initialAngle?: number }) {
  const [angle, setAngle] = useState(initialAngle);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 38% 32%, #e0ddd8 0%, #b0aca5 25%, #888580 50%, #5a5856 80%, #3a3836 100%)`,
        boxShadow: `
          0 2px 8px rgba(0,0,0,0.6),
          0 0 0 2px #333,
          inset 0 1px 3px rgba(255,255,255,0.3)
        `,
        cursor: 'grab',
        position: 'relative',
      }}
      animate={{ rotate: angle }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setAngle((a) => a + 30)}
    >
      {/* pointer line */}
      <div
        style={{
          position: 'absolute',
          top: 4,
          left: '50%',
          width: 2,
          height: size / 2 - 6,
          background: '#eee',
          transform: 'translateX(-50%)',
          borderRadius: 1,
          boxShadow: '0 0 2px rgba(255,255,255,0.5)',
        }}
      />
      {/* center cap */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: size * 0.3,
          height: size * 0.3,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, #999, #555)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}

function MemberColumn({
  name,
  initials,
  role,
  isOverlord = false,
}: {
  name: string;
  initials: string;
  role: string;
  isOverlord?: boolean;
}) {
  return (
    <div className="flex flex-col items-center" style={{ width: 120, gap: 4 }}>
      {/* Name */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>

      {/* Status */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 6.5,
          color: '#aab4be',
          textAlign: 'center',
          letterSpacing: 0.5,
          lineHeight: 1.2,
        }}
      >
        CAKA NA AKTIVACIU
        <br />
        CEKA CLANA
      </div>

      {/* Avatar badge */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'var(--navy, #202867)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13,
          fontWeight: 700,
          color: '#c0c8d8',
          border: '2px solid #3a4480',
          boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
          marginTop: 2,
        }}
      >
        {initials}
      </div>

      {/* Rotary knob */}
      <div style={{ marginTop: 4 }}>
        <RotaryKnob size={48} initialAngle={Math.random() * 120 - 60} />
      </div>

      {/* Role label */}
      <div
        style={{
          marginTop: 4,
          padding: '2px 10px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: isOverlord ? '#fff' : '#8899aa',
          background: isOverlord ? '#b22222' : 'transparent',
          border: isOverlord ? 'none' : '1px solid #556677',
          borderRadius: 2,
        }}
      >
        {role}
      </div>
    </div>
  );
}

/* ── Main component ── */

export default function Operator() {
  return (
    <div
      className="relative w-full"
      style={{
        background: `
          linear-gradient(180deg, #6b7b8b 0%, #5a6a7a 15%, #4e5e6e 85%, #3d4d5d 100%)
        `,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.015) 2px,
            rgba(255,255,255,0.015) 3px
          ),
          linear-gradient(180deg, #6b7b8b 0%, #5a6a7a 15%, #4e5e6e 85%, #3d4d5d 100%)
        `,
        padding: '18px 24px',
        borderTop: '1px solid #8090a0',
        borderBottom: '2px solid #2a3a4a',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.5)',
        minHeight: 200,
      }}
    >
      {/* Chrome screws */}
      <ChromeScrew className="top-3 left-3" />
      <ChromeScrew className="top-3 right-3" />
      <ChromeScrew className="bottom-3 left-3" />
      <ChromeScrew className="bottom-3 right-3" />

      {/* Model date top-left */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 32,
          fontFamily: "'Georgia', serif",
          fontStyle: 'italic',
          fontSize: 11,
          color: '#bcc8d4',
          opacity: 0.7,
        }}
      >
        1·2·1983
      </div>

      {/* Title area */}
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 32,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: 4,
            lineHeight: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          ОПЕРАТОР
        </div>
        <div
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 9,
            color: '#a0b0c0',
            letterSpacing: 3,
            marginTop: 2,
          }}
        >
          OPERATOR · OPERATOR · OPERATER
        </div>
      </div>

      {/* Content: left readouts + right members */}
      <div className="flex gap-4" style={{ marginTop: 4 }}>
        {/* Left section - LED readouts */}
        <div className="flex flex-col" style={{ minWidth: 200, gap: 2 }}>
          <LedReadout label="KOD" labelCyrillic="КОД" value="888888" />
          <LedReadout label="ROLA" labelCyrillic="УЛОГА" value="888888" />
          <LedReadout label="STAV" labelCyrillic="СТАЊЕ" value="888886" />

          {/* KOD readout below */}
          <div className="flex items-center gap-2 mt-2">
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 8,
                color: '#ccc',
                letterSpacing: 1,
                fontWeight: 600,
              }}
            >
              KOD
              <br />
              <span style={{ color: '#999', fontSize: 7 }}>КОД</span>
            </div>
          </div>

          {/* UPLINK section */}
          <div className="flex items-center gap-3 mt-2">
            <div>
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 8,
                  color: '#a0b0c0',
                  letterSpacing: 2,
                }}
              >
                UPLINK
              </div>
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 7,
                  color: '#778899',
                  letterSpacing: 1,
                }}
              >
                IP:3A
              </div>
            </div>
            <RotaryKnob size={40} />
          </div>
        </div>

        {/* Right section - Member columns */}
        <div className="flex gap-1 flex-1 justify-end">
          <MemberColumn name="JOZEF MICHALEK" initials="JM" role="OVERLORD" isOverlord />
          <MemberColumn name="JANKO DRAGOVIC" initials="JD" role="OPERATER" />
          <MemberColumn name="MARKO MIJATOVIC" initials="MM" role="OPERATER" />
          <MemberColumn name="IGOR KADIC" initials="IK" role="OPERATER" />
        </div>
      </div>
    </div>
  );
}
