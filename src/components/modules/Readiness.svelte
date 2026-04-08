<script>
  import Gauge from '../ui/Gauge.svelte';
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        READINESS · PRIPRAVENOSŤ · SPREMNOST
        <div class="panel-title-sub">ГОТОВНОСТЬ</div>
      </div>
      <span class="panel-code">RDY-001</span>
    </div>
  </div>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
    <Gauge value={72.4} max={100} display="72.4%" label="PRIPRAVENOSŤ" labelCyr="ПРИПРЕМЉЕНОСТ" />
    <Gauge value={88} max={120} display="88.0L" label="VODA" labelCyr="ВОДА" />
    <Gauge value={14} max={30} display="14 DNI" label="HRANA" labelCyr="ХРАНА" />
    <Gauge value={64} max={100} display="64%" label="PALIVO" labelCyr="ГОРИВО" />
  </div>
</div>
