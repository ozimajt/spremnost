'use client';

import { motion } from 'framer-motion';

function PanelScrew({ className }: { className?: string }) {
  return (
    <div
      className={`absolute z-10 ${className}`}
      style={{
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #d0ccc0, #908878 50%, #605848 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          right: '20%',
          height: 1,
          background: '#444',
          transform: 'translateY(-50%) rotate(45deg)',
          borderRadius: 1,
        }}
      />
    </div>
  );
}

function DataRow({ label, labelCyrillic, value }: { label: string; labelCyrillic: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between" style={{ padding: '3px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 600, color: '#2a2a20', letterSpacing: 1 }}>
        {label}
        <br />
        <span style={{ fontSize: 7.5, color: '#5a5a48', fontWeight: 400 }}>{labelCyrillic}</span>
      </div>
      <div
        style={{
          fontFamily: "'DSEG7 Classic', monospace",
          fontSize: 16,
          color: '#ff3333',
          textShadow: '0 0 6px rgba(255,50,50,0.4)',
          background: '#0c0c0c',
          padding: '2px 8px',
          borderRadius: 2,
          border: '1px solid #333',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.7)',
          minWidth: 50,
          textAlign: 'center',
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function Feed() {
  return (
    <div
      className="relative w-full"
      style={{
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.015) 3px,
            rgba(0,0,0,0.015) 4px
          ),
          linear-gradient(180deg, #b8c0a0 0%, #a8b490 10%, #98a880 90%, #889870 100%)
        `,
        padding: '16px 20px',
        borderTop: '1px solid #c8d0b0',
        borderBottom: '2px solid #687858',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.5)',
        minHeight: 140,
      }}
    >
      {/* Screws */}
      <PanelScrew className="top-2 left-2" />
      <PanelScrew className="top-2 right-2" />
      <PanelScrew className="bottom-2 left-2" />
      <PanelScrew className="bottom-2 right-2" />

      {/* Bevel border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '2px solid transparent',
          borderTopColor: 'rgba(255,255,255,0.15)',
          borderLeftColor: 'rgba(255,255,255,0.1)',
          borderBottomColor: 'rgba(0,0,0,0.15)',
          borderRightColor: 'rgba(0,0,0,0.1)',
        }}
      />

      {/* Title */}
      <div style={{ marginBottom: 10 }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 18,
            fontWeight: 800,
            color: '#2a2a20',
            letterSpacing: 3,
            textShadow: '0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          FEED · ЛЕНТА
        </div>
        <div
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 8,
            color: '#5a5a48',
            letterSpacing: 2,
          }}
        >
          FEED · LENTA · LENTA · FEED-001
        </div>
      </div>

      {/* Data rows */}
      <div className="flex gap-6">
        <div className="flex-1" style={{ maxWidth: 300 }}>
          <DataRow label="NEPRECITANE" labelCyrillic="НЕПРОЧИТАНО" value={12} />
          <DataRow label="MOJE PRISPEVKY" labelCyrillic="МОЈИ ПОСТОВИ" value={4} />
          <DataRow label="NAVRHY" labelCyrillic="ПРЕДЛОЗИ" value={7} />
        </div>

        {/* System status CRT */}
        <div
          className="flex-1"
          style={{
            background: '#0c1008',
            borderRadius: 3,
            padding: '8px 12px',
            border: '2px solid #333',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8)',
            maxWidth: 300,
          }}
        >
          <div
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 14,
              color: '#88cc44',
              textShadow: '0 0 6px rgba(136,204,68,0.5)',
              lineHeight: 1.4,
            }}
          >
            <div>SYS&gt; FEED MODULE ACTIVE</div>
            <div>SYS&gt; 4 MEMBERS REGISTERED</div>
            <div style={{ color: '#e6a817' }}>SYS&gt; WAITING FOR MEMBERS...</div>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ display: 'inline-block', width: 8, height: 14, background: '#88cc44', marginLeft: 2, verticalAlign: 'middle' }}
            />
          </div>
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px)',
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    </div>
  );
}
