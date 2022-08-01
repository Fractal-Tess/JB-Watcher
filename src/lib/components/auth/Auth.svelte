<script lang="ts">
  import yor from '$assets/yor.webp';
  import { blur } from 'svelte/transition';
  import { linear } from 'svelte/easing';
</script>

<img
  transition:blur={{ duration: 1500, easing: linear, amount: 15 }}
  src={yor}
  class="yor-drop-shadow origin-center h-96 object-contain"
  alt="Yor splash for login/register page"
/>

<!-- This creates an error - Unknown word -->
<style>
  .yor-drop-shadow {
    -webkit-filter: drop-shadow(5px 5px 5px hsl(var(--s)));
    filter: drop-shadow(5px 5px 5px hsl(var(--s)));
  }
</style>
