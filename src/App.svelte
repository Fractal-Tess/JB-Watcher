<script lang="ts">
  // Static
  import Header from '$lib/example/header/Header.svelte';
  import Footer from '$lib/example/footer/Footer.svelte';
  // Dynamic
  import Register from '$lib/routes/Register.svelte';
  import Settings from '$lib/routes/Settings.svelte';
  import Login from '$lib/routes/Login.svelte';
  import Home from '$lib/routes/Home.svelte';
  // Extra
  import Transition from '$lib/animation/Transition.svelte';
  import { Route } from 'tinro';
  import { theme } from '$lib/stores/theme';

  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

<div
  class="bg-base-100 text-base-content h-screen flex flex-col overflow-y-auto overflow-x-hidden"
>
  <Header />
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
  <Footer />
</div>
