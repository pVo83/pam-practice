import { onMounted, onUnmounted } from "vue"

export function useCloseOnEscape(onClose) {
  function closeEscape(event) {
    if (event.key === "Escape") {
      onClose?.()
    }
  }

  onMounted(() => {
    document.addEventListener("keydown", closeEscape)
  })
  onUnmounted(() => {
    document.removeEventListener("keydown", closeEscape)
  })
}
