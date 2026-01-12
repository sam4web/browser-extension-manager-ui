import { STORAGE_KEY } from '../store/extension';
import type { IExtension, IExtensionMap } from '../types/extension';

export function useStorageSync() {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const sync = (payload: IExtension[], immediate: boolean = false) => {
    if (timer) {
      clearTimeout(timer);
    }

    const saveData = () => {
      const extensionMap: IExtensionMap = new Map<string, boolean>();
      payload.forEach((item: IExtension) => extensionMap.set(item.id, item.isActive));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(extensionMap)));
    };

    if (immediate) {
      saveData();
    } else {
      timer = setTimeout(saveData, 800);
    }
  };

  return { sync };
}
