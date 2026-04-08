<script>
  import LedBar from '../ui/LedBar.svelte';
  import DataRow from '../ui/DataRow.svelte';
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        INVENTORY · ZÁSOBY · ZALIHE
        <div class="panel-title-sub">ЗАПАСЫ</div>
      </div>
      <span class="panel-code">INV-001</span>
    </div>
  </div>

  <div class="inv-row">
    <div class="inv-label">VODA<span class="inv-label-cyr">ВОДА</span></div>
    <LedBar segments={['on','on','on','on','on','on','on','on','warn','off']} />
  </div>
  <div class="inv-row">
    <div class="inv-label">JEDLO<span class="inv-label-cyr">ХРАНА</span></div>
    <LedBar segments={['on','on','on','on','on','on','warn','off','off','off']} />
  </div>
  <div class="inv-row">
    <div class="inv-label">LIEKY<span class="inv-label-cyr">ЛИЈЕКОВИ</span></div>
    <LedBar segments={['on','on','on','on','on','on','on','on','on','warn']} />
  </div>
  <div class="inv-row">
    <div class="inv-label">PALIVO<span class="inv-label-cyr">ГОРИВО</span></div>
    <LedBar segments={['on','on','on','on','on','warn','off','off','off','off']} />
  </div>
  <div class="inv-row">
    <div class="inv-label">NÁRADIE<span class="inv-label-cyr">АЛАТ</span></div>
    <LedBar segments={['on','on','on','on','warn','off','off','off','off','off']} />
  </div>
  <div class="inv-row">
    <div class="inv-label">BATÉRIE<span class="inv-label-cyr">БАТЕРИЈЕ</span></div>
    <LedBar segments={['crit','crit','off','off','off','off','off','off','off','off']} />
  </div>

  <hr class="hr-dash">

  <DataRow label="SPOLU POLOŽIEK" labelCyr="УКУПНО АРТИКАЛА" value="247" />
  <div class="data-row">
    <span class="data-key">EXPIRUJE &lt; 30 DNI<span class="data-key-cyr">ИСТИЧЕ &lt; 30 ДАНА</span></span>
    <span class="data-val" style="color: var(--signal-red);">8</span>
  </div>
  <DataRow label="POSLEDNÝ AUDIT" labelCyr="ПОСЛЕДЊА РЕВИЗИЈА" value="2026-04-03" />
</div>
