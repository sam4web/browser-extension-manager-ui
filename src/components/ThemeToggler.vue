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
    cursor: pointer;
    outline-offset: 2px;
    outline: 2px solid transparent;
    background-color: var(--neutral-700);
    transition:
      background-color 260ms linear,
      outline-color 200ms linear;
  }

  button:focus,
  button:hover {
    background-color: var(--neutral-600);
  }

  button:focus {
    outline-color: var(--red-500);
  }
</style>
