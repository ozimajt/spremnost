<script>
  import Operator from '../modules/Operator.svelte';
  import Readiness from '../modules/Readiness.svelte';
  import Chronometer from '../modules/Chronometer.svelte';
  import Kondukter from '../modules/Kondukter.svelte';
  import Inventory from '../modules/Inventory.svelte';
  import Feed from '../modules/Feed.svelte';
  import MapModule from '../modules/MapModule.svelte';
  import Led from '../ui/Led.svelte';
  import Ticker from '../ui/Ticker.svelte';
</script>

<div class="rack-frame">

  <!-- Left rail -->
  <div class="rack-rail rail-left">
    <div class="rail-surface"></div>
  </div>

  <!-- Module bay (everything between the rails) -->
  <div class="module-bay">

    <!-- ═══════ HEADER MODULE ═══════ -->
    <div class="header-module">
      <div class="header-screw screw-tl"></div>
      <div class="header-screw screw-tr"></div>
      <div class="header-screw screw-bl"></div>
      <div class="header-screw screw-br"></div>
      <div class="header-texture">
        <div class="header-brand">
          <div class="header-emblem">
            <svg viewBox="0 0 80 80" class="globe-icon" xmlns="http://www.w3.org/2000/svg">
              <!-- Wireframe globe -->
              <ellipse cx="40" cy="40" rx="28" ry="28" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <ellipse cx="40" cy="40" rx="12" ry="28" fill="none" stroke="currentColor" stroke-width="1"/>
              <ellipse cx="40" cy="40" rx="22" ry="28" fill="none" stroke="currentColor" stroke-width="0.8"/>
              <line x1="12" y1="40" x2="68" y2="40" stroke="currentColor" stroke-width="1"/>
              <line x1="15" y1="25" x2="65" y2="25" stroke="currentColor" stroke-width="0.8"/>
              <line x1="15" y1="55" x2="65" y2="55" stroke="currentColor" stroke-width="0.8"/>
              <!-- Horizontal bars above/below globe -->
              <line x1="5" y1="8" x2="75" y2="8" stroke="currentColor" stroke-width="2"/>
              <line x1="5" y1="72" x2="75" y2="72" stroke="currentColor" stroke-width="2"/>
              <line x1="8" y1="5" x2="72" y2="5" stroke="currentColor" stroke-width="1.5"/>
              <line x1="8" y1="75" x2="72" y2="75" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="header-title">Спремност</div>
          <div class="header-subtitle">MODULAR SURVIVAL SYSTEM</div>
        </div>
      </div>
    </div>

    <!-- ═══════ SYSTEM STATUS BAR ═══════ -->
    <div class="status-bar">
      <div class="status-block"><Led color="green" animation="pulse" size="large" /><span class="status-label">PWR</span></div>
      <div class="status-block"><Led color="green" size="large" /><span class="status-label">LOCAL</span></div>
      <div class="status-block"><Led color="amber" animation="blink" size="large" /><span class="status-label">UPLINK</span></div>
      <div class="status-block"><Led color="green" size="large" /><span class="status-label">CRYPT</span></div>
      <div class="status-block"><Led color="off" size="large" /><span class="status-label">ALARM</span></div>
    </div>

    <!-- ═══════ MODULE STACK ═══════ -->
    <div class="module-stack">
      <Kondukter />
      <Chronometer />
      <Inventory />
      <Readiness />
      <Operator />
      <Feed />
      <MapModule />
    </div>

    <!-- ═══════ TICKER ═══════ -->
    <Ticker text="▸▸▸ SPREMNOST CONTROL NET · v0.1.0 · ЈЕДИНСТВО — ОТПОРНОСТ — ЗНАЊЕ · Jednota — Odolnosť — Vedomosti · ЕДИНСТВО — СТОЙКОСТЬ — ЗНАНИЕ · 4 ČLENOV ČAKÁ NA AKTIVÁCIU · JOZEF MICHALEK · JANKO DRAGOVIC · MARKO MIJATOVIC · IGOR KADIC · PERTH METRO GRID 50H ▸▸▸" />

    <!-- ═══════ BOTTOM PLATE ═══════ -->
    <div class="bottom-plate">
      <div class="bottom-screw screw-tl"></div>
      <div class="bottom-screw screw-tr"></div>
      <div class="bottom-screw screw-bl"></div>
      <div class="bottom-screw screw-br"></div>

      <!-- Top section: textured panel with labels -->
      <div class="bottom-texture">
        <div class="bottom-label-row">
          <div class="label-plate warning-label">
            <span class="label-title">WARNING</span>
            <span class="label-text">Do not expose to moisture</span>
            <span class="label-text">Operate in ventilated area</span>
            <span class="label-text">Refer servicing to qualified personnel</span>
          </div>
          <div class="serial-plate">
            <span class="serial-number">15006</span>
          </div>
          <div class="label-plate caution-label">
            <span class="label-title">&#9889; CAUTION &#9889;</span>
            <span class="label-text">HIGH DC ELECTRIC SHOCK</span>
            <span class="label-text">DO NOT OPEN</span>
          </div>
        </div>
        <div class="bottom-info-row">
          <div class="ce-mark">CE</div>
          <div class="fine-print">WARNING: This equipment generates, uses, and can radiate radio frequency energy. If not installed in accordance with instructions, may cause harmful interference. Operated under SPREMNOST protocols. MIL-STD-810H compliant. Serial batch 15006. Assembled ПЕРТ, WA.</div>
        </div>
      </div>

      <!-- Bottom section: vents and controls -->
      <div class="bottom-controls">
        <div class="vent-grille">
          <div class="vent-slit"></div>
          <div class="vent-slit"></div>
          <div class="vent-slit"></div>
          <div class="vent-slit"></div>
          <div class="vent-slit"></div>
          <div class="vent-slit"></div>
        </div>
        <div class="bottom-hw">
          <div class="restart-switch">
            <div class="switch-body">
              <div class="switch-toggle"></div>
            </div>
            <span class="switch-label">RESTART</span>
          </div>
          <div class="power-connector">
            <div class="connector-body">
              <div class="connector-pins"></div>
            </div>
            <span class="connector-label">AC IN</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Right rail -->
  <div class="rack-rail rail-right">
    <div class="rail-surface"></div>
  </div>

