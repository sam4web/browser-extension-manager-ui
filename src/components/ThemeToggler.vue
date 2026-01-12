<script setup lang="ts">
  import useTheme from '../composables/useTheme';
  import sunIcon from '@/assets/images/icon-sun.svg';
  import moonIcon from '@/assets/images/icon-moon.svg';

  const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button @click="toggleTheme">
    <img
      :src="isDark ? sunIcon : moonIcon"
      alt="theme-toggler-icon"
    />
  </button>
</template>

<style scoped>
  button {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--neutral-700);
  }
</style>
