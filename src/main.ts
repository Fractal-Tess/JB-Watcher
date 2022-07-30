import '$styles';
import '@fortawesome/fontawesome-free/js/all.js';
import '$lib/webtorrent.min.js';
import App from '$src/App.svelte';
import { theme } from '$lib/stores/theme';

await theme.load();

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
