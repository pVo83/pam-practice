import { ref, watch } from "vue"

export function useLocalStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  const value = ref(storedValue !== null ? JSON.parse(storedValue) : defaultValue)

  watch(
    value,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true }
  )

  return value
}
