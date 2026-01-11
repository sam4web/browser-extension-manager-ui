<style setup lang="ts"></style>

<template>
  <div class="title-container">
    <h2>Extensions List</h2>

    <div class="button-container">
      <button class="active">All</button>
      <button>Active</button>
      <button>Inactive</button>
    </div>
  </div>
</template>

<style scoped>
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 52px;
  }

  .title-container h2 {
    color: var(--neutral-100);
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
</style>
