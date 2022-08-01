import { Store } from 'tauri-plugin-store-api';
import type { Theme } from '$types';
import { writable, type Writable } from 'svelte/store';

const store = new Store('.settings.dat');

const DEFAULT_THEME = 'dark';

const { subscribe, update, set } = writable() as Writable<string>;

export const theme = {
  subscribe,
  toggleTheme: () => {
    update(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      store.set('theme', newTheme);
      return newTheme;
    });
  },
  load: async () => {
    let storedTheme = (await store.get('theme')) as Theme | null;
    if (!storedTheme) {
      storedTheme = DEFAULT_THEME;
      store.set('theme', storedTheme);
    }
    set(storedTheme);
  }
};
