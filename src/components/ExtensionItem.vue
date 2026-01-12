<script setup lang="ts">
  import { type IExtension } from '@/types/extension';
  import { computed, ref, watchEffect } from 'vue';

  const BASE_URL = import.meta.env.BASE_URL;

  const props = defineProps<{
    extension: IExtension;
  }>();

  const emit = defineEmits<{
    (e: 'toggle-extension', id: string): void;
    (e: 'hide-extension', id: string): void;
  }>();

  const logoPath = computed(() => {
    const logo = props.extension.logo.startsWith('/')
      ? props.extension.logo.slice(1)
      : props.extension.logo;
    return `${BASE_URL}${logo}`;
  });
  const isActive = ref(props.extension.isActive);
  watchEffect(() => {
    isActive.value = props.extension.isActive;
  });

  function handleToggle() {
    emit('toggle-extension', props.extension.id);
  }

  function handleHide() {
    emit('hide-extension', props.extension.id);
  }
</script>

<template>
  <div class="extension-item">
    <div class="upper-container">
      <img
        :src="logoPath"
        :alt="`${extension.name} Logo`"
      />
      <div class="content-container">
        <h3>{{ extension.name }}</h3>
        <p>{{ extension.description }}</p>
      </div>
    </div>
    <div class="lower-container">
      <button @click="handleHide">Remove</button>
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          class="sr-only"
          v-model="isActive"
          @change="handleToggle"
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
    font-size: 16px;
    padding: 16px 18px;
    border: 1px solid var(--neutral-100);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 1.5px 1px;
    color: var(--neutral-800);
    border-radius: 16px;
    background-color: var(--neutral-0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 54px;
  }

  @media screen and (max-width: 1025px) {
    .extension-item {
      gap: 25px;
      padding: 14px;
    }
  }

  .dark .extension-item {
    color: var(--neutral-100);
    border-color: var(--neutral-600);
    background-color: var(--neutral-800);
  }

  .extension-item .upper-container {
    display: flex;
    align-items: start;
    gap: 16px;
  }

  .extension-item .content-container {
    flex: 1;
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
    color: var(--neutral-600);
  }

  .dark .extension-item .content-container p {
    color: var(--neutral-300);
  }

  .extension-item .lower-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .extension-item button {
    background-color: transparent;
    padding: 8px 15px;
    font-weight: 500;
    opacity: 100%;
    color: var(--neutral-800);
  }

  .dark .extension-item button {
    color: var(--neutral-100);
  }

  .extension-item button:hover {
    background-color: var(--red-500);
    border-color: var(--red-500);
    color: var(--neutral-100);
  }

  .dark .extension-item button:hover {
    background-color: var(--red-400);
    border-color: var(--red-400);
    color: var(--neutral-800);
  }

  .extension-item button:focus {
    color: var(--neutral-800);
    background-color: var(--neutral-100);
    border-color: var(--neutral-100);
    outline-color: var(--red-700);
  }

  .dark .extension-item button:focus {
    color: var(--neutral-100);
    background-color: var(--neutral-600);
    border-color: var(--neutral-600);
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
    background-color: var(--neutral-300);
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition:
      background-color 260ms linear,
      outline-color 200ms linear,
      justify-content 270ms linear;
  }

  .dark .checkbox-box {
    background-color: var(--neutral-600);
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
    background-color: var(--red-700);
    justify-content: end;
  }

  .dark input:checked + .checkbox-box {
    background-color: var(--red-400);
  }

  .checkbox-wrapper:hover input:checked + .checkbox-box {
    background-color: var(--red-500);
  }
</style>
