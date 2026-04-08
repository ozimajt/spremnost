<script>
  let { label = '', labelCyr = '', value = '' } = $props();
</script>

<div class="data-row">
  <div class="data-key">
    {label}
    {#if labelCyr}<span class="data-key-cyr">{labelCyr}</span>{/if}
  </div>
  <div class="data-val">{value}</div>
</div>
