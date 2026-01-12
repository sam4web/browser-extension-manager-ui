import data from '@/assets/data.json';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStorageSync } from '../composables/useStorageSync';
import type { IExtension, IExtensionMap } from '../types/extension';

const { sync } = useStorageSync();
export const STORAGE_KEY = 'extensions-data';

export const useExtensionStore = defineStore('extension', () => {
  const extensions = ref<IExtension[]>([]);

  function initializeExtensions() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) {
      sync(data, true);
      extensions.value = data;
      return;
    }
    const extensionMap: IExtensionMap = new Map<string, boolean>(
      Object.entries(JSON.parse(savedData)),
    );
    extensions.value = data.map((ext: IExtension) => ({
      ...ext,
      isActive: extensionMap.has(ext.id) ? extensionMap.get(ext.id) : ext.isActive,
    }));
  }

  function toggleExtension(id: string) {
    const extension = extensions.value.find((ext) => ext.id === id);
    if (extension) {
      extension.isActive = !extension.isActive;
      sync(extensions.value);
    }
  }

  return { initializeExtensions, extensions, toggleExtension };
});
