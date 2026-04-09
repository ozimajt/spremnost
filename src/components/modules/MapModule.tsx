'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ── Sub-components ── */

function MapRotaryKnob({ size = 52, label, labelCyrillic }: { size?: number; label: string; labelCyrillic: string }) {
  const [angle, setAngle] = useState(0);
  return (
    <div className="flex flex-col items-center" style={{ gap: 4 }}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: `radial-gradient(circle at 38% 32%, #d8d4c8 0%, #a09888 30%, #787068 60%, #504840 100%)`,
          boxShadow: '0 2px 6px rgba(0,0,0,0.5), 0 0 0 2px #3a3530, inset 0 1px 2px rgba(255,255,255,0.2)',
          cursor: 'grab',
          position: 'relative',
        }}
        animate={{ rotate: angle }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setAngle((a) => a + 25)}
      >
        <div
          style={{
            position: 'absolute',
            top: 4,
            left: '50%',
            width: 2,
            height: size / 2 - 6,
            background: '#ddd',
            transform: 'translateX(-50%)',
            borderRadius: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: size * 0.25,
            height: size * 0.25,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 35%, #888, #444)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 7,
          fontWeight: 600,
          color: '#3a3020',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        {label}
        <br />
        <span style={{ fontSize: 6.5, color: '#5a5040' }}>{labelCyrillic}</span>
      </div>
    </div>
  );
}

function EmergencyButton() {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      style={{
        width: 42,
        height: 18,
        borderRadius: 3,
        background: 'linear-gradient(180deg, #dd3322 0%, #aa1100 100%)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 0 1px #660000',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 5.5,
        fontWeight: 700,
        color: '#ffcccc',
        letterSpacing: 1,
      }}
    >
      EMERGENCY
    </motion.div>
  );
}

function ToggleSwitch() {
  const [on, setOn] = useState(false);
  return (
    <motion.div
      onClick={() => setOn(!on)}
      style={{
        width: 14,
        height: 24,
        borderRadius: 2,
        background: '#444',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        position: 'relative',
        border: '1px solid #333',
      }}
    >
      <motion.div
        animate={{ y: on ? 10 : 0 }}
        style={{
          width: 10,
          height: 12,
          borderRadius: 1.5,
          background: on ? '#c4a060' : '#888',
          position: 'absolute',
          top: 1,
          left: 1,
          boxShadow: '0 1px 2px rgba(0,0,0,0.4)',
        }}
      />
    </motion.div>
  );
}

function SmallLed({ color = 'green', on = true }: { color?: string; on?: boolean }) {
  const c = color === 'green' ? '#33cc33' : color === 'red' ? '#ff3333' : '#e6a817';
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: on
          ? `radial-gradient(circle at 35% 35%, #fff, ${c} 50%, #222 100%)`
          : '#333',
        boxShadow: on ? `0 0 6px ${c}, 0 0 0 1px #222` : '0 0 0 1px #222',
      }}
    />
  );
}

/* ── CRT Map (stylized static) ── */

