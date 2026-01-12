<script setup lang="ts">
  import data from '@/assets/data.json';
  import type { IExtension } from '@/types/extension';
  import ExtensionItem from './ExtensionItem.vue';
</script>

<template>
  <div class="title-container">
    <h2>Extensions List</h2>
    <div class="button-container">
      <button class="active">All</button>
      <button>Active</button>
      <button>Inactive</button>
    </div>
  </div>
  <div class="extension-list">
    <ExtensionItem
      v-for="extension in data"
      :extension="extension as IExtension"
    />
  </div>
</template>

<style scoped>
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 52px;
    margin-bottom: 26px;
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

  .extension-list {
    display: grid;
    column-gap: 14px;
    row-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
