<script>
  // Inventory items with LED states
  // Each item has 20 LED bulbs. States: 'green', 'amber', 'red', 'off'
  const items = [
    {
      sk: 'VODA', cyr: 'ВОДА',
      leds: ['green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','amber','amber','off','off']
    },
    {
      sk: 'JEDLO', cyr: 'ХРАНА',
      leds: ['green','green','green','green','green','green','green','green','green','green','green','green','amber','amber','off','off','off','off','off','off']
    },
    {
      sk: 'LIEKY', cyr: 'ЛИЈЕКОВИ',
      leds: ['green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','amber','amber']
    },
    {
      sk: 'PALIVO', cyr: 'ГОРИВО',
      leds: ['green','green','green','green','green','green','green','green','green','amber','amber','off','off','off','off','off','off','off','off','off']
    },
    {
      sk: 'NÁRADIE', cyr: 'АЛАТ',
      leds: ['green','green','green','green','green','green','green','amber','amber','off','off','off','off','off','off','off','off','off','off','off']
    },
    {
      sk: 'BATÉRIE', cyr: 'БАТЕРИЈЕ',
      leds: ['red','red','red','red','off','off','off','off','off','off','off','off','off','off','off','off','off','off','off','off']
    },
  ];

  const scaleMarks = [0, 25, 50, 75, 100];
</script>

