<script>
  let now = $state(new Date());

  $effect(() => {
    const interval = setInterval(() => {
      now = new Date();
    }, 1000);
    return () => clearInterval(interval);
  });

  let timeStr = $derived(
    now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  );

  let dateStr = $derived(
    now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()
  );

  // Harvest countdown: 14 days from a fixed target
  let harvestTarget = new Date('2026-04-22T00:00:00');

  let harvestStr = $derived(() => {
    const diff = harvestTarget.getTime() - now.getTime();
    if (diff <= 0) return '00:00:00';
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  });

  let harvestDays = $derived(() => {
    const diff = harvestTarget.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / 86400000));
  });

  // Button grid labels (decorative keypad)
  const keypadRows = [
    ['F1', 'F2', 'F3', 'F4', 'F5'],
    ['1',  '2',  '3',  'A',  'B'],
    ['4',  '5',  '6',  'C',  'D'],
    ['7',  '8',  '9',  'E',  'F'],
    ['*',  '0',  '#',  'EN', 'CL'],
  ];
</script>

<div class="chrono-panel">
  <!-- Corner rivets -->
  <div class="rivet rivet-tl"></div>
  <div class="rivet rivet-tr"></div>
  <div class="rivet rivet-bl"></div>
  <div class="rivet rivet-br"></div>

  <!-- LEFT: Title block + keypad -->
  <div class="chrono-left">
    <div class="chrono-title-block">
      <div class="chrono-main-title">ХРОНОМЕТАР</div>
      <div class="chrono-subtitle">CHRONO &middot; CHRONOMETER &middot; HRONOMETAR</div>
      <div class="chrono-code">ХРОНОМЕТР CHR-001</div>
    </div>

    <div class="keypad">
      {#each keypadRows as row}
        {#each row as key}
          <button class="key-btn" tabindex="-1">{key}</button>
        {/each}
      {/each}
    </div>

    <div class="keypad-label">Tim/Gate</div>
  </div>

  <!-- CENTER: LCD readouts -->
  <div class="chrono-center">
    <div class="readout-row">
      <span class="readout-label">MIESTNY ČAS &middot; МЕСНО ВРЕМЕ</span>
      <div class="readout-lcd lcd-7seg lcd-large">{timeStr}</div>
    </div>

    <div class="readout-row">
      <span class="readout-label">DÁTUM &middot; ДАТУМ</span>
      <div class="readout-lcd lcd-14seg lcd-date">{dateStr}</div>
    </div>

    <div class="readout-row">
      <span class="readout-label">ŽATVA &middot; ЖЕТВА &mdash; {harvestDays()}D</span>
      <div class="readout-lcd lcd-7seg">{harvestStr()}</div>
    </div>

    <div class="readout-row">
      <span class="readout-label">RADIÁCIA &middot; РАДИЈАЦИЈА &mu;Sv/h</span>
      <div class="readout-lcd lcd-7seg">00.12</div>
    </div>
  </div>

  <!-- RIGHT: Rotary knob -->
  <div class="chrono-right">
    <div class="knob-label">Resolution</div>
    <div class="knob-housing">
      <div class="knob">
        <div class="knob-indicator"></div>
      </div>
    </div>
    <div class="knob-readout">
      <span class="knob-value">36</span>
    </div>
    <div class="knob-label">Steps</div>
  </div>
</div>

<style>
  /* ---- CHRONO PANEL ---- */
  .chrono-panel {
    background: var(--panel-700);
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.06) 2px,
        rgba(0,0,0,0.06) 4px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.04) 2px,
        rgba(0,0,0,0.04) 4px
      );
    border: 3px solid var(--panel-800);
    border-radius: var(--radius);
    padding: 16px 18px;
    box-shadow:
      inset 2px 2px 0 rgba(255,255,255,0.08),
      inset -2px -2px 0 rgba(0,0,0,0.3),
      0 4px 12px rgba(0,0,0,0.5);
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: start;
    min-width: 0;
    overflow: hidden;
  }

  /* ---- RIVETS ---- */
  .rivet {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #888, #444 50%, #222 100%);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.6);
    z-index: 2;
  }
  .rivet-tl { top: 6px; left: 6px; }
  .rivet-tr { top: 6px; right: 6px; }
  .rivet-bl { bottom: 6px; left: 6px; }
  .rivet-br { bottom: 6px; right: 6px; }

  /* ---- LEFT COLUMN ---- */
  .chrono-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .chrono-title-block {
    padding-bottom: 8px;
  }
  .chrono-main-title {
    font-family: var(--font-mono);
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 700;
    color: #e8e4d8;
    letter-spacing: 3px;
    line-height: 1.1;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }
  .chrono-subtitle {
    font-family: var(--font-tech);
    font-size: 9px;
    color: #9a9a80;
    letter-spacing: 1.8px;
    margin-top: 3px;
    text-transform: uppercase;
  }
  .chrono-code {
    font-family: var(--font-tech);
    font-size: 9px;
    color: #7a7a64;
    letter-spacing: 1.5px;
    margin-top: 2px;
  }

  /* ---- KEYPAD ---- */
  .keypad {
    display: grid;
    grid-template-columns: repeat(5, 28px);
    grid-auto-rows: 24px;
    gap: 3px;
  }
  .key-btn {
    background: linear-gradient(to bottom, #5a5d48, #42453a);
    border: 1px solid #2a2c22;
    border-radius: 2px;
    color: #b0b098;
    font-family: var(--font-tech);
    font-size: 8px;
    letter-spacing: 0.5px;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      inset 1px 1px 0 rgba(255,255,255,0.1),
      inset -1px -1px 0 rgba(0,0,0,0.2),
      0 1px 2px rgba(0,0,0,0.4);
    transition: all 60ms ease-out;
  }
  .key-btn:hover {
    background: linear-gradient(to bottom, #686b54, #4e5146);
    color: #d0d0b8;
  }
  .key-btn:active {
    transform: translateY(1px);
    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.4);
  }

  .keypad-label {
    font-family: var(--font-tech);
    font-size: 9px;
    color: #7a7a64;
    letter-spacing: 1.5px;
    text-align: center;
    margin-top: 2px;
  }

  /* ---- CENTER: LCD READOUTS ---- */
  .chrono-center {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .readout-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .readout-label {
    font-family: var(--font-tech);
    font-size: 10px;
    color: #b0b098;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    line-height: 1.2;
    min-width: 140px;
    flex-shrink: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  .readout-lcd {
    background: #0c0e08;
    border: 2px inset #1a1c14;
    border-radius: 2px;
    padding: 6px 14px;
    color: #cd2500;
    font-family: var(--font-lcd7);
    font-size: clamp(18px, 1.8vw, 24px);
    letter-spacing: 3px;
    text-shadow:
      0 0 6px #cd2500,
      0 0 12px rgba(205, 37, 0, 0.5),
      0 0 24px rgba(205, 37, 0, 0.2);
    text-align: right;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    box-shadow:
      inset 0 0 10px rgba(0,0,0,0.8),
      inset 0 0 30px rgba(0,0,0,0.3);
    position: relative;
  }

  /* Subtle LCD grid overlay */
  .readout-lcd::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.15) 2px,
      rgba(0,0,0,0.15) 3px
    );
    pointer-events: none;
  }

  .lcd-large {
    font-size: clamp(22px, 2.2vw, 30px);
    padding: 8px 16px;
  }

  .lcd-date {
    font-family: var(--font-lcd14);
    font-size: clamp(16px, 1.6vw, 22px);
  }

  .lcd-14seg {
    font-family: var(--font-lcd14);
  }

  /* ---- RIGHT: ROTARY KNOB ---- */
  .chrono-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 60px;
    padding-top: 6px;
  }

  .knob-label {
    font-family: var(--font-tech);
    font-size: 8px;
    color: #9a9a80;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-align: center;
  }

  .knob-housing {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #1a1c14, #0c0e08);
    border: 2px solid #2a2c22;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      inset 0 0 8px rgba(0,0,0,0.6),
      0 2px 6px rgba(0,0,0,0.5);
  }

  .knob {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      #666 0deg,
      #999 30deg,
      #555 90deg,
      #888 150deg,
      #444 210deg,
      #777 270deg,
      #555 330deg,
      #666 360deg
    );
    border: 2px solid #333;
    position: relative;
    cursor: pointer;
    box-shadow:
      0 2px 6px rgba(0,0,0,0.6),
      inset 0 0 4px rgba(255,255,255,0.1);
  }

  .knob-indicator {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 10px;
    background: #e8e4d8;
    border-radius: 1px;
    box-shadow: 0 0 3px rgba(232, 228, 216, 0.4);
  }

  .knob-readout {
    background: #0c0e08;
    border: 2px inset #1a1c14;
    border-radius: 2px;
    padding: 3px 8px;
    min-width: 36px;
    text-align: center;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
  }

  .knob-value {
    font-family: var(--font-lcd7);
    font-size: 16px;
    color: #cd2500;
    letter-spacing: 2px;
    text-shadow:
      0 0 6px #cd2500,
      0 0 12px rgba(205, 37, 0, 0.4);
  }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 700px) {
    .chrono-panel {
      grid-template-columns: 1fr;
    }
    .chrono-left {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 14px;
    }
    .readout-row {
      flex-direction: column;
      align-items: flex-start;
    }
    .readout-label {
      min-width: 0;
    }
    .chrono-right {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>
