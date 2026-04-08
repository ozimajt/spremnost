<script>
  let { segments = [] } = $props();
</script>

<div class="led-bar">
  {#each segments as seg}
    <div class="seg {seg === 'off' ? '' : seg}"></div>
  {/each}
</div>
