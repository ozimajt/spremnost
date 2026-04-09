'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ──────────────── types ──────────────── */
interface GaugeData {
  value: number;
  max: number;
  display: string;
  label: string;
  labelCyr: string;
}

/* ──────────────── data ──────────────── */
const GAUGES: GaugeData[] = [
  { value: 72.4, max: 100, display: '72.4%', label: "PRIPRAVENOSŤ", labelCyr: 'ПРИПРЕМЉЕНОСТ' },
  { value: 88, max: 120, display: '88.0L', label: 'VODA', labelCyr: 'ВОДА' },
  { value: 14, max: 30, display: '14 DNI', label: 'HRANA', labelCyr: 'ХРАНА' },
  { value: 64, max: 100, display: '64%', label: 'PALIVO', labelCyr: 'ГОРИВО' },
];

/* ──────────────── helpers ──────────────── */
function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const rad = (deg - 90) * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const [x1, y1] = polar(cx, cy, r, startDeg);
  const [x2, y2] = polar(cx, cy, r, endDeg);
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/* ──────────────── sub-components ──────────────── */

/** Toggle switch */
function ToggleSwitch({ initialOn = false }: { initialOn?: boolean }) {
  const [isOn, setIsOn] = useState(initialOn);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      {/* ON label */}
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 8,
          color: isOn ? '#e8dcc8' : '#4a4a6a',
          letterSpacing: 1,
        }}
      >
        ON
      </span>

      {/* Switch body */}
      <motion.div
        onClick={() => setIsOn(!isOn)}
        style={{
          width: 30,
          height: 50,
          background: 'linear-gradient(to bottom, #2a2a40, #1a1a2a)',
          borderRadius: 4,
          border: '2px solid #0a0a14',
          position: 'relative',
          cursor: 'pointer',
          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)',
        }}
      >
        <motion.div
          animate={{ y: isOn ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            position: 'absolute',
            width: 20,
            height: 24,
            left: '50%',
            top: 3,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, #e8dcc8 0%, #aaa 45%, #8C8670 100%)',
            borderRadius: '3px 3px 2px 2px',
            border: '1px solid rgba(0,0,0,0.5)',
            boxShadow: '0 2px 0 rgba(0,0,0,0.4), inset 1px 1px 0 rgba(255,255,255,0.5)',
          }}
        />
      </motion.div>

      {/* OFF label */}
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 8,
          color: !isOn ? '#e8dcc8' : '#4a4a6a',
          letterSpacing: 1,
        }}
      >
        OFF
      </span>
    </div>
  );
}

/** Chrome rotary knob (smaller, for top row) */
function SmallKnob() {
  const [rotation, setRotation] = useState(0);

  return (
    <motion.div
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        background:
          'conic-gradient(from 0deg, #888 0deg, #ccc 40deg, #666 80deg, #bbb 120deg, #777 160deg, #ccc 200deg, #666 240deg, #bbb 280deg, #888 320deg, #999 360deg)',
        boxShadow:
          '0 3px 8px rgba(0,0,0,0.7), inset 0 1px 3px rgba(255,255,255,0.3), 0 0 0 2px #1a1a2a',
        cursor: 'grab',
        position: 'relative',
        rotate: `${rotation}deg`,
        flexShrink: 0,
      }}
      onPan={(_, info) => {
        setRotation((r) => r + info.delta.x * 2);
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 3,
          left: '50%',
          width: 2,
          height: 8,
          background: '#222',
          transform: 'translateX(-50%)',
          borderRadius: 1,
        }}
      />
    </motion.div>
  );
}

/** Large chrome knob (above gauges) */
function LargeKnob() {
  const [rotation, setRotation] = useState(0);

  return (
    <motion.div
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background:
          'conic-gradient(from 0deg, #888 0deg, #ccc 40deg, #666 80deg, #bbb 120deg, #777 160deg, #ccc 200deg, #666 240deg, #bbb 280deg, #888 320deg, #999 360deg)',
        boxShadow:
          '0 4px 10px rgba(0,0,0,0.8), inset 0 1px 3px rgba(255,255,255,0.3), 0 0 0 3px #0a0a20',
        cursor: 'grab',
        position: 'relative',
        rotate: `${rotation}deg`,
        flexShrink: 0,
        margin: '0 auto',
      }}
      onPan={(_, info) => {
        setRotation((r) => r + info.delta.x * 2);
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 4,
          left: '50%',
          width: 2,
          height: 10,
          background: '#222',
          transform: 'translateX(-50%)',
          borderRadius: 1,
        }}
      />
    </motion.div>
  );
}

