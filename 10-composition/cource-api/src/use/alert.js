import { ref } from "vue";

export function useAlert(visibility = false) {
  const alert = ref(visibility);
  const toggle = () => (alert.value = !alert.value);
  const close = () => (alert.value = false);
  return { alert, close, toggle };
}
