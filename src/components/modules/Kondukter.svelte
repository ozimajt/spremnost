<script>
  import Toggle from '../ui/Toggle.svelte';
  import Led from '../ui/Led.svelte';

  let offline = $state(true);
  let zvuk = $state(false);
  let crt = $state(true);
  let alarm = $state(false);

  const buttons = [
    { sk: 'ZÁSOBY', sr: 'ЗАЛИХЕ', led: 'green' },
    { sk: 'MAPA', sr: 'КАРТА', led: 'green' },
    { sk: 'PLATO', sr: 'ПЛАТО', led: 'amber' },
    { sk: 'ZÁHRADA', sr: 'БАШТА', led: 'green' },
    { sk: 'SPRIEVODCA', sr: 'ВОДИЧ', led: 'green' },
    { sk: 'ČLENOVIA', sr: 'ЧЛАНОВИ', led: 'amber' },
    { sk: 'NÁVRHY', sr: 'ПРЕДЛОЗИ', led: 'green' },
    { sk: 'POPLACH', sr: 'УЗБУНА', led: 'red', danger: true },
  ];
</script>

<div class="kondukter-panel">
  <!-- Title section -->
  <div class="kondukter-title-section">
    <div class="kondukter-title">Кондуктер</div>
    <div class="kondukter-subtitle">УПРАВЛЕНИЕ</div>
    <div class="kondukter-tertiary">CONTROLS · OVLÁDANIE · KONTROLE</div>
  </div>

  <!-- Button grid -->
  <div class="kondukter-btn-grid">
    {#each buttons as btn}
      <div class="kondukter-btn-cell">
        <button class="kondukter-btn" class:kondukter-btn-danger={btn.danger}>
          <span class="kondukter-btn-icon">{btn.danger ? '▲' : '◉'}</span>
          <div class="kondukter-btn-labels">
            <span class="kondukter-btn-sk">{btn.sk}</span>
            <span class="kondukter-btn-sr">{btn.sr}</span>
          </div>
        </button>
        <div class="kondukter-led-dot" class:led-green={btn.led === 'green'} class:led-amber={btn.led === 'amber'} class:led-red={btn.led === 'red'}></div>
      </div>
    {/each}
  </div>

  <!-- Toggle switches section -->
  <div class="kondukter-toggles-section">
    <div class="kondukter-toggle-labels-top">
      <span>ZVUK<br><small>ЗВУК</small></span>
      <span>CRT<br><small>ЕКРАН</small></span>
      <span>ALARM<br><small>АЛАРМ</small></span>
      <span>OFFLINE<br><small>ОФЛАЈН</small></span>
    </div>
    <div class="kondukter-toggles-row">
      <Toggle bind:on={zvuk} />
      <Toggle bind:on={crt} />
      <Toggle bind:on={alarm} />
      <Toggle bind:on={offline} />
    </div>
    <div class="kondukter-toggle-labels-bottom">
      <span>OFFLINE<br><small>ОФЛАЈН</small></span>
      <span>CRT<br><small>ЕКРАН</small></span>
      <span>ALARM<br><small>АЛАРМ</small></span>
      <span>OFFLINE<br><small>ОФЛАЈН</small></span>
    </div>
  </div>

  <!-- Logout button -->
  <div class="kondukter-logout-section">
    <button class="kondukter-logout-btn">
      <span class="kondukter-logout-icon">⏻</span>
      <div class="kondukter-logout-labels">
        <span>LOGOUT · ODHLÁSIŤ</span>
        <span class="kondukter-logout-sr">ОДЈАВА · ВЫХОД</span>
      </div>
    </button>
  </div>
</div>

<style>
  /* Panel container - horizontal rack module layout */
  .kondukter-panel {
    display: flex;
    align-items: stretch;
    background:
      repeating-conic-gradient(rgba(0,0,0,0.015) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px,
      linear-gradient(180deg, #e8dcc8 0%, #ddd0b8 50%, #d5c8aa 100%);
    border: 3px solid var(--panel-700, #3A3F2C);
    border-radius: var(--radius, 2px);
    box-shadow:
      inset 3px 3px 0 var(--bevel-light, rgba(255,255,255,0.35)),
      inset -3px -3px 0 var(--bevel-dark, rgba(0,0,0,0.45)),
      0 4px 11px rgba(0,0,0,0.35);
    padding: 16px 20px;
    gap: 20px;
    min-height: 140px;
    position: relative;
  }

  /* Screw dots */
  .kondukter-panel::before {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--bakelite, #2a2419);
    box-shadow:
      0 calc(100% - 8px) 0 var(--bakelite, #2a2419);
  }

  /* Title section - left side */
  .kondukter-title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 16px;
    border-right: 1px dashed var(--panel-600, #50533C);
    min-width: 140px;
    flex-shrink: 0;
  }

  .kondukter-title {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(22px, 2.2vw, 32px);
    font-weight: 700;
    color: var(--panel-800, #2C2E25);
    letter-spacing: 1px;
    line-height: 1.1;
  }

  .kondukter-subtitle {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(10px, 0.9vw, 13px);
    font-weight: 500;
    color: var(--panel-600, #50533C);
    letter-spacing: 2px;
    margin-top: 4px;
  }

  .kondukter-tertiary {
    font-family: var(--font-tech, 'Share Tech Mono', monospace);
    font-size: clamp(8px, 0.7vw, 10px);
    color: var(--panel-600, #50533C);
    letter-spacing: 1px;
    margin-top: 3px;
  }

  /* Button grid - center */
  .kondukter-btn-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    flex: 1;
    align-content: center;
  }

  .kondukter-btn-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .kondukter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(180deg, #f5f0e8 0%, #e8dcc8 40%, #d8ccb0 100%);
    color: var(--panel-800, #2C2E25);
    border: 2px solid #999;
    border-color: #bbb #888 #777 #aaa;
    border-radius: 3px;
    padding: 8px 10px;
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(9px, 0.8vw, 12px);
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    cursor: pointer;
    min-width: 110px;
    min-height: 48px;
    box-shadow:
      0 3px 0 #999,
      0 4px 6px rgba(0,0,0,0.25),
      inset 0 1px 0 rgba(255,255,255,0.7),
      inset 0 -1px 0 rgba(0,0,0,0.15);
    transition: all 80ms ease-out;
    position: relative;
    text-align: left;
    line-height: 1.15;
  }

  .kondukter-btn:hover {
    background: linear-gradient(180deg, #fff 0%, #f0e8d8 40%, #e0d4be 100%);
    transform: translateY(-1px);
    box-shadow:
      0 4px 0 #999,
      0 5px 8px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.7),
      inset 0 -1px 0 rgba(0,0,0,0.15);
  }

  .kondukter-btn:active {
    transform: translateY(2px);
    box-shadow:
      0 1px 0 #999,
      inset 0 2px 4px rgba(0,0,0,0.3);
  }

  .kondukter-btn-danger {
    background: linear-gradient(180deg, #d44 0%, #b22222 40%, #8b1a1a 100%);
    color: var(--cream, #E8DCC8);
    border-color: #c44 #811 #711 #a33;
    box-shadow:
      0 3px 0 #611,
      0 4px 6px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -1px 0 rgba(0,0,0,0.3);
  }

  .kondukter-btn-danger:hover {
    background: linear-gradient(180deg, #e55 0%, #c33 40%, #a22 100%);
  }

  .kondukter-btn-danger .kondukter-btn-sr {
    color: rgba(232, 220, 200, 0.7);
  }

  .kondukter-btn-icon {
    font-size: 0.8em;
    flex-shrink: 0;
  }

  .kondukter-btn-labels {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .kondukter-btn-sk {
    font-size: 1em;
  }

  .kondukter-btn-sr {
    font-size: 0.78em;
    color: var(--panel-600, #50533C);
    font-weight: 500;
    letter-spacing: 0.8px;
  }

  /* LED dots below buttons */
  .kondukter-led-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #333;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.5);
  }

  .kondukter-led-dot.led-green {
    background: radial-gradient(circle at 35% 35%, #aaffaa, #33cc33 60%, #228822);
    box-shadow: 0 0 4px #33cc33, 0 0 8px rgba(51,204,51,0.4);
  }

  .kondukter-led-dot.led-amber {
    background: radial-gradient(circle at 35% 35%, #ffdd88, #e6a817 60%, #aa7711);
    box-shadow: 0 0 4px #e6a817, 0 0 8px rgba(230,168,23,0.4);
  }

  .kondukter-led-dot.led-red {
    background: radial-gradient(circle at 35% 35%, #ff8866, #cd2500 60%, #881100);
    box-shadow: 0 0 4px #cd2500, 0 0 8px rgba(205,37,0,0.4);
  }

  /* Toggle switches section - recessed dark area */
  .kondukter-toggles-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.06) 100%);
    border: 1px solid var(--panel-600, #50533C);
    border-radius: 3px;
    padding: 10px 14px;
    box-shadow: inset 0 1px 4px rgba(0,0,0,0.15);
    flex-shrink: 0;
  }

  .kondukter-toggle-labels-top,
  .kondukter-toggle-labels-bottom {
    display: flex;
    gap: 16px;
    justify-content: space-around;
    width: 100%;
  }

  .kondukter-toggle-labels-top span,
  .kondukter-toggle-labels-bottom span {
    font-family: var(--font-tech, 'Share Tech Mono', monospace);
    font-size: 9px;
    color: var(--panel-700, #3A3F2C);
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.2;
    min-width: 50px;
  }

  .kondukter-toggle-labels-top small,
  .kondukter-toggle-labels-bottom small {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: 8px;
    color: var(--panel-600, #50533C);
    letter-spacing: 0.5px;
  }

  .kondukter-toggles-row {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  /* Logout section - far right */
  .kondukter-logout-section {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kondukter-logout-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: linear-gradient(180deg, var(--panel-700, #3A3F2C) 0%, var(--panel-800, #2C2E25) 100%);
    color: var(--cream, #E8DCC8);
    border: 3px solid var(--panel-800, #2C2E25);
    border-radius: 3px;
    padding: 14px 16px;
    min-height: 100%;
    cursor: pointer;
    box-shadow:
      inset 1px 1px 0 rgba(255,255,255,0.15),
      inset -1px -1px 0 rgba(0,0,0,0.3),
      0 3px 0 rgba(0,0,0,0.5),
      0 4px 8px rgba(0,0,0,0.4);
    transition: all 80ms ease-out;
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: clamp(8px, 0.75vw, 11px);
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3;
    min-width: 90px;
  }

  .kondukter-logout-btn:hover {
    background: linear-gradient(180deg, var(--panel-800, #2C2E25) 0%, #1a1c15 100%);
  }

  .kondukter-logout-btn:active {
    transform: translateY(2px);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
  }

  .kondukter-logout-icon {
    font-size: 18px;
  }

  .kondukter-logout-labels {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .kondukter-logout-sr {
    font-size: 0.85em;
    color: rgba(232, 220, 200, 0.6);
    font-weight: 500;
  }
</style>
