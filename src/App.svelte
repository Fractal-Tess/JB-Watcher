<script lang="ts">
  //Components
  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  //Routes
  import Settings from '$lib/routes/Settings.svelte';
  import Home from '$lib/routes/Home.svelte';
  import Auth from '$lib/components/auth/Auth.svelte';
  // Extra
  import BaseWrapper from '$lib/components/BaseWrapper.svelte';
  import { Route } from 'tinro';
  import Transition from '$lib/animation/Transition.svelte';
  import { user } from '$lib/stores/user';
import TopBar from '$lib/components/topbar/TopBar.svelte';
</script>

<BaseWrapper>
  <TopBar/>
  {#if $user}
    <Sidebar />
    <nav>
      <a href="/">Home</a>
      <a href="/settings">settings</a>
    </nav>

    <Transition>
      <Route path="/"><Home /></Route>
      <Route path="/settings"><Settings /></Route>
    </Transition>
  {:else}
    <Auth />
  {/if}
</BaseWrapper>
