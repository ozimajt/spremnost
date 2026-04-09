'use client';

export default function HeaderModule() {
  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{
        height: '120px',
        background: '#1a1a18',
        /* Leather/vinyl grain texture via noise */
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        /* Top bevel - lighter edge */
        borderTop: '1px solid #2a2a28',
        /* Bottom bevel - darker edge */
        borderBottom: '2px solid #0e0e0d',
        /* Side bevels */
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3)',
      }}
    >
      {/* Subtle inner grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='1' fill='rgba(255,255,255,0.008)'/%3E%3Crect x='2' y='2' width='1' height='1' fill='rgba(0,0,0,0.015)'/%3E%3C/svg%3E")`,
          backgroundSize: '4px 4px',
        }}
      />

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-0">
        <img
          src="/spremnost-logo.svg"
          alt="Спремност"
          style={{
            height: '80px',
            width: 'auto',
            filter: 'brightness(0) invert(0.78) sepia(0.05) saturate(0.2)',
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
