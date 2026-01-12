<script setup lang="ts">
  import { type IExtension } from '@/types/extension';

  const { extension } = defineProps<{
    extension: IExtension;
  }>();
</script>

<template>
  <div class="extension-item">
    <div class="upper-container">
      <img
        :src="extension.logo"
        :alt="`${extension.name} Logo`"
      />
      <div class="content-container">
        <h3>{{ extension.name }}</h3>
        <p>{{ extension.description }}</p>
      </div>
    </div>
    <div class="lower-container">
      <button>Remove</button>
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          class="sr-only"
          :checked="extension.isActive"
        />
        <div class="checkbox-box">
          <div class="checkbox-dot"></div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
  .extension-item {
    background-color: var(--neutral-800);
    font-size: 16px;
    padding: 8px 18px;
    border: 1px solid var(--neutral-600);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    color: var(--neutral-100);
    border-radius: 16px;
  }

  .extension-item .upper-container {
    display: flex;
    gap: 18px;
  }

  .extension-item .content-container {
    margin-top: 8px;
  }

  .extension-item .content-container h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  .extension-item .content-container p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--neutral-300);
  }

  .extension-item .lower-container {
    margin-top: 62px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .extension-item button {
    background-color: transparent;
    padding: 8px 15px;
    transition:
      color 200ms linear,
      border-color 200ms linear,
      background-color 240ms,
      outline-color 180ms linear;
  }

  .extension-item button:hover {
    background-color: var(--red-400);
    color: var(--neutral-900);
    font-weight: 500;
    border-color: var(--red-400);
  }

  button:focus {
    background-color: var(--neutral-600);
    outline-color: var(--red-500);
  }

  .checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox-box {
    padding: 2px 3px;
    width: 40px;
    height: 23.5px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--neutral-600);
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition:
      background-color 260ms linear,
      outline-color 200ms linear,
      justify-content 270ms linear;
  }

  .checkbox-wrapper:focus-within .checkbox-box {
    outline-color: var(--red-500);
  }

  .checkbox-dot {
    width: 18px;
    height: 18px;
    background-color: var(--neutral-0);
    border-radius: 100%;
  }

  input:checked + .checkbox-box {
    background-color: var(--red-500);
    justify-content: end;
  }
</style>
