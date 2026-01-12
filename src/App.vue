<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import ExtensionList from '@/components/ExtensionList.vue';
  import Attribution from '@/components/Attribution.vue';
  import { onMounted } from 'vue';
  import { useExtensionStore } from './store/extension';

  const { initializeExtensions } = useExtensionStore();
  onMounted(initializeExtensions);
</script>

<template>
  <main>
    <Header />
    <ExtensionList />
    <Attribution />
  </main>
</template>

<style scoped>
  main {
    max-width: 1200px;
    width: 100%;
    margin: 36px auto;
    padding: 5px 15px;
  }

  @media screen and (max-width: 576px) {
    main {
      margin: 0 auto;
      padding: 15px;
    }
  }
</style>