/** Analog gauge SVG */
function AnalogGauge({ data }: { data: GaugeData }) {
  const cx = 100;
  const cy = 100;
  const rOuter = 90;
  const rArc = 72;
  const pct = Math.max(0, Math.min(1, data.value / data.max));
  const needleAngle = -135 + pct * 270;

  // Generate tick marks
  const ticks = Array.from({ length: 11 }, (_, i) => {
    const a = -135 + i * 27;
    const [x1, y1] = polar(cx, cy, rArc - 8, a);
    const [x2, y2] = polar(cx, cy, rArc - 2, a);
    const isMajor = i % 5 === 0;
    return (
      <line
        key={i}
        x1={x1.toFixed(2)}
        y1={y1.toFixed(2)}
        x2={x2.toFixed(2)}
        y2={y2.toFixed(2)}
        stroke="#cd2500"
        strokeWidth={isMajor ? 2.5 : 1}
        strokeOpacity={isMajor ? 1 : 0.6}
      />
    );
  });

  // Generate number labels
  const numbers = [0, data.max];
  const numberAngles = [-135, 135];
  const numberLabels = numbers.map((n, i) => {
    const [x, y] = polar(cx, cy, rArc + 12, numberAngles[i]);
    return (
      <text
        key={i}
        x={x.toFixed(2)}
        y={y.toFixed(2)}
        fontFamily="'Share Tech Mono', monospace"
        fontSize="10"
        fill="#cd2500"
        textAnchor="middle"
        dominantBaseline="middle"
        opacity={0.8}
      >
        {n}
      </text>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Knob above gauge */}
      <LargeKnob />

      {/* Gauge */}
      <div style={{ width: 140, height: 140, position: 'relative' }}>
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
          {/* Outer chrome ring */}
          <circle cx={cx} cy={cy} r={rOuter} fill="#8C8670" stroke="#0a0a14" strokeWidth="2" />
          {/* Dark face */}
          <circle cx={cx} cy={cy} r={rOuter - 4} fill="#1a1a2a" stroke="#0a0a14" strokeWidth="1" />

          {/* Red arc - full sweep */}
          <path d={arcPath(cx, cy, rArc, -135, 135)} fill="none" stroke="#cd2500" strokeWidth="4" strokeOpacity="0.4" />
          {/* Active arc portion */}
          <path d={arcPath(cx, cy, rArc, -135, -135 + pct * 270)} fill="none" stroke="#cd2500" strokeWidth="4" />

          {/* Tick marks */}
          {ticks}

          {/* Number labels */}
          {numberLabels}

          {/* Needle */}
          <g transform={`rotate(${needleAngle.toFixed(2)} ${cx} ${cy})`}>
            <polygon
              points={`${cx - 2.5},${cy + 8} ${cx + 2.5},${cy + 8} ${cx + 0.8},${cy - rArc + 8} ${cx - 0.8},${cy - rArc + 8}`}
              fill="#cd2500"
              stroke="#0a0a14"
              strokeWidth="0.5"
            />
          </g>

          {/* Center pivot */}
          <circle cx={cx} cy={cy} r="7" fill="#1a1a2a" stroke="#8C8670" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="3" fill="#8C8670" />
        </svg>

        {/* Digital readout */}
        <div
          style={{
            position: 'absolute',
            bottom: '16%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0a0a14',
            border: '1px solid #2a2a40',
            borderRadius: 2,
            padding: '2px 8px',
            fontFamily: "'DSEG7 Classic', monospace",
            fontSize: 12,
            color: '#cd2500',
            textShadow: '0 0 6px #cd2500',
            letterSpacing: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {data.display}
        </div>
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 10,
            color: '#e8dcc8',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          {data.label}
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 8,
            color: '#8090c0',
            letterSpacing: 1,
            marginTop: 1,
          }}
        >
          {data.labelCyr}
        </div>
      </div>
    </div>
  );
}

/** 4S Crest/patch */
function Crest() {
  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 35%, #4a3520, #2a1a10 70%, #1a0a00)',
        border: '3px solid #c0a040',
        boxShadow: '0 0 0 2px #1a1a2a, 0 0 12px rgba(192,160,64,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Outer ring text */}
      <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <path id="topArc" d="M 15,50 A 35,35 0 0,1 85,50" />
          <path id="bottomArc" d="M 85,55 A 35,35 0 0,1 15,55" />
        </defs>
        <text fontFamily="'IBM Plex Mono', monospace" fontSize="6" fontWeight="700" fill="#c0a040" letterSpacing="1">
          <textPath href="#topArc" textAnchor="middle" startOffset="50%">
            SUPER SLAV SURVIVAL SOCIETY
          </textPath>
        </text>
        <text fontFamily="'IBM Plex Mono', monospace" fontSize="5.5" fontWeight="600" fill="#c0a040" letterSpacing="1">
          <textPath href="#bottomArc" textAnchor="middle" startOffset="50%">
            EST. SINCE EVER
          </textPath>
        </text>
      </svg>

      {/* Center content */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#c0a040',
          fontFamily: "'IBM Plex Mono', monospace",
          textShadow: '0 0 4px rgba(192,160,64,0.4)',
          lineHeight: 1,
          marginTop: 2,
        }}
      >
        4S
      </div>
    </div>
  );
}

