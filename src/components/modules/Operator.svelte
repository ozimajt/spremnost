<script>
  const members = [
    { initials: 'JM', name: 'JOZEF\nMICHALEK', role: 'OVERLORD', isOverlord: true },
    { initials: 'JD', name: 'JANKO\nDRAGOVIC', role: 'OPERATER', isOverlord: false },
    { initials: 'MM', name: 'MARKO\nMIJATOVIC', role: 'OPERATER', isOverlord: false },
    { initials: 'IK', name: 'IGOR\nKADIC', role: 'OPERATER', isOverlord: false },
  ];
</script>

<div class="op-panel">
  <!-- Corner screws -->
  <div class="screw screw-tl"></div>
  <div class="screw screw-tr"></div>
  <div class="screw screw-bl"></div>
  <div class="screw screw-br"></div>

  <!-- LEFT SECTION: Title + readouts -->
  <div class="op-left">
    <div class="op-date">1·2·1983</div>
    <div class="op-title">ОПЕРАТОР</div>
    <div class="op-subtitle">OPERATOR · OPERÁTOR · OPERATER</div>

    <!-- Red LED readouts with labels on the right -->
    <div class="op-readouts">
      <div class="op-readout-row">
        <div class="op-readout-display">888888</div>
        <div class="op-readout-indicator">S</div>
        <div class="op-readout-label">
          <span class="op-lbl-main">KÓD</span>
          <span class="op-lbl-cyr">КОД</span>
        </div>
      </div>
      <div class="op-readout-row">
        <div class="op-readout-display">888888</div>
        <div class="op-readout-indicator">S</div>
        <div class="op-readout-label">
          <span class="op-lbl-main">ROLA</span>
          <span class="op-lbl-cyr">УЛОГА</span>
        </div>
      </div>
      <div class="op-readout-row">
        <div class="op-readout-display">888888</div>
        <div class="op-readout-indicator">S</div>
        <div class="op-readout-label">
          <span class="op-lbl-main">STAV</span>
          <span class="op-lbl-cyr">СТАЊЕ</span>
        </div>
      </div>
    </div>

    <!-- Bottom: KOD small readout + UPLINK knob -->
    <div class="op-bottom-section">
      <div class="op-bottom-row">
        <div class="op-bottom-label">
          <span class="op-lbl-main">KÓD</span>
          <span class="op-lbl-cyr">КОД</span>
        </div>
        <div class="op-bottom-display">888888</div>
      </div>
      <div class="op-uplink-row">
        <div class="op-uplink-label">
          <span class="op-lbl-main">UPLINK</span>
          <span class="op-lbl-cyr">ВЕЗЕ</span>
        </div>
        <div class="op-knob-small-wrap">
          <div class="op-knob-small">
            <div class="op-knob-small-ring"></div>
          </div>
          <div class="op-knob-small">
            <div class="op-knob-small-ring"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Vertical divider line -->
  <div class="op-divider"></div>

  <!-- RIGHT SECTION: 4 Member columns -->
  <div class="op-members">
    {#each members as member}
      <div class="op-member-col">
        <div class="op-member-name">{@html member.name.replace('\n', '<br>')}</div>
        <div class="op-member-status">
          <span>ČAKÁ NA AKTIVÁCIU</span>
          <span>ЧЕКА ЧЛАНА</span>
        </div>
        <div class="op-member-badge">{member.initials}</div>

        <!-- Large chrome rotary knob -->
        <div class="op-knob">
          <div class="op-knob-outer">
            <div class="op-knob-ring">
              <div class="op-knob-cap">
                <div class="op-knob-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="op-member-role" class:op-role-overlord={member.isOverlord}>
          {member.role}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* ======== OPERATOR PANEL ======== */
  .op-panel {
    background:
      repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.04) 0px,
        rgba(255,255,255,0.07) 1px,
        transparent 1px,
        transparent 4px
      ),
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.02) 0px,
        transparent 1px,
        transparent 8px
      ),
      linear-gradient(170deg,
        #8494a4 0%,
        #6d7f8f 15%,
        #5a6e7e 35%,
        #4e6272 55%,
        #566a7a 75%,
        #6a7a8a 100%
      );
    border: 3px solid #3a4856;
    border-top-color: #8494a4;
    border-left-color: #7a8a9a;
    border-radius: 4px;
    padding: 20px 28px 18px;
    box-shadow:
      inset 2px 2px 0 rgba(255,255,255,0.18),
      inset -2px -2px 0 rgba(0,0,0,0.25),
      0 6px 20px rgba(0,0,0,0.5),
      0 2px 4px rgba(0,0,0,0.3);
    position: relative;
    display: grid;
    grid-template-columns: 240px 1px 1fr;
    gap: 14px;
    min-width: 0;
    overflow: hidden;
  }

  /* Horizontal ridge line across the panel (like in the design) */
  .op-panel::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(to bottom,
      rgba(0,0,0,0.15),
      rgba(0,0,0,0.08) 40%,
      rgba(255,255,255,0.1) 50%,
      rgba(0,0,0,0.1)
    );
    pointer-events: none;
  }

  /* ======== SCREWS ======== */
  .screw {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,
      #e8e4dc, #c8c4bc 30%, #a8a49c 55%, #8a8680 80%, #706c66 100%);
    border: 1px solid rgba(0,0,0,0.4);
    box-shadow:
      inset 0 1px 3px rgba(255,255,255,0.6),
      inset 0 -1px 2px rgba(0,0,0,0.3),
      0 2px 4px rgba(0,0,0,0.5);
    z-index: 2;
  }
  .screw::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 1.5px;
    background: linear-gradient(to right,
      rgba(0,0,0,0.5), rgba(0,0,0,0.15), rgba(0,0,0,0.5));
    transform: translate(-50%, -50%) rotate(30deg);
    border-radius: 1px;
  }
  .screw::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 1.5px;
    background: linear-gradient(to right,
      rgba(0,0,0,0.5), rgba(0,0,0,0.15), rgba(0,0,0,0.5));
    transform: translate(-50%, -50%) rotate(-60deg);
    border-radius: 1px;
  }
  .screw-tl { top: 8px; left: 8px; }
  .screw-tr { top: 8px; right: 8px; }
  .screw-bl { bottom: 8px; left: 8px; }
  .screw-br { bottom: 8px; right: 8px; }

  /* ======== LEFT SECTION ======== */
  .op-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .op-date {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.5px;
  }

  .op-title {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(28px, 3.2vw, 42px);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 4px;
    line-height: 1;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    margin-bottom: 1px;
  }

  .op-subtitle {
    font-family: var(--font-tech, 'Share Tech Mono', monospace);
    font-size: 8.5px;
    color: rgba(255,255,255,0.45);
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  /* ======== RED LED READOUTS ======== */
  .op-readouts {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .op-readout-row {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .op-readout-display {
    background: #0e0604;
    border: 2px solid #1a0e0a;
    border-radius: 2px;
    padding: 2px 6px;
    font-family: var(--font-lcd7, 'DSEG7 Classic', monospace);
    font-size: 17px;
    color: #ff3333;
    text-shadow: 0 0 8px #ff3333, 0 0 16px rgba(255,51,51,0.3);
    letter-spacing: 2px;
    min-width: 105px;
    box-shadow:
      inset 0 0 10px rgba(0,0,0,0.9),
      inset 0 1px 3px rgba(0,0,0,0.5),
      0 1px 2px rgba(0,0,0,0.3);
  }

  .op-readout-indicator {
    width: 14px;
    height: 14px;
    background: #0e0604;
    border: 1px solid #1a0e0a;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-lcd14, 'DSEG14 Classic', monospace);
    font-size: 9px;
    color: #ff3333;
    text-shadow: 0 0 4px #ff3333;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.8);
  }

  .op-readout-label {
    display: flex;
    flex-direction: column;
    margin-left: 4px;
    min-width: 38px;
  }

  .op-lbl-main {
    font-family: var(--font-tech, 'Share Tech Mono', monospace);
    font-size: 8.5px;
    color: rgba(255,255,255,0.6);
    letter-spacing: 1.2px;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .op-lbl-cyr {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: 7.5px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.8px;
    line-height: 1.15;
  }

  /* ======== DIVIDER ======== */
  .op-divider {
    width: 1px;
    background: linear-gradient(to bottom,
      transparent 5%,
      rgba(255,255,255,0.12) 20%,
      rgba(255,255,255,0.08) 80%,
      transparent 95%
    );
    align-self: stretch;
  }

  /* ======== BOTTOM LEFT: KOD + UPLINK ======== */
  .op-bottom-section {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 6px;
  }

  .op-bottom-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .op-bottom-label {
    display: flex;
    flex-direction: column;
  }

  .op-bottom-display {
    background: #0e0604;
    border: 2px solid #1a0e0a;
    border-radius: 2px;
    padding: 1px 5px;
    font-family: var(--font-lcd7, 'DSEG7 Classic', monospace);
    font-size: 11px;
    color: #ff3333;
    text-shadow: 0 0 4px #ff3333;
    letter-spacing: 1px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.8);
  }

  .op-uplink-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .op-uplink-label {
    display: flex;
    flex-direction: column;
  }

  .op-knob-small-wrap {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* ======== SMALL KNOBS (uplink) ======== */
  .op-knob-small {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 25%,
      #4a4a4a, #1e1e1e 75%);
    border: 2px solid #3a3a3a;
    box-shadow:
      0 2px 6px rgba(0,0,0,0.6),
      inset 0 1px 1px rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .op-knob-small-ring {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 30%,
      #888, #555 50%, #3a3a3a 100%);
    border: 1px solid #555;
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.25);
  }

  /* ======== MEMBER COLUMNS ======== */
  .op-members {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    min-width: 0;
    align-self: stretch;
  }

  .op-member-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 4px 6px;
    background: rgba(0,0,0,0.06);
    border-radius: 2px;
    border: 1px solid rgba(255,255,255,0.04);
    min-width: 0;
  }

  .op-member-name {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(8px, 0.9vw, 11px);
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.2;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  .op-member-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-tech, 'Share Tech Mono', monospace);
    font-size: 6.5px;
    color: rgba(255,255,255,0.38);
    letter-spacing: 0.6px;
    text-align: center;
    line-height: 1.3;
    gap: 0;
  }

  .op-member-badge {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(145deg, #1e2848, #141c38);
    border: 2px solid rgba(200,200,200,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-weight: 700;
    font-size: 12px;
    color: rgba(255,255,255,0.65);
    box-shadow:
      inset 0 2px 5px rgba(0,0,0,0.6),
      0 1px 3px rgba(0,0,0,0.4);
    letter-spacing: 0.5px;
  }

  /* ======== LARGE CHROME ROTARY KNOB ======== */
  .op-knob {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .op-knob-outer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 25%,
      #3a3a3a, #181818 80%);
    border: 2px solid #404040;
    box-shadow:
      0 4px 10px rgba(0,0,0,0.7),
      0 1px 3px rgba(0,0,0,0.5),
      inset 0 1px 1px rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .op-knob-ring {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      #7a7a7a 0deg,
      #b8b8b8 20deg,
      #8a8a8a 45deg,
      #cccccc 70deg,
      #999999 95deg,
      #dddddd 120deg,
      #aaaaaa 145deg,
      #cccccc 170deg,
      #888888 195deg,
      #bbbbbb 220deg,
      #999999 245deg,
      #dddddd 270deg,
      #aaaaaa 295deg,
      #bbbbbb 320deg,
      #888888 345deg,
      #7a7a7a 360deg
    );
    border: 1px solid rgba(100,100,100,0.6);
    box-shadow:
      inset 0 0 6px rgba(0,0,0,0.25),
      0 1px 3px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .op-knob-cap {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%,
      #f0f0f0, #c0c0c0 40%, #909090 80%, #787878 100%);
    border: 1px solid rgba(100,100,100,0.5);
    box-shadow:
      inset 0 1px 4px rgba(255,255,255,0.7),
      inset 0 -1px 2px rgba(0,0,0,0.25);
    position: relative;
  }

  .op-knob-line {
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 6px;
    border-radius: 1px;
    background: #444;
  }

  /* ======== ROLE BADGES ======== */
  .op-member-role {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(7px, 0.75vw, 9px);
    font-weight: 700;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.55);
    background: rgba(0,0,0,0.2);
    padding: 3px 8px;
    border-radius: 2px;
    border: 1px solid rgba(255,255,255,0.08);
    text-align: center;
    white-space: nowrap;
  }

  .op-role-overlord {
    background: #b22222;
    color: #fff;
    border-color: rgba(220,60,60,0.5);
    box-shadow: 0 0 8px rgba(178,34,34,0.35);
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  /* ======== RESPONSIVE ======== */
  @media (max-width: 900px) {
    .op-panel {
      grid-template-columns: 1fr;
    }
    .op-divider {
      width: auto;
      height: 1px;
      background: linear-gradient(to right,
        transparent 5%,
        rgba(255,255,255,0.12) 20%,
        rgba(255,255,255,0.08) 80%,
        transparent 95%
      );
    }
    .op-members {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .op-members {
      grid-template-columns: 1fr 1fr;
    }
    .op-panel {
      padding: 16px 14px;
    }
  }
</style>
