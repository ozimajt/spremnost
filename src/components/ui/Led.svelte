<script>
  let { color = 'off', animation = 'none', size = 'normal' } = $props();
</script>

<div class="led {color} {animation} {size === 'large' ? 'led-large' : ''}"></div>
