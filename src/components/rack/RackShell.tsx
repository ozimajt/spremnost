'use client';

import { ReactNode } from 'react';

interface RackShellProps {
  children: ReactNode;
}

export default function RackShell({ children }: RackShellProps) {
  return (
    <div className="min-h-screen w-full flex justify-center" style={{ background: '#111' }}>
      <div
        className="relative w-full flex"
        style={{ maxWidth: '960px', minHeight: '100vh' }}
      >
        {/* Left rack rail */}
        <div
          className="shrink-0"
          style={{
            width: '40px',
            backgroundImage: 'url(/rack-bg.webp)',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% auto',
            backgroundPosition: 'left top',
          }}
        />

        {/* Module bay */}
        <div
          className="flex-1 flex flex-col"
          style={{
            background: '#0a0a0a',
            minHeight: '100vh',
          }}
        >
          {children}
        </div>

        {/* Right rack rail */}
        <div
          className="shrink-0"
          style={{
            width: '40px',
            backgroundImage: 'url(/rack-bg.webp)',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% auto',
            backgroundPosition: 'right top',
            transform: 'scaleX(-1)',
          }}
        />
      </div>
    </div>
  );
}
