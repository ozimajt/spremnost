<script>
  let { value = 0, max = 100, display = '', label = '', labelCyr = '' } = $props();

  const CX = 100;
  const CY = 100;
  const R = 80;
  const TICK_R_OUTER = 75;
  const TICK_R_INNER = 65;
  const ARC_R = 70;

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

  let pct = $derived(Math.max(0, Math.min(1, value / max)));
  let needleAngle = $derived(-135 + pct * 270);

  let ticks = $derived.by(() => {
    const result = [];
    for (let i = 0; i < 11; i++) {
      const deg = -135 + i * 27;
      const [x1, y1] = polar(CX, CY, TICK_R_INNER, deg);
      const [x2, y2] = polar(CX, CY, TICK_R_OUTER, deg);
      result.push({ x1, y1, x2, y2 });
    }
    return result;
  });

  let needleTip = $derived(polar(CX, CY, 60, needleAngle));
  let needleTail = $derived(polar(CX, CY, -10, needleAngle));
</script>

<div class="gauge-wrap">
  <div class="gauge">
    <svg viewBox="0 0 200 200">
      <!-- Outer steel circle -->
      <circle cx={CX} cy={CY} r={R + 10} fill="url(#steelGrad)" />
      <!-- Inner gradient circle -->
      <circle cx={CX} cy={CY} r={R} fill="url(#faceGrad)" />

      <defs>
        <radialGradient id="steelGrad">
          <stop offset="0%" stop-color="#888" />
          <stop offset="100%" stop-color="#444" />
        </radialGradient>
        <radialGradient id="faceGrad">
          <stop offset="0%" stop-color="#f5f0e6" />
          <stop offset="100%" stop-color="#d5cfc0" />
        </radialGradient>
      </defs>

      <!-- Colored arcs: red, amber, green -->
      <path d={arcPath(CX, CY, ARC_R, -135, -45)} fill="none" stroke="#cd2500" stroke-width="6" stroke-linecap="round" />
      <path d={arcPath(CX, CY, ARC_R, -45, 45)} fill="none" stroke="#e8a800" stroke-width="6" stroke-linecap="round" />
      <path d={arcPath(CX, CY, ARC_R, 45, 135)} fill="none" stroke="#3a7d2a" stroke-width="6" stroke-linecap="round" />

      <!-- Tick marks -->
      {#each ticks as tick}
        <line x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2} stroke="#333" stroke-width="2" />
      {/each}

      <!-- Needle -->
      <line
        x1={needleTail[0]} y1={needleTail[1]}
        x2={needleTip[0]} y2={needleTip[1]}
        stroke="#cd2500" stroke-width="3" stroke-linecap="round"
      />

      <!-- Center pivot -->
      <circle cx={CX} cy={CY} r="6" fill="#333" stroke="#555" stroke-width="1" />
    </svg>
    <div class="gauge-value">{display}</div>
  </div>
  <div class="gauge-label">
    {label}
    {#if labelCyr}<span class="gauge-label-cyr">{labelCyr}</span>{/if}
  </div>
</div>
