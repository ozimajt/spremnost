'use client';

import { motion } from 'framer-motion';

export default function BottomPlate() {
  return (
    <div className="relative w-full flex flex-col" style={{ background: '#111' }}>
      {/* === TOP SECTION: Dark textured panel === */}
      <div
        className="relative w-full"
        style={{
          background: '#1a1a18',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")
          `,
          backgroundSize: '200px 200px',
          padding: '14px 20px',
          borderTop: '1px solid #2a2a28',
          borderBottom: '1px solid #0e0e0d',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), inset 0 -1px 0 rgba(0,0,0,0.3)',
          minHeight: 60,
        }}
      >
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='1' fill='rgba(255,255,255,0.006)'/%3E%3Crect x='2' y='2' width='1' height='1' fill='rgba(0,0,0,0.01)'/%3E%3C/svg%3E")`,
            backgroundSize: '4px 4px',
          }}
        />

        {/* Label plates row */}
        <div className="relative flex items-center justify-between" style={{ gap: 12 }}>
          {/* WARNING label plate */}
          <div
            style={{
              background: '#c8c0a8',
              border: '1px solid #888',
              padding: '4px 10px',
              minWidth: 180,
              boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                fontWeight: 800,
                color: '#1a1a18',
                letterSpacing: 2,
                marginBottom: 2,
              }}
            >
              WARNING
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 6,
                color: '#3a3a30',
                lineHeight: 1.4,
                letterSpacing: 0.3,
              }}
            >
              NO USER SERVICEABLE PARTS INSIDE.
              <br />
              REFER ALL SERVICING TO QUALIFIED
              <br />
              TECHNICAL PERSONNEL ONLY.
            </div>
          </div>

          {/* Serial number center */}
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 14,
              fontWeight: 700,
              color: '#888880',
              letterSpacing: 4,
            }}
          >
            15006
          </div>

          {/* CAUTION label plate */}
          <div
            style={{
              background: '#c8c0a8',
              border: '1px solid #888',
              padding: '4px 10px',
              minWidth: 180,
              boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                fontWeight: 800,
                color: '#1a1a18',
                letterSpacing: 2,
                marginBottom: 2,
              }}
            >
              &#9889; CAUTION &#9889;
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 6.5,
                color: '#3a3a30',
                lineHeight: 1.4,
                letterSpacing: 0.5,
              }}
            >
              HIGH DC ELECTRIC SHOCK
              <br />
              DO NOT OPEN
            </div>
          </div>
        </div>
      </div>

      {/* === BOTTOM SECTION: Metal plate with vents === */}
      <div
        className="relative w-full"
        style={{
          background: 'linear-gradient(180deg, #484848 0%, #3a3a3a 50%, #2e2e2e 100%)',
          padding: '10px 20px 14px',
          borderTop: '1px solid #555',
          borderBottom: '2px solid #1a1a1a',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          minHeight: 80,
        }}
      >
        {/* CE + fine print row */}
        <div className="flex items-center justify-center gap-4" style={{ marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 5.5,
              color: '#888',
              letterSpacing: 0.5,
              textAlign: 'center',
              lineHeight: 1.4,
              maxWidth: 500,
            }}
          >
            WARNING: &#9889; To reduce the risk of fire or electric shock, do not expose this equipment to rain or moisture.
            Do not remove cover. No user-serviceable parts inside. Refer servicing to qualified service personnel.
          </div>
        </div>

        {/* CE mark */}
        <div className="flex items-center justify-center gap-6" style={{ marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 16,
              fontWeight: 800,
              color: '#777',
              letterSpacing: 3,
            }}
          >
            CE
          </div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, color: '#666', letterSpacing: 1 }}>
            S / I
          </div>
        </div>

        {/* Ventilation grilles */}
        <div className="flex justify-center gap-4" style={{ marginBottom: 8 }}>
          {[0, 1, 2].map((group) => (
            <div key={group} className="flex flex-col" style={{ gap: 2 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 80,
                    height: 3,
                    background: '#111',
                    borderRadius: 1,
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row: restart switch + power connector */}
        <div className="flex items-center justify-between">
          {/* Restart switch */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            style={{
              width: 36,
              height: 24,
              borderRadius: 3,
              background: 'linear-gradient(180deg, #3a9a8a 0%, #2a7a6a 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 0 2px #1a4a3a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 14, height: 3, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
          </motion.div>

          {/* Restart label */}
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, color: '#666', letterSpacing: 1, marginLeft: -40 }}>
            Restart
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Power connector */}
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 35%, #333, #111)',
              border: '2px solid #444',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#222',
                border: '1px solid #555',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
