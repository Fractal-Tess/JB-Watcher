<script lang="ts">
  //Components
  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  //Routes
  import Register from '$lib/routes/Register.svelte';
  import Settings from '$lib/routes/Settings.svelte';
  import Login from '$lib/routes/Login.svelte';
  import Home from '$lib/routes/Home.svelte';
  // Extra
  import BaseWrapper from '$lib/components/BaseWrapper.svelte';
  import { Route } from 'tinro';
  import Transition from '$lib/animation/Transition.svelte';
</script>

<BaseWrapper>
  <Sidebar />
  <nav>
    <a href="/">Home</a>
    <a href="/login">login</a>
    <a href="/register">register</a>
    <a href="/settings">settings</a>
  </nav>

  <Transition>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/register"><Register /></Route>
    <Route path="/settings"><Settings /></Route>
  </Transition>
</BaseWrapper>
