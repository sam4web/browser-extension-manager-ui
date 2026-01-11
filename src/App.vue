<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import ExtensionList from '@/components/ExtensionList.vue';
</script>

<template>
  <main>
    <Header />
    <ExtensionList />
  </main>
</template>

<style scoped>
  main {
    max-width: 78dvw;
    margin: 36px auto;
  }
</style>
