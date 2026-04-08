<script>
  let { variant = 'default', onclick, children } = $props();

  let variantClass = $derived(
    variant === 'danger' ? 'btn-danger' : variant === 'logout' ? 'btn-logout' : ''
  );
</script>

<button class="btn {variantClass}" {onclick}>
  {#if children}{@render children()}{/if}
</button>
