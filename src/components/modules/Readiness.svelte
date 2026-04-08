<script>
  let toggles = $state([true, true, false]);

  const gauges = [
    { value: 72.4, max: 100, display: '72.4%', label: 'PRIPRAVENOST', labelCyr: 'ПРИПРЕМЉЕНОСТ' },
    { value: 88, max: 120, display: '88.0L', label: 'VODA', labelCyr: 'ВОДА' },
    { value: 14, max: 30, display: '14 DNI', label: 'HRANA', labelCyr: 'ХРАНА' },
    { value: 64, max: 100, display: '64%', label: 'PALIVO', labelCyr: 'ГОРИВО' },
  ];

  const CX = 100;
  const CY = 100;
  const R = 80;

  function polar(cx, cy, r, deg) {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  }

  function arcPath(cx, cy, r, startDeg, endDeg) {
    const [x1, y1] = polar(cx, cy, r, startDeg);
    const [x2, y2] = polar(cx, cy, r, endDeg);
    const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }

  function getTicks(numMajor, numMinor) {
    const result = [];
    const totalAngle = 270;
    const startAngle = -135;
    for (let i = 0; i <= numMajor; i++) {
      const deg = startAngle + (i / numMajor) * totalAngle;
      const [x1, y1] = polar(CX, CY, 68, deg);
      const [x2, y2] = polar(CX, CY, 76, deg);
      result.push({ x1, y1, x2, y2, major: true });
    }
    const totalMinor = numMajor * numMinor;
    for (let i = 0; i <= totalMinor; i++) {
      if (i % numMinor === 0) continue;
      const deg = startAngle + (i / totalMinor) * totalAngle;
      const [x1, y1] = polar(CX, CY, 70, deg);
      const [x2, y2] = polar(CX, CY, 76, deg);
      result.push({ x1, y1, x2, y2, major: false });
    }
    return result;
  }

  function getNeedleAngle(value, max) {
    const pct = Math.max(0, Math.min(1, value / max));
    return -135 + pct * 270;
  }

  function getScaleLabels(max, numMajor) {
    const labels = [];
    const startAngle = -135;
    const totalAngle = 270;
    for (let i = 0; i <= numMajor; i++) {
      const deg = startAngle + (i / numMajor) * totalAngle;
      const [x, y] = polar(CX, CY, 58, deg);
      const val = Math.round((i / numMajor) * max);
      labels.push({ x, y, val });
    }
    return labels;
  }

  const ticks = getTicks(10, 5);
</script>

