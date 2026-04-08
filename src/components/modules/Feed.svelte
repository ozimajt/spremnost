<script>
  import DataRow from '../ui/DataRow.svelte';
</script>

<div class="panel">
  <div class="panel-header">
    <div class="panel-header-row">
      <div class="panel-title">
        PLATO · NEWSFEED · SPRAVODAJ · NOVOSTI
        <div class="panel-title-sub">ЛЕНТА</div>
      </div>
      <span class="panel-code">FEED-001</span>
    </div>
  </div>
  <DataRow label="▸ NEPREČÍTANÉ" labelCyr="▸ НЕПРОЧИТАНО" value="12" />
  <DataRow label="▸ MOJE PRÍSPEVKY" labelCyr="▸ МОЈИ ПОСТОВИ" value="4" />
  <DataRow label="▸ NÁVRHY" labelCyr="▸ ПРЕДЛОЗИ" value="7" />
  <hr class="hr-dash">
  <div style="font-family: var(--font-crt); font-size: 17px; color: var(--panel-800); line-height: 1.4;">
    &gt; POSLJEDNJE · ПОСЛЕДЊЕ:<br>
    <span style="color: var(--panel-600);">[--] System awaits first member.</span><br>
    <span style="color: var(--panel-600);">[--] Feed inactive — 0 posts.</span><br>
    <span style="color: var(--panel-600);">[--] Activate members to begin.</span>
  </div>
</div>
