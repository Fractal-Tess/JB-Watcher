<script lang="ts">
  import { router } from 'tinro';
  import { fade } from 'svelte/transition';
</script>

{#key $router.path}
  <main in:fade={{ duration: 500 }}>
    <slot />
  </main>
{/key}
