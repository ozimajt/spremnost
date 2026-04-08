<script>
  import LcdDisplay from '../ui/LcdDisplay.svelte';

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
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        CHRONO · CHRONOMETER · HRONOMETAR
        <div class="panel-title-sub">ХРОНОМЕТР</div>
      </div>
      <span class="panel-code">CHR-001</span>
    </div>
  </div>

  <span class="lcd-label">MIESTNY ČAS · МЕСНО ВРЕМЕ</span>
  <div class="lcd lcd-large">{timeStr}</div>

  <div style="height: 11px;"></div>

  <span class="lcd-label">DÁTUM · ДАТУМ</span>
  <div class="lcd lcd-med lcd-14">{dateStr}</div>

  <div style="height: 11px;"></div>

  <span class="lcd-label">ŽATVA · ЖЕТВА — {harvestDays()}D</span>
  <div class="lcd lcd-med">{harvestStr()}</div>

  <hr class="hr-dash">

  <span class="lcd-label">RADIÁCIA · РАДИЈАЦИЈА μSv/h</span>
  <div class="lcd lcd-med">00.12</div>
</div>
