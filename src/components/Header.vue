<script setup lang="ts">
  import ThemeToggler from './ThemeToggler.vue';
  import logo from '@/assets/images/logo.svg';
</script>

<template>
  <nav>
    <div class="logo">
      <img
        :src="logo"
        alt="logo-image"
      />
      <p>Extensions</p>
    </div>
    <ThemeToggler />
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 16px;
    background-color: var(--neutral-0);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
  }

  .dark nav {
    background-color: var(--neutral-800);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .logo p {
    color: var(--neutral-800);
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  .dark .logo p {
    color: var(--neutral-100);
  }
</style>