function CrtMap() {
  return (
    <div
      className="relative w-full h-full"
      style={{ background: '#1a3a2a', overflow: 'hidden' }}
    >
      {/* Water areas */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '35%', height: '100%', background: '#1a3a6a', opacity: 0.5 }} />
      <div style={{ position: 'absolute', left: '25%', bottom: 0, width: '35%', height: '30%', background: '#1a3a6a', opacity: 0.4 }} />
      <div style={{ position: 'absolute', right: '10%', top: '20%', width: '15%', height: '60%', background: '#1a4a3a', opacity: 0.3, borderRadius: 4 }} />

      {/* Roads */}
      <div style={{ position: 'absolute', left: '30%', top: 0, width: 2, height: '100%', background: '#ccaa44', opacity: 0.5 }} />
      <div style={{ position: 'absolute', left: '20%', top: '40%', width: '60%', height: 2, background: '#ccaa44', opacity: 0.4 }} />
      <div style={{ position: 'absolute', left: '50%', top: '10%', width: 2, height: '80%', background: '#cc8844', opacity: 0.4, transform: 'rotate(15deg)' }} />

      {/* Green terrain patches */}
      <div style={{ position: 'absolute', left: '35%', top: '10%', width: '30%', height: '25%', background: '#2a6a2a', opacity: 0.5, borderRadius: 6 }} />
      <div style={{ position: 'absolute', left: '55%', top: '40%', width: '25%', height: '20%', background: '#3a7a3a', opacity: 0.4, borderRadius: 8 }} />

      {/* Location labels */}
      {[
        { name: 'Swanhaven Base', x: '28%', y: '18%' },
        { name: 'NBD Fremantle', x: '15%', y: '48%' },
        { name: 'Industrial Zone 4', x: '25%', y: '38%' },
        { name: 'Port Facilities', x: '45%', y: '42%' },
        { name: 'Emergency Reroute', x: '60%', y: '12%' },
        { name: 'Cockburn Sound', x: '20%', y: '68%' },
        { name: 'Garden Island Outpost', x: '30%', y: '75%' },
        { name: 'University Base Alpha', x: '48%', y: '72%' },
        { name: 'Canning River', x: '65%', y: '65%' },
      ].map((loc) => (
        <div
          key={loc.name}
          style={{
            position: 'absolute',
            left: loc.x,
            top: loc.y,
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 7,
            color: '#ccddaa',
            textShadow: '0 0 4px #33cc33',
            whiteSpace: 'nowrap',
            letterSpacing: 0.5,
          }}
        >
          <span style={{ color: '#ff6644', marginRight: 2, fontSize: 8 }}>&#9670;</span>
          {loc.name}
        </div>
      ))}

      {/* Header bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '3px 8px',
          background: 'rgba(0,0,0,0.5)',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 8,
          color: '#88cc44',
          letterSpacing: 2,
          textAlign: 'center',
          textShadow: '0 0 6px #88cc44',
        }}
      >
        PERTH TACTICAL SURVEY - MAP SET ALPHA
      </div>

      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)',
          mixBlendMode: 'multiply',
        }}
      />
      {/* CRT vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  );
}

/* ── Main component ── */

export default function MapModule() {
  return (
    <div
      className="relative w-full"
      style={{
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.02) 3px,
            rgba(0,0,0,0.02) 4px
          ),
          linear-gradient(180deg, #d4b88a 0%, #c4a87a 10%, #b89868 90%, #a88858 100%)
        `,
        padding: '14px 16px',
        borderTop: '1px solid #d8c898',
        borderBottom: '2px solid #806838',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.5)',
      }}
    >
      {/* Title */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 28,
          fontWeight: 800,
          color: '#2a2015',
          letterSpacing: 4,
          textAlign: 'center',
          marginBottom: 10,
          textShadow: '0 1px 0 rgba(255,255,255,0.3)',
          lineHeight: 1,
        }}
      >
        KARTA / KARTA
      </div>

      {/* 3-column layout */}
      <div className="flex gap-3">
        {/* LEFT COLUMN */}
        <div className="flex flex-col" style={{ width: 120, gap: 8 }}>
          {/* Coordinate LCD */}
          <div
            style={{
              background: '#1a2010',
              borderRadius: 3,
              padding: '4px 6px',
              border: '2px solid #333',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8)',
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "'DSEG7 Classic', monospace",
                fontSize: 22,
                color: '#88cc44',
                textShadow: '0 0 8px #88cc44',
              }}
            >
              20
            </div>
            <div
              style={{
                fontFamily: "'DSEG7 Classic', monospace",
                fontSize: 22,
                color: '#88cc44',
                textShadow: '0 0 8px #88cc44',
              }}
            >
              -215
            </div>
          </div>

          {/* Knobs row */}
          <div className="flex gap-3 justify-center">
            <MapRotaryKnob label="MAP DENSITY" labelCyrillic="ПЛОТНОСТЬ" />
            <MapRotaryKnob label="ZOOM" labelCyrillic="ЗУМ" />
          </div>

          {/* Version text */}
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 7,
              color: '#5a5040',
              textAlign: 'center',
              letterSpacing: 1,
            }}
          >
            BASIC V2.0
            <br />
            SYS 64738
          </div>

          {/* Emergency buttons */}
          <div className="flex gap-2 justify-center">
            <EmergencyButton />
            <EmergencyButton />
          </div>

          {/* Toggle switches */}
          <div className="flex gap-2 justify-center">
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </div>

          {/* Bottom emblem text */}
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 6,
              color: '#6a6050',
              textAlign: 'center',
              marginTop: 4,
              lineHeight: 1.3,
              letterSpacing: 0.5,
            }}
          >
            OCTOPUS03
            <br />
            BASIC V2.0
            <br />
            SYS 64738
            <br />
            PIXEL 31200.3
          </div>
        </div>

        {/* CENTER - CRT Screen */}
        <div className="flex-1" style={{ minHeight: 280 }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 4,
              overflow: 'hidden',
              border: '4px solid #555',
              boxShadow: `
                inset 0 0 20px rgba(0,0,0,0.5),
                0 0 0 2px #333,
                0 0 0 6px #666,
                0 0 0 8px #444,
                0 4px 12px rgba(0,0,0,0.6)
              `,
              background: '#111',
            }}
          >
            <CrtMap />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col" style={{ width: 110, gap: 6 }}>
          {/* DENSITY / BODY */}
          <div className="flex items-center gap-2">
            <SmallLed color="green" />
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, fontWeight: 600, color: '#3a3020', letterSpacing: 1 }}>
              DENSITY
              <br />
              <span style={{ color: '#5a5040', fontSize: 6.5 }}>BODY ТАЧКЕ</span>
            </div>
          </div>

          {/* LOCK POS */}
          <div className="flex items-center gap-2">
            <SmallLed color="amber" />
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, fontWeight: 600, color: '#3a3020', letterSpacing: 1 }}>
              LOCK POS
            </div>
          </div>

          {/* MGRS */}
          <div
            style={{
              background: '#1a2010',
              borderRadius: 2,
              padding: '3px 6px',
              border: '1px solid #333',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.6)',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 8,
              color: '#88cc44',
              textShadow: '0 0 4px #88cc44',
              textAlign: 'center',
              letterSpacing: 1,
            }}
          >
            168
            <br />
            MB
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, fontWeight: 600, color: '#3a3020', letterSpacing: 1, textAlign: 'center' }}>
            MGRS 50H
          </div>

          {/* VELKOST / TRASY */}
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, color: '#5a5040', letterSpacing: 1, textAlign: 'center' }}>
            VELKOST
            <br />
            <span style={{ fontSize: 6.5 }}>РУТЕ</span>
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, color: '#5a5040', letterSpacing: 1, textAlign: 'center' }}>
            TRASY
            <br />
            <span style={{ fontSize: 6.5 }}>РУТЕ</span>
          </div>

          {/* REPEATED (BLANK) */}
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, color: '#5a5040', letterSpacing: 1, textAlign: 'center' }}>
            REPEATED
            <br />
            (BLANK)
          </div>

          {/* Large green LED */}
          <div className="flex flex-col items-center" style={{ gap: 3, marginTop: 4 }}>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px #33cc33, 0 0 30px rgba(51,204,51,0.3), 0 0 0 2px #222',
                  '0 0 25px #33cc33, 0 0 50px rgba(51,204,51,0.5), 0 0 0 2px #222',
                  '0 0 15px #33cc33, 0 0 30px rgba(51,204,51,0.3), 0 0 0 2px #222',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #aaffaa, #33cc33 50%, #117711 100%)',
              }}
            />
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 6, fontWeight: 600, color: '#3a3020', letterSpacing: 0.5, textAlign: 'center', lineHeight: 1.3 }}>
              OFFLINE TILES READY
              <br />
              OFFLINE PLOCICE SPREMNE
            </div>
          </div>

          {/* Radiation symbol */}
          <div style={{ textAlign: 'center', fontSize: 20, color: '#ccaa00', textShadow: '0 0 4px #ccaa00', marginTop: 4 }}>
            &#9762;
          </div>

          {/* Master power label */}
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 6.5, color: '#5a5040', textAlign: 'center', fontStyle: 'italic' }}>
            Master power switch
          </div>
        </div>
      </div>
    </div>
  );
}