<div class="inv-panel">
  <!-- Corner screws -->
  <div class="screw screw-tl"></div>
  <div class="screw screw-tr"></div>
  <div class="screw screw-bl"></div>
  <div class="screw screw-br"></div>

  <!-- Header -->
  <div class="inv-header">
    <div class="inv-header-left">
      <div class="inv-title">ЗАПАСЫ</div>
      <div class="inv-subtitle">INVENTORY &middot; ZÁSOBY &middot; ZALIHE</div>
    </div>
    <div class="inv-code-plate">
      <span class="inv-code">INV-001</span>
    </div>
  </div>

  <!-- Scale row -->
  <div class="inv-body">
    <div class="scale-row">
      <div class="label-spacer"></div>
      <div class="scale-marks">
        {#each scaleMarks as mark}
          <span class="scale-num">{mark}</span>
        {/each}
      </div>
      <div class="side-spacer"></div>
    </div>

    <!-- Inventory rows -->
    {#each items as item}
      <div class="inv-row">
        <div class="inv-label">
          <span class="inv-label-sk">{item.sk}</span>
          <span class="inv-label-cyr">{item.cyr}</span>
        </div>
        <div class="led-strip">
          {#each item.leds as led}
            <div class="led-bulb {led}">
              <div class="led-glass"></div>
            </div>
          {/each}
        </div>
        <div class="row-screw"></div>
      </div>
    {/each}
  </div>

  <!-- Right side panel details -->
  <div class="side-panel">
    <div class="side-screw"></div>
    <div class="side-screw"></div>
    <div class="test-btn-area">
      <div class="test-label">ТЕСТ ЗАМЕНУ</div>
      <div class="test-btn"></div>
    </div>
    <div class="net-status">
      <span>СЕТЬ ВВЕДЕНО</span>
      <span>СЕТЬ ВКЛЮЧЕНА</span>
    </div>
    <div class="side-screw"></div>
    <div class="side-screw"></div>
  </div>

  <!-- Bottom LCD section -->
  <div class="lcd-section">
    <div class="lcd-unit">
      <div class="lcd-label">
        SPOLU POLOŽIEK
        <span class="lcd-label-cyr">УКУПНО АРТИКАЛА</span>
      </div>
      <div class="lcd-bezel">
        <div class="lcd-screen">247</div>
      </div>
      <div class="lcd-sublabel">
        SPOLU POLOŽIEK
        <span class="lcd-sublabel-cyr">УКУПНО АРТИКАЛА</span>
      </div>
    </div>
    <div class="lcd-unit">
      <div class="lcd-label">
        EXPIRUJE &lt; 30 DNI
        <span class="lcd-label-cyr">ИСТИЧЕ &lt; 30 ДАНА</span>
      </div>
      <div class="lcd-bezel">
        <div class="lcd-screen warn">8</div>
      </div>
      <div class="lcd-sublabel">
        EXPIRUJE &lt; 30 DNI
        <span class="lcd-sublabel-cyr">ИСТИЧЕ &lt; 30 ДАНА</span>
      </div>
    </div>
    <div class="lcd-unit">
      <div class="lcd-label">
        POSLEDNÝ AUDIT
        <span class="lcd-label-cyr">ПОСЛЕДЊА РЕВИЗИЈА</span>
      </div>
      <div class="lcd-bezel">
        <div class="lcd-screen">2026-04-03</div>
      </div>
      <div class="lcd-sublabel">
        POSLEDNÝ AUDIT
        <span class="lcd-sublabel-cyr">ПОСЛЕДЊА РЕВИЗИЈА</span>
      </div>
    </div>
  </div>

  <!-- Model plate -->
  <div class="model-plate">
    ИНВЕНТАРНЫЙ МОНИТОР &middot; МОДЕЛЬ М-88 &middot; ВВЕДЕНO 1978г.
  </div>
</div>

<style>
  .inv-panel {
    background:
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.03) 0px,
        rgba(0,0,0,0.03) 1px,
        transparent 1px,
        transparent 3px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.02) 0px,
        rgba(0,0,0,0.02) 1px,
        transparent 1px,
        transparent 3px
      ),
      linear-gradient(
        180deg,
        #6b2222 0%,
        #5a1a1a 15%,
        #4d1515 50%,
        #5a1a1a 85%,
        #3d1010 100%
      );
    border: 3px solid #2a0a0a;
    border-radius: 2px;
    padding: clamp(16px, 2vw, 24px);
    position: relative;
    box-shadow:
      inset 2px 2px 0 rgba(255,200,180,0.15),
      inset -2px -2px 0 rgba(0,0,0,0.4),
      0 4px 16px rgba(0,0,0,0.5);
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto auto auto;
    gap: 0;
  }

  /* Screws */
  .screw {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #a08060, #5a4030 60%, #3a2518);
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.6);
    z-index: 2;
  }
  .screw::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    right: 25%;
    height: 1px;
    background: rgba(0,0,0,0.5);
    transform: rotate(-45deg);
  }
  .screw-tl { top: 8px; left: 8px; }
  .screw-tr { top: 8px; right: 8px; }
  .screw-bl { bottom: 8px; left: 8px; }
  .screw-br { bottom: 8px; right: 8px; }

  /* Header */
  .inv-header {
    grid-column: 1 / -1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 12px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(255,200,180,0.1);
  }
  .inv-header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .inv-title {
    font-family: var(--font-mono);
    font-size: clamp(22px, 2.8vw, 36px);
    font-weight: 700;
    color: #e8dcc8;
    letter-spacing: 4px;
    line-height: 1.1;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }
  .inv-subtitle {
    font-family: var(--font-tech);
    font-size: clamp(8px, 0.7vw, 11px);
    color: rgba(232,220,200,0.5);
    letter-spacing: 2.5px;
    margin-top: 2px;
  }
  .inv-code-plate {
    background: linear-gradient(180deg, #3a1010, #2a0808);
    border: 1px solid #5a2020;
    border-radius: 2px;
    padding: 4px 12px;
    box-shadow: inset 0 1px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(255,200,180,0.08);
  }
  .inv-code {
    font-family: var(--font-tech);
    font-size: clamp(11px, 1vw, 14px);
    color: rgba(232,220,200,0.6);
    letter-spacing: 2px;
  }

  /* Body (LED rows area) */
  .inv-body {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Scale row */
  .scale-row {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2px;
    margin-bottom: 2px;
  }
  .label-spacer {
    width: clamp(70px, 9vw, 100px);
    flex-shrink: 0;
  }
  .scale-marks {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 2px;
  }
  .scale-num {
    font-family: var(--font-tech);
    font-size: clamp(8px, 0.65vw, 10px);
    color: rgba(232,220,200,0.45);
    letter-spacing: 1px;
  }
  .side-spacer {
    width: 20px;
    flex-shrink: 0;
  }

  /* Inventory rows */
  .inv-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 0;
  }
  .inv-label {
    width: clamp(70px, 9vw, 100px);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .inv-label-sk {
    font-family: var(--font-mono);
    font-size: clamp(10px, 0.9vw, 13px);
    font-weight: 700;
    color: #e8dcc8;
    letter-spacing: 1.5px;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }
  .inv-label-cyr {
    font-family: var(--font-mono);
    font-size: clamp(8px, 0.65vw, 10px);
    color: rgba(232,220,200,0.45);
    letter-spacing: 1px;
    line-height: 1.2;
  }

  /* LED strip */
  .led-strip {
    flex: 1;
    display: flex;
    gap: clamp(2px, 0.3vw, 4px);
    align-items: center;
  }

  /* LED bulb */
  .led-bulb {
    width: clamp(10px, 1.2vw, 16px);
    height: clamp(10px, 1.2vw, 16px);
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;
    background: radial-gradient(circle at 40% 35%, #3a2020, #1a0808);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,0.4);
  }
  .led-glass {
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 30%, rgba(255,255,255,0.15), transparent 70%);
  }

  /* LED green state */
  .led-bulb.green {
    background: radial-gradient(circle at 45% 40%, #66ff66, #33cc33 40%, #1a8a1a 70%, #0d440d);
    box-shadow:
      inset 0 1px 2px rgba(255,255,255,0.3),
      0 0 4px rgba(51,204,51,0.6),
      0 0 8px rgba(51,204,51,0.3);
  }
  .led-bulb.green .led-glass {
    background: radial-gradient(circle at 35% 25%, rgba(255,255,255,0.5), rgba(255,255,255,0.1) 50%, transparent);
  }

  /* LED amber state */
  .led-bulb.amber {
    background: radial-gradient(circle at 45% 40%, #ffcc33, #e6a817 40%, #b8860b 70%, #5c4306);
    box-shadow:
      inset 0 1px 2px rgba(255,255,255,0.3),
      0 0 4px rgba(230,168,23,0.6),
      0 0 8px rgba(230,168,23,0.3);
  }
  .led-bulb.amber .led-glass {
    background: radial-gradient(circle at 35% 25%, rgba(255,255,255,0.45), rgba(255,255,255,0.1) 50%, transparent);
  }

  /* LED red state */
  .led-bulb.red {
    background: radial-gradient(circle at 45% 40%, #ff4444, #cc2200 40%, #8a1500 70%, #440a00);
    box-shadow:
      inset 0 1px 2px rgba(255,255,255,0.25),
      0 0 4px rgba(205,37,0,0.6),
      0 0 8px rgba(205,37,0,0.3);
  }
  .led-bulb.red .led-glass {
    background: radial-gradient(circle at 35% 25%, rgba(255,255,255,0.4), rgba(255,255,255,0.1) 50%, transparent);
  }

  /* LED off state */
  .led-bulb.off {
    background: radial-gradient(circle at 40% 35%, #3a2020, #1a0808);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,0.4);
  }
  .led-bulb.off .led-glass {
    background: radial-gradient(circle at 40% 30%, rgba(255,255,255,0.08), transparent 70%);
  }

  /* Row screw */
  .row-screw {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #8a7060, #5a4030 60%, #3a2518);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5);
    flex-shrink: 0;
  }

  /* Side panel */
  .side-panel {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 8px 6px 8px 12px;
    margin-left: 8px;
    border-left: 1px solid rgba(255,200,180,0.08);
    min-width: 60px;
  }
  .side-screw {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #a08060, #5a4030 60%, #3a2518);
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.6);
  }
  .side-screw::after {
    content: '';
    display: block;
    width: 60%;
    height: 1px;
    background: rgba(0,0,0,0.4);
    margin: 4px auto 0;
    transform: rotate(45deg);
  }
  .test-btn-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin: 8px 0;
  }
  .test-label {
    font-family: var(--font-tech);
    font-size: clamp(6px, 0.55vw, 8px);
    color: rgba(232,220,200,0.4);
    letter-spacing: 1px;
    text-align: center;
    white-space: nowrap;
  }
  .test-btn {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #884444, #551818 70%);
    border: 1px solid #3a0a0a;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,200,180,0.15);
    cursor: pointer;
  }
  .net-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-family: var(--font-tech);
    font-size: clamp(5px, 0.5vw, 7px);
    color: rgba(232,220,200,0.35);
    letter-spacing: 0.8px;
    text-align: center;
    line-height: 1.3;
  }

  /* LCD section */
  .lcd-section {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(8px, 1vw, 14px);
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid rgba(255,200,180,0.08);
  }
  .lcd-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .lcd-label {
    font-family: var(--font-tech);
    font-size: clamp(7px, 0.6vw, 9px);
    color: rgba(232,220,200,0.5);
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .lcd-label-cyr {
    display: block;
    font-size: clamp(6px, 0.55vw, 8px);
    color: rgba(232,220,200,0.35);
    letter-spacing: 0.8px;
    margin-top: 1px;
  }
  .lcd-bezel {
    background: linear-gradient(180deg, #1a0808, #0d0404);
    border: 2px solid #3a1515;
    border-radius: 2px;
    padding: 6px 10px;
    box-shadow:
      inset 0 2px 6px rgba(0,0,0,0.8),
      0 1px 0 rgba(255,200,180,0.06);
    width: 100%;
    box-sizing: border-box;
  }
  .lcd-screen {
    font-family: var(--font-lcd7);
    font-size: clamp(18px, 2vw, 28px);
    color: #88cc44;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 0 0 6px rgba(136,204,68,0.5), 0 0 12px rgba(136,204,68,0.2);
    line-height: 1;
  }
  .lcd-screen.warn {
    color: #e6a817;
    text-shadow: 0 0 6px rgba(230,168,23,0.5), 0 0 12px rgba(230,168,23,0.2);
  }
  .lcd-sublabel {
    font-family: var(--font-tech);
    font-size: clamp(6px, 0.5vw, 7px);
    color: rgba(232,220,200,0.3);
    letter-spacing: 0.8px;
    text-align: center;
    line-height: 1.3;
    text-transform: uppercase;
    margin-top: 2px;
  }
  .lcd-sublabel-cyr {
    display: block;
    font-size: clamp(5px, 0.45vw, 6px);
    color: rgba(232,220,200,0.2);
  }

  /* Model plate */
  .model-plate {
    grid-column: 1 / -1;
    font-family: var(--font-tech);
    font-size: clamp(7px, 0.6vw, 9px);
    color: rgba(232,220,200,0.3);
    letter-spacing: 1.5px;
    text-align: center;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid rgba(255,200,180,0.06);
  }
</style>