/* ──────────────── MAIN MODULE ──────────────── */
export default function Readiness() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* ═══════ TOP SECTION: Navy ═══════ */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(145deg, #222850 0%, #1a1e3a 40%, #141830 100%)',
          border: '3px solid #0a0e20',
          borderBottom: 'none',
          borderRadius: '2px 2px 0 0',
          padding: '16px 20px 14px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.4)',
          fontFamily: "'IBM Plex Mono', monospace",
          overflow: 'hidden',
        }}
      >
        {/* Metal texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          {/* Left: Toggle switches */}
          <div style={{ display: 'flex', gap: 10, flexShrink: 0, paddingTop: 4 }}>
            <ToggleSwitch initialOn={true} />
            <ToggleSwitch initialOn={true} />
            <ToggleSwitch initialOn={false} />
          </div>

          {/* Center: Title block */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 11,
                color: '#8090c0',
                letterSpacing: 2,
                marginBottom: 2,
              }}
            >
              Спремност
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#e8dcc8',
                letterSpacing: 4,
                lineHeight: 1.1,
                textShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}
            >
              ГОТОВОСТ
            </div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 9,
                color: '#6070a0',
                letterSpacing: 1.5,
                marginTop: 4,
              }}
            >
              READINESS &middot; PRIPRAVENOS&#x164; &middot; SPREMNOST
            </div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 9,
                color: '#4a5a80',
                letterSpacing: 1.5,
                marginTop: 2,
              }}
            >
              RDY-001
            </div>

            {/* Row of small knobs */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 16,
                marginTop: 12,
              }}
            >
              <SmallKnob />
              <SmallKnob />
              <SmallKnob />
              <SmallKnob />
              <SmallKnob />
            </div>
          </div>

          {/* Right: Crest */}
          <Crest />
        </div>
      </div>

      {/* ═══════ BOTTOM SECTION: Blue with gauges ═══════ */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #1a2a50 0%, #162040 100%)',
          border: '3px solid #3060c0',
          borderRadius: '0 0 2px 2px',
          padding: '20px 16px 16px',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 12px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(48,96,192,0.3)',
          fontFamily: "'IBM Plex Mono', monospace",
          overflow: 'hidden',
        }}
      >
        {/* Gauges row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            justifyItems: 'center',
          }}
        >
          {GAUGES.map((g) => (
            <AnalogGauge key={g.label} data={g} />
          ))}
        </div>
      </div>
    </div>
  );
}
