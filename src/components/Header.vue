<script setup lang="ts">
  import ThemeToggler from './ThemeToggler.vue';
</script>

<template>
  <nav>
    <div class="logo">
      <img
        src="/images/logo.svg"
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
    background-color: var(--neutral-800);
    padding: 10px 15px;
    border-radius: 16px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .logo p {
    color: var(--neutral-100);
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
</style>