<div class="rdy-module">
  <!-- TOP SECTION: Dark navy header -->
  <div class="rdy-header">
    <!-- Toggle switches on left -->
    <div class="rdy-toggles">
      <div class="rdy-toggle-row">
        {#each [0, 1] as idx}
          <div class="rdy-toggle">
            <div class="rdy-toggle-labels">
              <span class="rdy-toggle-on" class:active={toggles[idx]}>ON</span>
              <span class="rdy-toggle-off" class:active={!toggles[idx]}>OFF</span>
            </div>
            <div class="rdy-toggle-track" onclick={() => toggles[idx] = !toggles[idx]}>
              <div class="rdy-toggle-thumb" class:on={toggles[idx]}></div>
            </div>
          </div>
        {/each}
      </div>
      <div class="rdy-toggle">
        <div class="rdy-toggle-labels">
          <span class="rdy-toggle-on" class:active={toggles[2]}>ON</span>
          <span class="rdy-toggle-off" class:active={!toggles[2]}>OFF</span>
        </div>
        <div class="rdy-toggle-track" onclick={() => toggles[2] = !toggles[2]}>
          <div class="rdy-toggle-thumb" class:on={toggles[2]}></div>
        </div>
      </div>
    </div>

    <!-- Center: Title block -->
    <div class="rdy-title-block">
      <div class="rdy-logo-line">
        <span class="rdy-logo-icon">&#9670;</span>
        <span class="rdy-logo-text">Спремност</span>
        <span class="rdy-code">RDY-001</span>
      </div>
      <div class="rdy-main-title">ГОТОВОСТ</div>
      <div class="rdy-subtitle">READINESS &middot; PRIPRAVENOST &middot; SPREMNOST</div>
    </div>

    <!-- Right: Crest/Patch -->
    <div class="rdy-crest">
      <div class="rdy-crest-inner">
        <div class="rdy-crest-top-text">SUPER SLAV SURVIVAL SOCIETY</div>
        <div class="rdy-crest-eagle">&#9734;</div>
        <div class="rdy-crest-4s">4S</div>
        <div class="rdy-crest-bottom-text">EST. &middot; SINCE EVER</div>
      </div>
    </div>

    <!-- Row of knobs across bottom of header -->
    <div class="rdy-header-knobs">
      {#each Array(8) as _, i}
        <div class="rdy-knob header-knob">
          <div class="rdy-knob-indicator"></div>
        </div>
      {/each}
    </div>
  </div>

  <!-- BOTTOM SECTION: Blue gauge panel -->
  <div class="rdy-gauge-panel">
    <div class="rdy-gauges-row">
      {#each gauges as g, i}
        {@const angle = getNeedleAngle(g.value, g.max)}
        {@const numMajor = g.max <= 30 ? 6 : 10}
        {@const labels = getScaleLabels(g.max, numMajor)}
        {@const gaugeTicks = getTicks(numMajor, g.max <= 30 ? 5 : 5)}
        {@const needleTip = polar(CX, CY, 62, angle)}
        {@const needleTail = polar(CX, CY, -12, angle)}
        <div class="rdy-gauge-col">
          <!-- Knob above gauge -->
          <div class="rdy-knob gauge-knob">
            <div class="rdy-knob-indicator"></div>
          </div>

          <!-- Gauge -->
          <div class="rdy-gauge">
            <svg viewBox="0 0 200 200">
              <defs>
                <radialGradient id="darkFace-{i}">
                  <stop offset="0%" stop-color="#1a1a2a" />
                  <stop offset="100%" stop-color="#0a0a14" />
                </radialGradient>
                <radialGradient id="chromeBez-{i}" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stop-color="#888" />
                  <stop offset="50%" stop-color="#555" />
                  <stop offset="100%" stop-color="#333" />
                </radialGradient>
              </defs>

              <!-- Chrome bezel -->
              <circle cx={CX} cy={CY} r={R + 8} fill="url(#chromeBez-{i})" stroke="#222" stroke-width="1" />
              <!-- Dark face -->
              <circle cx={CX} cy={CY} r={R} fill="url(#darkFace-{i})" />

              <!-- Red arc -->
              <path d={arcPath(CX, CY, 72, -135, 135)} fill="none" stroke="#cc2200" stroke-width="5" stroke-linecap="butt" opacity="0.85" />

              <!-- Tick marks -->
              {#each gaugeTicks as tick}
                <line x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2}
                  stroke={tick.major ? '#cc3333' : '#882222'} stroke-width={tick.major ? 2 : 1} />
              {/each}

              <!-- Scale labels -->
              {#each labels as lbl}
                <text x={lbl.x} y={lbl.y} fill="#aa4444" font-size="9" font-family="var(--font-tech)"
                  text-anchor="middle" dominant-baseline="central">{lbl.val}</text>
              {/each}

              <!-- Needle -->
              <line
                x1={needleTail[0]} y1={needleTail[1]}
                x2={needleTip[0]} y2={needleTip[1]}
                stroke="#dd2200" stroke-width="2.5" stroke-linecap="round"
              />

              <!-- Center pivot -->
              <circle cx={CX} cy={CY} r="5" fill="#441111" stroke="#cc2200" stroke-width="1" />
            </svg>
          </div>

          <!-- Digital readout -->
          <div class="rdy-readout">{g.display}</div>

          <!-- Labels -->
          <div class="rdy-gauge-label">{g.label}</div>
          <div class="rdy-gauge-label-cyr">{g.labelCyr}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .rdy-module {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.5);
  }

  /* === TOP SECTION === */
  .rdy-header {
    background: linear-gradient(180deg, #2a3060 0%, #1a1e3a 40%, #161a32 100%);
    padding: 16px 20px 12px 20px;
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    gap: 8px 16px;
    align-items: center;
    border: 3px solid #3a4070;
    border-bottom: none;
    border-radius: var(--radius) var(--radius) 0 0;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -2px 8px rgba(0,0,0,0.3);
  }

  /* Toggle switches */
  .rdy-toggles {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-self: start;
  }
  .rdy-toggle-row {
    display: flex;
    gap: 12px;
  }
  .rdy-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .rdy-toggle-labels {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-family: var(--font-tech);
    font-size: 8px;
    letter-spacing: 1px;
  }
  .rdy-toggle-on {
    color: #556;
  }
  .rdy-toggle-on.active {
    color: #aab;
  }
  .rdy-toggle-off {
    color: #556;
  }
  .rdy-toggle-off.active {
    color: #aab;
  }
  .rdy-toggle-track {
    width: 18px;
    height: 34px;
    background: linear-gradient(180deg, #111 0%, #222 100%);
    border: 1px solid #444;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.8);
  }
  .rdy-toggle-thumb {
    position: absolute;
    width: 14px;
    height: 14px;
    left: 50%;
    bottom: 3px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #ddd 0%, #999 50%, #777 100%);
    border-radius: 2px;
    border: 1px solid #555;
    box-shadow: 0 1px 2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.5);
    transition: all 120ms ease;
  }
  .rdy-toggle-thumb.on {
    bottom: auto;
    top: 3px;
  }

  /* Title block */
  .rdy-title-block {
    grid-column: 2;
    grid-row: 1;
    text-align: center;
    padding: 0 8px;
  }
  .rdy-logo-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 2px;
  }
  .rdy-logo-icon {
    color: #8899bb;
    font-size: 10px;
  }
  .rdy-logo-text {
    font-family: var(--font-mono);
    font-size: clamp(12px, 1.2vw, 16px);
    color: #99aabb;
    letter-spacing: 2px;
    font-style: italic;
  }
  .rdy-code {
    font-family: var(--font-tech);
    font-size: 10px;
    color: #667;
    letter-spacing: 1.5px;
    margin-left: auto;
    position: absolute;
    right: 20px;
    top: 16px;
  }
  .rdy-main-title {
    font-family: var(--font-mono);
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 700;
    color: #e8dcc8;
    letter-spacing: 8px;
    line-height: 1;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }
  .rdy-subtitle {
    font-family: var(--font-tech);
    font-size: clamp(8px, 0.7vw, 10px);
    color: #667788;
    letter-spacing: 2px;
    margin-top: 4px;
  }

  /* Crest/Patch */
  .rdy-crest {
    grid-column: 3;
    grid-row: 1;
    width: clamp(70px, 8vw, 100px);
    height: clamp(70px, 8vw, 100px);
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #3a2810 0%, #1a1208 60%, #0a0804 100%);
    border: 3px solid #886633;
    box-shadow: 0 0 0 2px #443311, 0 0 12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .rdy-crest-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 8px;
  }
  .rdy-crest-top-text {
    font-family: var(--font-mono);
    font-size: clamp(4px, 0.45vw, 6px);
    color: #ccaa66;
    letter-spacing: 0.5px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-top: 6px;
  }
  .rdy-crest-eagle {
    font-size: clamp(16px, 2vw, 24px);
    color: #ddbb77;
    line-height: 1;
    margin: 2px 0;
    text-shadow: 0 0 4px rgba(200,160,80,0.5);
  }
  .rdy-crest-4s {
    font-family: var(--font-mono);
    font-size: clamp(10px, 1.1vw, 16px);
    font-weight: 700;
    color: #cc2200;
    line-height: 1;
    text-shadow: 0 0 6px rgba(200,40,0,0.4);
  }
  .rdy-crest-bottom-text {
    font-family: var(--font-tech);
    font-size: clamp(4px, 0.4vw, 5px);
    color: #aa8844;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 4px;
  }

  /* Knobs row in header */
  .rdy-header-knobs {
    grid-column: 1 / -1;
    grid-row: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4px 0;
    gap: 4px;
  }

  /* Chrome knobs */
  .rdy-knob {
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ccc 0%, #999 30%, #666 60%, #444 80%, #333 100%);
    box-shadow:
      0 2px 4px rgba(0,0,0,0.6),
      0 4px 8px rgba(0,0,0,0.3),
      inset 0 1px 2px rgba(255,255,255,0.4),
      inset 0 -1px 2px rgba(0,0,0,0.4);
    position: relative;
    cursor: pointer;
  }
  .header-knob {
    width: clamp(24px, 2.5vw, 34px);
    height: clamp(24px, 2.5vw, 34px);
  }
  .gauge-knob {
    width: clamp(20px, 2vw, 28px);
    height: clamp(20px, 2vw, 28px);
    margin-bottom: 6px;
  }
  .rdy-knob-indicator {
    position: absolute;
    width: 2px;
    height: 35%;
    background: #222;
    top: 15%;
    left: 50%;
    transform: translateX(-50%) rotate(-30deg);
    transform-origin: bottom center;
    border-radius: 1px;
  }

  /* === BOTTOM SECTION === */
  .rdy-gauge-panel {
    background: linear-gradient(180deg, #1a2a50 0%, #142040 50%, #0f1830 100%);
    border: 3px solid #2a5599;
    border-radius: 0 0 var(--radius) var(--radius);
    padding: clamp(12px, 1.5vw, 20px) clamp(10px, 1.5vw, 16px);
    box-shadow:
      inset 0 0 30px rgba(30,80,180,0.15),
      0 0 12px rgba(40,100,220,0.2),
      0 4px 16px rgba(0,0,0,0.5);
  }

  .rdy-gauges-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(8px, 1vw, 16px);
    align-items: start;
  }

  .rdy-gauge-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rdy-gauge {
    width: clamp(100px, 11vw, 160px);
    aspect-ratio: 1;
    position: relative;
  }
  .rdy-gauge svg {
    display: block;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 4px rgba(180,30,0,0.15));
  }

  .rdy-readout {
    font-family: var(--font-lcd7);
    font-size: clamp(14px, 1.5vw, 20px);
    color: #dd3322;
    text-shadow: 0 0 6px rgba(220,40,20,0.5), 0 0 12px rgba(220,40,20,0.2);
    letter-spacing: 2px;
    margin-top: 4px;
    text-align: center;
  }

  .rdy-gauge-label {
    font-family: var(--font-tech);
    font-size: clamp(9px, 0.8vw, 12px);
    color: #8899bb;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-top: 4px;
    text-align: center;
    line-height: 1.2;
  }
  .rdy-gauge-label-cyr {
    font-family: var(--font-mono);
    font-size: clamp(8px, 0.7vw, 10px);
    color: #667799;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 1px;
  }
</style>
