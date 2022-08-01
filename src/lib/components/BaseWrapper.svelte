<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { initStores } from '$lib/stores/index';

  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

{#await initStores() then}
  <div
    class="bg-base-100 text-base-content h-screen flex flex-col overflow-y-auto overflow-x-hidden"
  >
    <slot />
  </div>
{/await}
