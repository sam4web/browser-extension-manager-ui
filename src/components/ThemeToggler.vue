<script setup lang="ts">
  import useTheme from '../composables/useTheme';

  const { isDark, toggleTheme } = useTheme();
  console.log(isDark.value);
</script>

<template>
  <button @click="toggleTheme">
    <img
      :src="isDark ? '/images/icon-sun.svg' : '/images/icon-moon.svg'"
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
