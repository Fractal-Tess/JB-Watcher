import { theme } from '$lib/stores/theme';
import { user } from '$lib/stores/user';

export const initStores = async () => {
  await Promise.all([theme.load(), user.load()]);
};
