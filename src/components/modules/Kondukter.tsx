'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Button definitions ─── */
const buttons = [
  // Row 1
  { id: 'zasoby', primary: 'ZÁSOBY', secondary: 'ЗАЛИХЕ', danger: false },
  { id: 'mapa', primary: 'MAPA', secondary: 'КАРТА', danger: false },
  { id: 'plato', primary: 'PLATO', secondary: 'ПЛАТО', danger: false },
  { id: 'zahrada', primary: 'ZÁHRADA', secondary: 'БАШТА', danger: false },
  // Row 2
  { id: 'sprievodca', primary: 'SPRIEVODCA', secondary: 'ВОДИЧ', danger: false },
  { id: 'clenovia', primary: 'ČLENOVIA', secondary: 'ЧЛАНОВИ', danger: false },
  { id: 'navrhy', primary: 'NÁVRHY', secondary: 'ПРЕДЛОЗИ', danger: false },
  { id: 'poplach', primary: 'POPLACH', secondary: 'УЗБУНА', danger: true },
];

const toggleSwitches = [
  { id: 'zvuk', primary: 'ZVUK', secondary: 'ЗВУК' },
  { id: 'crt', primary: 'CRT', secondary: 'ЕКРАН' },
  { id: 'alarm', primary: 'ALARM', secondary: 'АЛАРМ' },
  { id: 'offline', primary: 'OFFLINE', secondary: 'ОФЛАЈН' },
];

/* ─── LED colors by index ─── */
const ledColors = ['#33CC33', '#E6A817', '#33CC33', '#E6A817', '#33CC33', '#E6A817', '#33CC33', '#CD2500'];

/* ─── Sub-components ─── */

function PhysicalButton({
  btn,
  index,
  active,
  onPress,
}: {
  btn: (typeof buttons)[0];
  index: number;
  active: boolean;
  onPress: () => void;
}) {
  const ledColor = btn.danger ? '#CD2500' : ledColors[index];

  return (
    <div className="flex flex-col items-center" style={{ gap: '4px' }}>
      <motion.button
        onClick={onPress}
        whileTap={{ y: 2 }}
        animate={{ y: active ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        style={{
          width: '90px',
          height: '52px',
          background: btn.danger
            ? 'linear-gradient(180deg, #e8e0d0 0%, #ddd4c4 40%, #d0c8b8 100%)'
            : 'linear-gradient(180deg, #f0ebe0 0%, #e8e0d0 40%, #ddd4c4 100%)',
          border: '1px solid #b0a890',
          borderRadius: '4px',
          boxShadow: active
            ? 'inset 0 1px 2px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.3)'
            : '0 2px 4px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1px',
          padding: '4px 2px',
          fontFamily: 'var(--font-mono)',
          position: 'relative',
        }}
      >
        {/* Danger indicator dot on POPLACH */}
        {btn.danger && (
          <span
            style={{
              position: 'absolute',
              top: '4px',
              left: '6px',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#CD2500',
              boxShadow: active ? '0 0 6px #CD2500' : 'none',
            }}
          />
        )}
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            color: btn.danger ? '#B22222' : '#2a2a2a',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
          }}
        >
          {btn.primary}
        </span>
        <span
          style={{
            fontSize: '9px',
            fontWeight: 500,
            color: btn.danger ? '#8B1A1A' : '#666',
            lineHeight: 1.1,
          }}
        >
          {btn.secondary}
        </span>
      </motion.button>

      {/* LED indicator below button */}
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: active ? ledColor : '#4a4a3a',
          boxShadow: active ? `0 0 6px ${ledColor}, 0 0 12px ${ledColor}40` : 'inset 0 1px 1px rgba(0,0,0,0.3)',
          transition: 'all 0.15s ease',
        }}
      />
    </div>
  );
}