</div>

<style>
  /* ════════ RACK FRAME ════════ */
  .rack-frame {
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    background: var(--panel-800);
    min-height: 100vh;
    position: relative;
  }

  /* ════════ RACK RAILS ════════ */
  .rack-rail {
    width: 38px;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }

  .rail-surface {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/rack-bg.webp');
    background-size: 38px auto;
    background-repeat: repeat-y;
    box-shadow: inset 0 0 12px rgba(0,0,0,0.6);
  }

  .rail-left .rail-surface {
    border-right: 1px solid rgba(255,255,255,0.08);
  }

  .rail-right .rail-surface {
    border-left: 1px solid rgba(255,255,255,0.08);
  }

  /* ════════ MODULE BAY ════════ */
  .module-bay {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* ════════ MODULE STACK ════════ */
  .module-stack {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .module-stack > :global(*) {
    width: 100%;
  }

  /* ════════ STATUS BAR ════════ */
  .status-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 8px 16px;
    background: linear-gradient(180deg, #2a2c22 0%, #232520 50%, #1e201a 100%);
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }

  .status-block {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-label {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    color: #888;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* ════════ HEADER MODULE ════════ */
  .header-module {
    position: relative;
    padding: 32px 24px 28px;
    background:
      repeating-radial-gradient(circle at 1px 1px, transparent 0, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px),
      linear-gradient(180deg,
        #2e2e28 0%,
        #252521 8%,
        #1f1f1b 20%,
        #222220 40%,
        #1c1c19 60%,
        #202020 80%,
        #1a1a18 100%
      );
    background-size: 3px 3px, 100% 100%;
    border-bottom: 2px solid rgba(0,0,0,0.5);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.04),
      inset 0 -1px 0 rgba(0,0,0,0.3),
      0 2px 8px rgba(0,0,0,0.4);
    overflow: hidden;
  }

  /* Leather/vinyl texture overlay */
  .header-texture {
    position: relative;
    z-index: 1;
  }

  .header-module::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(60,60,50,0.3) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(60,60,50,0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(40,40,35,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Noise-like grain texture */
  .header-module::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
    background-size: 100px 100px;
    opacity: 0.6;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  .header-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .header-emblem {
    width: 52px;
    height: 52px;
    margin-bottom: 4px;
  }

  .globe-icon {
    width: 100%;
    height: 100%;
    color: #b0ad9e;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
  }

  .header-title {
    font-family: 'Share Tech Mono', var(--font-mono);
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    letter-spacing: 6px;
    color: #c8c4b4;
    text-transform: uppercase;
    text-shadow:
      0 1px 0 rgba(255,255,255,0.15),
      0 -1px 0 rgba(0,0,0,0.6),
      0 2px 6px rgba(0,0,0,0.4),
      0 0 20px rgba(180,175,160,0.08);
    /* Embossed/metallic look */
    background: linear-gradient(180deg, #d4d0c0 0%, #a8a494 40%, #b8b4a4 60%, #908c7c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 3px rgba(0,0,0,0.5));
  }

  .header-subtitle {
    font-family: var(--font-mono);
    font-size: clamp(8px, 1.2vw, 11px);
    font-weight: 500;
    letter-spacing: 4px;
    color: #7a7868;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }

  /* Screws */
  .header-screw, .bottom-screw {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #6a6a60, #3a3a34);
    border: 1px solid rgba(0,0,0,0.5);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,0.15),
      0 1px 3px rgba(0,0,0,0.4);
    z-index: 5;
  }

  .header-screw::after, .bottom-screw::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 1.5px;
    background: rgba(0,0,0,0.4);
    transform: translate(-50%, -50%) rotate(35deg);
    border-radius: 1px;
  }

  .screw-tl { top: 10px; left: 10px; }
  .screw-tr { top: 10px; right: 10px; }
  .screw-bl { bottom: 10px; left: 10px; }
  .screw-br { bottom: 10px; right: 10px; }

  /* ════════ BOTTOM PLATE ════════ */
  .bottom-plate {
    position: relative;
    display: flex;
    flex-direction: column;
    border-top: 2px solid rgba(0,0,0,0.5);
  }

  .bottom-texture {
    padding: 16px 36px 12px;
    background:
      repeating-radial-gradient(circle at 1px 1px, transparent 0, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px),
      linear-gradient(180deg,
        #2a2a26 0%,
        #222220 30%,
        #1e1e1b 60%,
        #1c1c19 100%
      );
    background-size: 3px 3px, 100% 100%;
    position: relative;
    overflow: hidden;
  }

  .bottom-texture::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
    background-size: 100px 100px;
    opacity: 0.6;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  .bottom-label-row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  .label-plate {
    border: 1px solid rgba(255,255,255,0.12);
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: rgba(0,0,0,0.3);
  }

  .label-title {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    color: #d0cec0;
    letter-spacing: 2px;
    margin-bottom: 2px;
  }

  .label-text {
    font-family: var(--font-mono);
    font-size: 7px;
    color: #8a8878;
    letter-spacing: 0.5px;
    line-height: 1.4;
  }

  .serial-plate {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 16px;
  }

  .serial-number {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 700;
    color: #7a7868;
    letter-spacing: 3px;
  }

  .caution-label .label-title {
    text-align: center;
    color: #d4a017;
  }

  .caution-label .label-text {
    text-align: center;
    color: #9a8a60;
  }

  .bottom-info-row {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
  }

  .ce-mark {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 700;
    color: #7a7868;
    flex-shrink: 0;
    letter-spacing: 2px;
  }

  .fine-print {
    font-family: var(--font-mono);
    font-size: 6.5px;
    color: #5a5848;
    line-height: 1.5;
    letter-spacing: 0.3px;
  }

  /* ── Bottom controls: vents + hardware ── */
  .bottom-controls {
    padding: 10px 20px 14px;
    background: linear-gradient(180deg, #3a3a34 0%, #323230 30%, #2e2e2a 60%, #2a2a26 100%);
    border-top: 1px solid rgba(255,255,255,0.04);
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .vent-grille {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .vent-slit {
    height: 3px;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%);
    border-radius: 1px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.02);
  }

  .bottom-hw {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
  }

  .restart-switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .switch-body {
    width: 28px;
    height: 18px;
    background: linear-gradient(180deg, #2a8a7a 0%, #1a6a5a 50%, #0e5a4a 100%);
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.4);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.15),
      0 2px 4px rgba(0,0,0,0.4);
    position: relative;
    cursor: pointer;
  }

  .switch-toggle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    background: linear-gradient(180deg, #3aaa9a 0%, #2a8a7a 100%);
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  }

  .switch-label, .connector-label {
    font-family: var(--font-mono);
    font-size: 7px;
    color: #6a6a60;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .power-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .connector-body {
    width: 30px;
    height: 22px;
    background: linear-gradient(180deg, #1a1a18 0%, #0e0e0c 100%);
    border-radius: 3px;
    border: 2px solid #3a3a34;
    position: relative;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
  }

  .connector-pins {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 8px;
    border: 1px solid #4a4a44;
    border-radius: 2px;
    background: #0a0a08;
  }

  .connector-pins::before,
  .connector-pins::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 3px;
    height: 3px;
    background: #5a5a50;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .connector-pins::before { left: 1px; }
  .connector-pins::after { right: 1px; }
</style>
