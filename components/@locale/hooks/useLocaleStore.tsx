import { useContext } from 'react';
import { LocaleStoreContext } from '../contexts/LocaleStoreContext';

export function useLocaleStore(): string {
  const store = useContext(LocaleStoreContext);
  return store;
}
