<script>
  let { on = $bindable(false), label = '', labelCyr = '' } = $props();
</script>

<div class="toggle {on ? 'on' : ''}" role="switch" aria-checked={on}>
  <div class="toggle-switch" onclick={() => on = !on}>
    <div class="toggle-lever"></div>
  </div>
  {#if label}
    <div class="toggle-label">
      {label}
      {#if labelCyr}<span class="toggle-label-cyr">{labelCyr}</span>{/if}
    </div>
  {/if}
</div>
