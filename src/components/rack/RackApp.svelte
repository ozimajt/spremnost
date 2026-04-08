<script>
  import Operator from '../modules/Operator.svelte';
  import Readiness from '../modules/Readiness.svelte';
  import Chronometer from '../modules/Chronometer.svelte';
  import Controls from '../modules/Controls.svelte';
  import Inventory from '../modules/Inventory.svelte';
  import Feed from '../modules/Feed.svelte';
  import MapModule from '../modules/MapModule.svelte';
  import Led from '../ui/Led.svelte';
  import Ticker from '../ui/Ticker.svelte';
</script>

<div class="control-room">

  <div class="header">
    <div class="brand">
      <div class="logo-mark">
        <img src="/logo.svg" alt="SSS Logo">
      </div>
      <div class="brand-text">
        <div class="title">SUPER SLAV SURVIVAL SOCIETY</div>
        <div class="cyrillic">СУПЕР СЛАВ · ДРУШТВО ЗА ОПСТАНАК</div>
        <div class="motto">JEDNOTA · ОТПОРНОСТ · ЗНАНИЕ // SSS EST. 2024</div>
      </div>
    </div>
    <div class="system-status">
      <div class="status-block"><Led color="green" animation="pulse" size="large" /><div class="status-label">PWR<br>СНАГА</div></div>
      <div class="status-block"><Led color="green" size="large" /><div class="status-label">LOCAL<br>ЛОКАЛ</div></div>
      <div class="status-block"><Led color="amber" animation="blink" size="large" /><div class="status-label">UPLINK<br>ВЕЗА</div></div>
      <div class="status-block"><Led color="green" size="large" /><div class="status-label">CRYPT<br>ШИФРА</div></div>
      <div class="status-block"><Led color="off" size="large" /><div class="status-label">ALARM<br>АЛАРМ</div></div>
    </div>
  </div>

  <div class="grid-row row-1">
    <Operator />
    <Readiness />
    <Chronometer />
  </div>

  <div class="grid-row row-2">
    <Controls />
    <Inventory />
  </div>

  <div class="grid-row row-3">
    <Feed />
    <MapModule />
  </div>

  <Ticker text="▸▸▸ SPREMNOST CONTROL NET · v0.1.0 · ЈЕДИНСТВО — ОТПОРНОСТ — ЗНАЊЕ · Jednota — Odolnosť — Vedomosti · ЕДИНСТВО — СТОЙКОСТЬ — ЗНАНИЕ · 4 ČLENOV ČAKÁ NA AKTIVÁCIU · JOZEF MICHALEK · JANKO DRAGOVIC · MARKO MIJATOVIC · IGOR KADIC · PERTH METRO GRID 50H ▸▸▸" />

</div>
