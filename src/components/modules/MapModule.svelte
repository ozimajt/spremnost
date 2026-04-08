<script>
  import DataRow from '../ui/DataRow.svelte';
  import Led from '../ui/Led.svelte';
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        MAP · MAPA · KARTA
        <div class="panel-title-sub">КАРТА</div>
      </div>
      <span class="panel-code">MAP-001</span>
    </div>
  </div>
  <DataRow label="PAKET" labelCyr="ПАКЕТ" value="PERTH METRO" />
  <DataRow label="VEĽKOSŤ" labelCyr="ВЕЛИЧИНА" value="108 MB" />
  <DataRow label="ZOOM" labelCyr="ЗУМ" value="Z0 — Z15" />
  <DataRow label="MREŽA" labelCyr="МРЕЖА" value="MGRS 50H" />
  <DataRow label="BODY" labelCyr="ТАЧКЕ" value="0" />
  <DataRow label="TRASY" labelCyr="РУТЕ" value="0" />
  <hr class="hr-dash">
  <div style="display: flex; align-items: center; gap: 11px; margin-top: 11px;">
    <Led color="green" animation="pulse" />
    <span style="font-family: var(--font-tech); font-size: 12px; color: var(--panel-800); line-height: 1.3;">OFFLINE TILES READY<br><span style="color: var(--panel-600); font-size: 10px;">OFFLINE PLOČICE SPREMNE</span></span>
  </div>
</div>
