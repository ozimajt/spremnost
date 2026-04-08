<script>
  let { size = 'med', font = '7seg', label = '', labelCyr = '', children } = $props();

  let sizeClass = $derived(
    size === 'large' ? 'lcd-large' : size === 'small' ? 'lcd-small' : 'lcd-med'
  );
  let fontClass = $derived(font === '14seg' ? 'lcd-14' : '');
</script>

{#if label}
  <span class="lcd-label">
    {label}
    {#if labelCyr}<br>{labelCyr}{/if}
  </span>
{/if}
<div class="lcd {sizeClass} {fontClass}">
  {#if children}{@render children()}{/if}
</div>
