'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ──────────────── helpers ──────────────── */
const pad = (n: number) => n.toString().padStart(2, '0');

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

/* ──────────────── sub-components ──────────────── */

/** Corner screw rivet */
function Screw({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #b0a890, #6b6350 60%, #3a3a30)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.6)',
        zIndex: 5,
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 8,
          height: 1.5,
          background: '#2a2a20',
          transform: 'translate(-50%, -50%) rotate(35deg)',
          borderRadius: 1,
        }}
      />
    </div>
  );
}

/** LCD readout row */
function LCDRow({
  label,
  value,
  font = 'DSEG7 Classic',
  fontSize = 32,
}: {
  label: string;
  value: string;
  font?: string;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 6,
      }}
    >
      {/* Label */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          color: '#8b9a76',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          width: 190,
          flexShrink: 0,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>

      {/* LCD display */}
      <div
        style={{
          flex: 1,
          background: '#0c0e06',
          border: '2px inset #2a2d1e',
          borderRadius: 2,
          padding: '6px 14px',
          textAlign: 'right',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ghost digits behind */}
        <div
          style={{
            fontFamily: `'${font}', monospace`,
            fontSize,
            color: 'rgba(205, 37, 0, 0.08)',
            letterSpacing: 3,
            lineHeight: 1,
          }}
        >
          {value.replace(/[^ .:]/g, '8')}
        </div>
        {/* Active digits */}
        <div
          style={{
            position: 'absolute',
            top: 6,
            right: 14,
            fontFamily: `'${font}', monospace`,
            fontSize,
            color: '#cd2500',
            textShadow: '0 0 8px #cd2500, 0 0 20px rgba(205,37,0,0.4)',
            letterSpacing: 3,
            lineHeight: 1,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

/** Button grid (decorative keypad, left side) */
function ButtonGrid() {
  const rows = 5;
  const cols = 4;
  const colors = [
    ['#5a5d3a', '#5a5d3a', '#5a5d3a', '#5a5d3a'],
    ['#5a5d3a', '#5a5d3a', '#5a5d3a', '#5a5d3a'],
    ['#5a5d3a', '#5a5d3a', '#5a5d3a', '#5a5d3a'],
    ['#8b4513', '#8b4513', '#5a5d3a', '#5a5d3a'],
    ['#8b4513', '#8b4513', '#5a5d3a', '#5a5d3a'],
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 24px)`,
        gridTemplateRows: `repeat(${rows}, 20px)`,
        gap: 4,
        padding: 8,
        background: '#2c2e22',
        border: '2px inset #1e2018',
        borderRadius: 2,
      }}
    >
      {Array.from({ length: rows * cols }, (_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const bg = colors[row]?.[col] || '#5a5d3a';
        return (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9, y: 1 }}
            style={{
              width: 24,
              height: 20,
              background: `linear-gradient(to bottom, ${bg}, ${bg}dd)`,
              border: '1px solid #2a2c1e',
              borderRadius: 2,
              boxShadow:
                'inset 1px 1px 0 rgba(255,255,255,0.15), 0 2px 0 #1a1c14',
              cursor: 'pointer',
            }}
          />
        );
      })}
    </div>
  );
}

/** Chrome rotary knob */
function RotaryKnob() {
  const [rotation, setRotation] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <motion.div
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background:
            'conic-gradient(from 0deg, #888 0deg, #ccc 40deg, #666 80deg, #bbb 120deg, #777 160deg, #ccc 200deg, #666 240deg, #bbb 280deg, #888 320deg, #999 360deg)',
          boxShadow:
            '0 3px 8px rgba(0,0,0,0.7), inset 0 1px 3px rgba(255,255,255,0.3), 0 0 0 3px #2a2a22',
          cursor: 'grab',
          position: 'relative',
          rotate: `${rotation}deg`,
        }}
        drag={false}
        onPan={(_, info) => {
          setRotation((r) => r + info.delta.x * 2);
        }}
        whileHover={{ boxShadow: '0 3px 12px rgba(0,0,0,0.8), inset 0 1px 3px rgba(255,255,255,0.4), 0 0 0 3px #2a2a22' }}
      >
        {/* Indicator line */}
        <div
          style={{
            position: 'absolute',
            top: 4,
            left: '50%',
            width: 2,
            height: 12,
            background: '#222',
            transform: 'translateX(-50%)',
            borderRadius: 1,
          }}
        />
      </motion.div>

      {/* Value display */}
      <div
        style={{
          background: '#0c0e06',
          border: '2px inset #2a2d1e',
          borderRadius: 2,
          padding: '2px 8px',
          fontFamily: "'DSEG7 Classic', monospace",
          fontSize: 14,
          color: '#cd2500',
          textShadow: '0 0 6px #cd2500',
          letterSpacing: 2,
          textAlign: 'center',
          minWidth: 44,
        }}
      >
        36
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <span
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 8,
            color: '#8b9a76',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          Resolution
        </span>
        <span
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 8,
            color: '#6b7a56',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          Steps
        </span>
      </div>
    </div>
  );
}

/* ──────────────── MAIN MODULE ──────────────── */
export default function Chronometer() {
  const [time, setTime] = useState<string>('--:--:--');
  const [date, setDate] = useState<string>('-- --- ----');
  const [harvest, setHarvest] = useState<string>('--:--:--');

  const updateClock = useCallback(() => {
    const now = new Date();
    setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
    setDate(`${pad(now.getDate())} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`);

    // Harvest countdown: arbitrary 14-day cycle
    const dayMs = 86400000;
    const cycleMs = 14 * dayMs;
    const epoch = new Date('2026-01-01T00:00:00').getTime();
    const elapsed = (now.getTime() - epoch) % cycleMs;
    const remaining = cycleMs - elapsed;
    const rH = Math.floor(remaining / 3600000);
    const rM = Math.floor((remaining % 3600000) / 60000);
    const rS = Math.floor((remaining % 60000) / 1000);
    setHarvest(`${pad(rH)}:${pad(rM)}:${pad(rS)}`);
  }, []);

  useEffect(() => {
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, [updateClock]);

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #3a3d2a 0%, #343726 50%, #2e3122 100%)',
        backgroundImage: `
          linear-gradient(135deg, #3a3d2a 0%, #343726 50%, #2e3122 100%),
          url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E")
        `,
        border: '3px solid #1e2018',
        borderTop: '3px solid #4a4d3a',
        borderLeft: '3px solid #4a4d3a',
        borderRight: '3px solid #1e2018',
        borderBottom: '3px solid #1e2018',
        borderRadius: 2,
        padding: '18px 20px 14px',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.5)',
        fontFamily: "'IBM Plex Mono', monospace",
        overflow: 'hidden',
      }}
    >
      {/* Corner screws */}
      <Screw style={{ top: 8, left: 8 }} />
      <Screw style={{ top: 8, right: 8 }} />
      <Screw style={{ bottom: 8, left: 8 }} />
      <Screw style={{ bottom: 8, right: 8 }} />

      {/* Metal texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Title block + content */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {/* Left column: title + keypad */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Title */}
            <div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#e8dcc8',
                  letterSpacing: 2,
                  lineHeight: 1.1,
                }}
              >
                ХРОНОМЕТАР
              </div>
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 9,
                  color: '#8b9a76',
                  letterSpacing: 1.5,
                  marginTop: 3,
                }}
              >
                CHRONO &middot; CHRONOMETER &middot; HRONOMETAR
              </div>
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 9,
                  color: '#6b7a56',
                  letterSpacing: 1.5,
                  marginTop: 1,
                }}
              >
                ХРОНОМЕТР CHR-001
              </div>
            </div>

            {/* Button keypad */}
            <ButtonGrid />
          </div>

          {/* Center-right: LCD rows */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <LCDRow
              label="MIESTNY &#x10C;AS &middot; МЕСНО ВРЕМЕ"
              value={time}
              font="DSEG7 Classic"
              fontSize={36}
            />
            <LCDRow
              label="D&#xC1;TUM &middot; ДАТУМ"
              value={date}
              font="DSEG14 Classic"
              fontSize={28}
            />
            <LCDRow
              label="&#x17D;ATVA &middot; ЖЕТВА &#x2014; 14D"
              value={harvest}
              font="DSEG7 Classic"
              fontSize={28}
            />

            {/* Divider */}
            <div
              style={{
                borderTop: '1px dashed #5a5d3a',
                margin: '4px 0',
              }}
            />

            <LCDRow
              label="RADI&#xC1;CIA &middot; РАДИЈАЦИЈА &#x3BC;Sv/h"
              value="00.12"
              font="DSEG7 Classic"
              fontSize={28}
            />
          </div>

          {/* Far right: rotary knob */}
          <div style={{ flexShrink: 0, paddingTop: 8 }}>
            <RotaryKnob />
          </div>
        </div>

        {/* TimerRate label at bottom center */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 8,
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 8,
            color: '#5a5d3a',
            letterSpacing: 2,
          }}
        >
          Tim/Rate
        </div>
      </div>
    </div>
  );
}
