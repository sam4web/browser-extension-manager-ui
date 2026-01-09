<script setup lang="ts">
  import useTheme from '../composables/useTheme';

  const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button @click="toggleTheme">{{ theme }}</button>
</template>
