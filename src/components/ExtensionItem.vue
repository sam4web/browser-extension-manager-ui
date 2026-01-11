<script setup lang="ts">
  import { type IExtension } from '@/types/extension';
  const { extension } = defineProps<{
    extension: IExtension;
  }>();
  console.log(extension);
</script>

<template>
  <div class="extension-item"></div>
</template>

<style scoped>
  .extension-item {
    background-color: var(--neutral-700);
    font-size: 16px;
    padding: 8px 17px;
    border: 1px solid var(--neutral-600);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
</style>
