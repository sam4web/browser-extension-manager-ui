<script setup lang="ts">
  import type { IExtension } from '@/types/extension';
  import ExtensionItem from './ExtensionItem.vue';
  import { useExtensionStore } from '../store/extension';
  import { computed, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  const store = useExtensionStore();
  const { extensions } = storeToRefs(store);
  const { toggleExtension } = store;

  const filterOptions = ['all', 'active', 'inactive'] as const;
  type TFilterOption = (typeof filterOptions)[number];

  const filter = ref<TFilterOption>('all');
  const hiddenIds = ref<Set<string>>(new Set());

  const filteredExtensions = computed(() => {
    const result = extensions.value.filter((ext) => !hiddenIds.value.has(ext.id));
    if (filter.value === 'active') {
      return result.filter((ext) => ext.isActive);
    }
    if (filter.value === 'inactive') {
      return result.filter((ext) => !ext.isActive);
    }
    return result;
  });

  function hideExtension(id: string) {
    hiddenIds.value.add(id);
  }
</script>

<template>
  <div class="title-container">
    <h2>Extensions List</h2>
    <div class="button-container">
      <button
        :class="{ active: filter === option }"
        v-for="option in filterOptions"
        @click="() => (filter = option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
  <div class="extension-list">
    <ExtensionItem
      @toggle-extension="toggleExtension"
      @hide-extension="hideExtension"
      v-for="extension in filteredExtensions"
      :extension="extension as IExtension"
    />
  </div>
</template>

<style scoped>
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 54px;
    margin-bottom: 32px;
  }

  .title-container h2 {
    color: var(--neutral-800);
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
  }

  .dark .title-container h2 {
    color: var(--neutral-100);
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .button-container button {
    text-transform: capitalize;
  }

  .extension-list {
    display: grid;
    column-gap: 14px;
    row-gap: 15px;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  }

  @media screen and (max-width: 576px) {
    .title-container {
      flex-direction: column;
      gap: 16px;
      margin-top: 34px;
    }

    .extension-list {
      max-width: 448px;
    }
  }
</style>
