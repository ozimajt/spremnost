'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ──────────────── types ──────────────── */
interface InventoryItem {
  label: string;
  labelCyr: string;
  level: number; // 0-20 (number of lit bulbs out of 20)
  warnAt: number; // index where amber starts
  critAt: number; // index where red starts
}

/* ──────────────── data ──────────────── */
const ITEMS: InventoryItem[] = [
  { label: 'VODA', labelCyr: 'ВОДА', level: 16, warnAt: 14, critAt: 4 },
  { label: 'JEDLO', labelCyr: 'ХРАНА', level: 12, warnAt: 10, critAt: 4 },
  { label: 'LIEKY', labelCyr: 'ЛИЈЕКОВИ', level: 14, warnAt: 12, critAt: 4 },
  { label: 'PALIVO', labelCyr: 'ГОРИВО', level: 10, warnAt: 8, critAt: 3 },
  { label: 'NÁRADIE', labelCyr: 'АЛАТ', level: 10, warnAt: 8, critAt: 3 },
  { label: 'BATÉRIE', labelCyr: 'БАТЕРИЈЕ', level: 4, warnAt: 6, critAt: 4 },
];

const SCALE = [0, 25, 50, 75, 100];

/* ──────────────── sub-components ──────────────── */

/** Metal screw rivet */
function Rivet({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 35% 35%, #c0a880, #8b7050 50%, #4a3020)',
        boxShadow:
          'inset 0 1px 2px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.8)',
        zIndex: 5,
        ...style,
      }}
    >
      {/* Cross slot */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 10,
          height: 1.5,
          background: '#1a0a00',
          transform: 'translate(-50%, -50%)',
          borderRadius: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 1.5,
          height: 10,
          background: '#1a0a00',
          transform: 'translate(-50%, -50%)',
          borderRadius: 1,
        }}
      />
    </div>
  );
}

/** Round LED bulb */
function LEDBulb({
  state,
}: {
  state: 'green' | 'amber' | 'red' | 'off';
}) {
  const colors = {
    green: { bg: '#33cc33', highlight: '#aaffaa', glow: '#33cc33' },
    amber: { bg: '#e6a817', highlight: '#ffdd88', glow: '#e6a817' },
    red: { bg: '#cd2500', highlight: '#ff8866', glow: '#cd2500' },
    off: { bg: '#1a1510', highlight: '#2a2520', glow: 'transparent' },
  };
  const c = colors[state];

  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${c.highlight}, ${c.bg} 55%, #111 100%)`,
        boxShadow:
          state !== 'off'
            ? `0 0 6px ${c.glow}, 0 0 12px ${c.glow}44, inset 0 0 2px rgba(0,0,0,0.4)`
            : 'inset 0 0 3px rgba(0,0,0,0.8)',
        flexShrink: 0,
      }}
    />
  );
}

/** Inventory row with LED strip */
function InventoryRow({ item }: { item: InventoryItem }) {
  const totalBulbs = 20;
  const bulbs = Array.from({ length: totalBulbs }, (_, i) => {
    if (i >= item.level) return 'off';
    if (i < item.critAt) return 'red';
    if (i >= item.warnAt) return 'amber';
    return 'green';
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
      }}
    >
      {/* Label */}
      <div style={{ width: 80, flexShrink: 0 }}>
        <div
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 12,
            fontWeight: 700,
            color: '#e8dcc8',
            letterSpacing: 1.2,
            lineHeight: 1.2,
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#a08060',
            letterSpacing: 0.8,
          }}
        >
          {item.labelCyr}
        </div>
      </div>

      {/* LED bar in recessed tray */}
      <div
        style={{
          flex: 1,
          background: '#0e0806',
          border: '2px inset #2a1510',
          borderRadius: 2,
          padding: '6px 8px',
          display: 'flex',
          gap: 4,
          alignItems: 'center',
        }}
      >
        {bulbs.map((state, i) => (
          <LEDBulb key={i} state={state as 'green' | 'amber' | 'red' | 'off'} />
        ))}
      </div>
    </div>
  );
}

