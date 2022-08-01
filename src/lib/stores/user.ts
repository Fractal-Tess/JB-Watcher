import { writable, type Writable } from 'svelte/store';
import { Store } from 'tauri-plugin-store-api';

const { subscribe, update, set } = writable() as Writable<string>;

export const user = {
  subscribe,

  load: async () => {
    console.log('Load on user called');
  }
};
