<script>
  import Led from './Led.svelte';

  let {
    initials = '',
    name = '',
    code = '',
    codeCyr = '',
    ledColor = 'off',
    ledAnimation = 'none'
  } = $props();
</script>

<div class="member">
  <div class="member-badge">{initials}</div>
  <div class="member-info">
    <div class="member-name">{name}</div>
    <div class="member-code">
      {code}
      {#if codeCyr}<span class="member-code-cyr">{codeCyr}</span>{/if}
    </div>
  </div>
  <Led color={ledColor} animation={ledAnimation} />
</div>
