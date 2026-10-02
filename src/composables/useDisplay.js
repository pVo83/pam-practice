import { onMounted, onUnmounted, ref } from "vue"

export function useDisplay() {
  const media = window.matchMedia("(max-width: 1024px)")
  const isMobile = ref(media.matches)

  const onChange = (event) => {
    isMobile.value = event.matches
  }

  onMounted(() => {
    media.addEventListener("change", onChange)
  })

  onUnmounted(() => {
    media.removeEventListener("change", onChange)
  })

  return { isMobile }
}