/* ──────────────── MAIN MODULE ──────────────── */
export default function Inventory() {
  const [testFlash, setTestFlash] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        background:
          'linear-gradient(145deg, #5a1818 0%, #3d1010 40%, #2a0808 100%)',
        backgroundImage: `
          linear-gradient(145deg, #5a1818 0%, #3d1010 40%, #2a0808 100%),
          url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23ffffff' fill-opacity='0.02'/%3E%3C/svg%3E")
        `,
        border: '3px solid #1a0808',
        borderTop: '3px solid #6b2222',
        borderLeft: '3px solid #6b2222',
        borderRadius: 2,
        padding: '18px 20px 14px',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 12px rgba(0,0,0,0.5)',
        fontFamily: "'IBM Plex Mono', monospace",
        overflow: 'hidden',
      }}
    >
      {/* Rivets */}
      <Rivet style={{ top: 10, left: 10 }} />
      <Rivet style={{ top: 10, right: 10 }} />
      <Rivet style={{ bottom: 10, left: 10 }} />
      <Rivet style={{ bottom: 10, right: 10 }} />
      {/* Extra rivets on right side */}
      <Rivet style={{ top: '25%', right: 10 }} />
      <Rivet style={{ top: '50%', right: 10 }} />
      <Rivet style={{ top: '75%', right: 10 }} />

      {/* Metal texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: '1px dashed #5a2020',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: '#e8dcc8',
                letterSpacing: 3,
                lineHeight: 1.1,
              }}
            >
              ЗАПАСЫ
            </div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 10,
                color: '#a08060',
                letterSpacing: 1.5,
                marginTop: 4,
              }}
            >
              INVENTORY &middot; Z&Aacute;SOBY &middot; ZALIHE
            </div>
          </div>

          {/* INV-001 plate */}
          <div
            style={{
              background: '#1a0808',
              border: '2px inset #3d1010',
              borderRadius: 2,
              padding: '4px 12px',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 12,
              color: '#a08060',
              letterSpacing: 2,
            }}
          >
            INV-001
          </div>
        </div>

        {/* Scale numbers */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 6,
          }}
        >
          <div style={{ width: 80, flexShrink: 0 }} />
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 8px',
            }}
          >
            {SCALE.map((n) => (
              <span
                key={n}
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: 9,
                  color: '#806040',
                  letterSpacing: 1,
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* Inventory rows */}
        {ITEMS.map((item) => (
          <InventoryRow key={item.label} item={item} />
        ))}

        {/* Right side controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 12,
            margin: '12px 0 8px',
          }}
        >
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 8,
              color: '#806040',
              letterSpacing: 1,
              textAlign: 'right',
              lineHeight: 1.4,
            }}
          >
            СЕТЬ ВВЕДЕНО<br />ОСТЬ ВКЛЮЧЕНО
          </div>

          {/* ТЕСТ ЗАМЕНУ button */}
          <motion.button
            whileTap={{ scale: 0.95, y: 2 }}
            onClick={() => {
              setTestFlash(true);
              setTimeout(() => setTestFlash(false), 600);
            }}
            style={{
              background: testFlash
                ? 'linear-gradient(to bottom, #e8dcc8, #c0a880)'
                : 'linear-gradient(to bottom, #4a2020, #2a1010)',
              border: '2px solid #1a0808',
              borderRadius: 3,
              padding: '6px 12px',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 9,
              color: testFlash ? '#1a0808' : '#a08060',
              letterSpacing: 1.5,
              cursor: 'pointer',
              boxShadow:
                'inset 1px 1px 0 rgba(255,255,255,0.1), 0 2px 0 #0a0404',
              textTransform: 'uppercase',
            }}
          >
            ТЕСТ ЗАМЕНУ
          </motion.button>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: '1px dashed #5a2020', margin: '8px 0 12px' }}
        />

        {/* Bottom LCD summaries */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
          }}
        >
          {/* Total items */}
          <div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 8,
                color: '#806040',
                letterSpacing: 1,
                marginBottom: 3,
                textTransform: 'uppercase',
                lineHeight: 1.3,
              }}
            >
              SPOLU POLO&#x17D;IEK<br />
              <span style={{ fontSize: 7, color: '#604030' }}>
                УКУПНО АРТИКАЛА
              </span>
            </div>
            <div
              style={{
                background: '#0e0806',
                border: '2px inset #2a1510',
                borderRadius: 2,
                padding: '6px 10px',
                fontFamily: "'DSEG7 Classic', monospace",
                fontSize: 24,
                color: '#33cc33',
                textShadow: '0 0 8px #33cc33',
                textAlign: 'center',
                letterSpacing: 2,
              }}
            >
              247
            </div>
          </div>

          {/* Expiring */}
          <div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 8,
                color: '#806040',
                letterSpacing: 1,
                marginBottom: 3,
                textTransform: 'uppercase',
                lineHeight: 1.3,
              }}
            >
              EXPIRUJE &lt; 30 DN&Iacute;<br />
              <span style={{ fontSize: 7, color: '#604030' }}>
                ИСТИЧЕ &lt; 30 ДАНА
              </span>
            </div>
            <div
              style={{
                background: '#0e0806',
                border: '2px inset #2a1510',
                borderRadius: 2,
                padding: '6px 10px',
                fontFamily: "'DSEG7 Classic', monospace",
                fontSize: 24,
                color: '#33cc33',
                textShadow: '0 0 8px #33cc33',
                textAlign: 'center',
                letterSpacing: 2,
              }}
            >
              8
            </div>
          </div>

          {/* Last audit */}
          <div>
            <div
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 8,
                color: '#806040',
                letterSpacing: 1,
                marginBottom: 3,
                textTransform: 'uppercase',
                lineHeight: 1.3,
              }}
            >
              POSLEDN&Yacute; AUDIT<br />
              <span style={{ fontSize: 7, color: '#604030' }}>
                ПОСЛЕДНА РЕВИЗИЈА
              </span>
            </div>
            <div
              style={{
                background: '#0e0806',
                border: '2px inset #2a1510',
                borderRadius: 2,
                padding: '6px 10px',
                fontFamily: "'DSEG14 Classic', monospace",
                fontSize: 18,
                color: '#33cc33',
                textShadow: '0 0 8px #33cc33',
                textAlign: 'center',
                letterSpacing: 1,
              }}
            >
              2026-04-03
            </div>
          </div>
        </div>

        {/* Model plate */}
        <div
          style={{
            marginTop: 12,
            padding: '6px 12px',
            background: '#1a0808',
            border: '1px solid #3d1010',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 8,
              color: '#604030',
              letterSpacing: 1.5,
              lineHeight: 1.4,
            }}
          >
            SPOLU POLO&#x17D;IEK &middot; EXPIRUJE &lt; 30 DN&Iacute; &middot; POSLEDN&Yacute; AUDIT
          </div>
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 8,
              color: '#604030',
              letterSpacing: 1.5,
              lineHeight: 1.4,
            }}
          >
            УКУПНО АРТИКАЛА &middot; ИСТИЧЕ &lt; 30 ДАНА &middot; ПОСЛЕДНА РЕВИЗИЈА
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 8,
              color: '#806040',
              letterSpacing: 1.5,
              marginTop: 4,
            }}
          >
            ИНВЕНТАРНЫЙ МОНИТОР &middot; МОДЕЛЬ М-88 &middot; ВВЕДЕНO 1978г.
          </div>
        </div>
      </div>
    </div>
  );
}