function ToggleSwitch({
  toggle,
  active,
  onToggle,
}: {
  toggle: (typeof toggleSwitches)[0];
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col items-center" style={{ gap: '3px' }}>
      {/* Top labels */}
      <div className="flex flex-col items-center" style={{ gap: '0px' }}>
        <span
          style={{
            fontSize: '9px',
            fontWeight: 700,
            color: '#2a2a2a',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.05em',
          }}
        >
          {toggle.primary}
        </span>
        <span
          style={{
            fontSize: '8px',
            fontWeight: 500,
            color: '#666',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {toggle.secondary}
        </span>
      </div>

      {/* Toggle housing */}
      <button
        onClick={onToggle}
        style={{
          width: '28px',
          height: '48px',
          background: 'linear-gradient(180deg, #3a3a34 0%, #2a2a24 50%, #3a3a34 100%)',
          borderRadius: '4px',
          border: '1px solid #222',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)',
          position: 'relative',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: active ? 'flex-start' : 'flex-end',
          padding: '3px',
        }}
      >
        {/* Toggle lever */}
        <motion.div
          animate={{ y: active ? 0 : 0 }}
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '3px',
            background: active
              ? 'linear-gradient(180deg, #e8e0d0 0%, #ccc4b0 100%)'
              : 'linear-gradient(180deg, #888070 0%, #706860 100%)',
            boxShadow: active
              ? '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
              : '0 -2px 4px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.1)',
            border: '1px solid rgba(0,0,0,0.2)',
          }}
        />
      </button>

      {/* Bottom labels */}
      <div className="flex flex-col items-center" style={{ gap: '0px', marginTop: '-1px' }}>
        <span
          style={{
            fontSize: '7px',
            fontWeight: 600,
            color: active ? '#33CC33' : '#888',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            transition: 'color 0.15s',
          }}
        >
          {active ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Kondukter Module ─── */

export default function Kondukter() {
  const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>({});
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    zvuk: true,
    crt: true,
    alarm: false,
    offline: false,
  });

  const handleButtonPress = (id: string) => {
    setActiveButtons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggle = (id: string) => {
    setToggleStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className="relative w-full"
      style={{
        background: 'linear-gradient(180deg, #d8d0b8 0%, #d4ccb0 20%, #cec6aa 100%)',
        borderTop: '1px solid #e0d8c0',
        borderBottom: '2px solid #a8a088',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
        padding: '16px 20px',
        minHeight: '130px',
      }}
    >
      {/* Subtle surface texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='1' fill='rgba(0,0,0,0.02)'/%3E%3Crect x='3' y='3' width='1' height='1' fill='rgba(255,255,255,0.02)'/%3E%3C/svg%3E")`,
          backgroundSize: '6px 6px',
        }}
      />

      <div className="relative flex items-start" style={{ gap: '24px' }}>
        {/* ── Title section (far left) ── */}
        <div
          className="shrink-0 flex flex-col justify-center"
          style={{ minWidth: '130px', paddingTop: '2px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '26px',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}
          >
            Кондуктер
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#3a3a3a',
              letterSpacing: '0.12em',
              marginTop: '2px',
            }}
          >
            УПРАВЛЕНИЕ
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '8px',
              fontWeight: 500,
              color: '#888',
              letterSpacing: '0.06em',
              marginTop: '4px',
              textTransform: 'uppercase',
            }}
          >
            CONTROLS &middot; OVLÁDANIE &middot; KONTROLE
          </span>
        </div>

        {/* ── Button grid (center-left) ── */}
        <div className="flex flex-col" style={{ gap: '6px' }}>
          {/* Row 1 */}
          <div className="flex" style={{ gap: '6px' }}>
            {buttons.slice(0, 4).map((btn, i) => (
              <PhysicalButton
                key={btn.id}
                btn={btn}
                index={i}
                active={!!activeButtons[btn.id]}
                onPress={() => handleButtonPress(btn.id)}
              />
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex" style={{ gap: '6px' }}>
            {buttons.slice(4, 8).map((btn, i) => (
              <PhysicalButton
                key={btn.id}
                btn={btn}
                index={i + 4}
                active={!!activeButtons[btn.id]}
                onPress={() => handleButtonPress(btn.id)}
              />
            ))}
          </div>
        </div>

        {/* ── Toggle switches section (center-right) ── */}
        <div
          className="shrink-0 flex items-start"
          style={{
            background: 'linear-gradient(180deg, #c4bc9e 0%, #beb6a0 50%, #c4bc9e 100%)',
            borderRadius: '4px',
            padding: '10px 14px',
            gap: '14px',
            border: '1px solid #a8a088',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.15)',
          }}
        >
          {toggleSwitches.map((toggle) => (
            <ToggleSwitch
              key={toggle.id}
              toggle={toggle}
              active={!!toggleStates[toggle.id]}
              onToggle={() => handleToggle(toggle.id)}
            />
          ))}
        </div>

        {/* ── Logout button (far right) ── */}
        <div className="shrink-0 flex items-center" style={{ alignSelf: 'center' }}>
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'linear-gradient(180deg, #3a3a34 0%, #2a2a24 50%, #222 100%)',
              border: '1px solid #111',
              borderRadius: '20px',
              padding: '12px 16px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
              minWidth: '90px',
            }}
          >
            {/* Power icon */}
            <span style={{ fontSize: '16px', color: '#CD2500', lineHeight: 1 }}>&#x23FB;</span>
            <span
              style={{
                fontSize: '7px',
                fontWeight: 600,
                color: '#ccc',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                lineHeight: 1.3,
                letterSpacing: '0.04em',
              }}
            >
              LOGOUT &middot; ODHLÁSIŤ
            </span>
            <span
              style={{
                fontSize: '7px',
                fontWeight: 500,
                color: '#999',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              ОДЈАВА &middot; ВЫХОД
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
