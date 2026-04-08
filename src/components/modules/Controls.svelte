<script>
  import Button from '../ui/Button.svelte';
  import Toggle from '../ui/Toggle.svelte';

  let offline = $state(true);
  let zvuk = $state(false);
  let crt = $state(true);
  let alarm = $state(false);
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        CONTROLS · OVLÁDANIE · KONTROLE
        <div class="panel-title-sub">УПРАВЛЕНИЕ</div>
      </div>
      <span class="panel-code">CTL-001</span>
    </div>
  </div>

  <div class="btn-bank">
    <button class="btn"><div class="btn-stack"><span class="sk">◉ ZÁSOBY</span><span class="sr">ЗАЛИХЕ</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ MAPA</span><span class="sr">КАРТА</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ PLATO</span><span class="sr">ПЛАТО</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ ZÁHRADA</span><span class="sr">БАШТА</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ SPRIEVODCA</span><span class="sr">ВОДИЧ</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ ČLENOVIA</span><span class="sr">ЧЛАНОВИ</span></div></button>
    <button class="btn"><div class="btn-stack"><span class="sk">◉ NÁVRHY</span><span class="sr">ПРЕДЛОЗИ</span></div></button>
    <button class="btn btn-danger"><div class="btn-stack"><span class="sk">▲ POPLACH</span><span class="sr">УЗБУНА</span></div></button>
  </div>

  <hr class="hr-dash">

  <div class="section-title">
    SWITCHES · PREPÍNAČE · PREKIDAČI
    <span class="section-title-cyr">ПРЕКЛЮЧАТЕЛИ</span>
  </div>
  <div style="display: flex; justify-content: space-around; align-items: flex-start; flex-wrap: wrap; gap: 11px;">
    <Toggle bind:on={offline} label="OFFLINE" labelCyr="ОФЛАЈН" />
    <Toggle bind:on={zvuk} label="ZVUK" labelCyr="ЗВУК" />
    <Toggle bind:on={crt} label="CRT" labelCyr="ЕКРАН" />
    <Toggle bind:on={alarm} label="ALARM" labelCyr="АЛАРМ" />
  </div>

  <hr class="hr-dash">
  <button class="btn btn-danger" style="width: 100%; min-height: 64px; font-size: clamp(13px, 1.1vw, 16px);">
    <div class="btn-stack"><span class="sk">⏻ LOGOUT · ODHLÁSIŤ</span><span class="sr">ОДЈАВА · ВЫХОД</span></div>
  </button>
</div>
