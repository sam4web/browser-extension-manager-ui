import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

export default function useTheme() {
  const STORAGE_KEY = 'user-theme-preference';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const theme = ref(localStorage.getItem(STORAGE_KEY) || (mediaQuery.matches ? 'dark' : 'light'));

  const systemHandler = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      theme.value = event.matches ? 'dark' : 'light';
    }
  };

  const isDark = computed(() => theme.value === 'dark');

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, theme.value);
  };

  watch(
    theme,
    (newTheme) => {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    { immediate: true },
  );

  onMounted(() => {
    mediaQuery.addEventListener('change', systemHandler);
  });

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', systemHandler);
  });

  return { theme, toggleTheme, isDark };
}
