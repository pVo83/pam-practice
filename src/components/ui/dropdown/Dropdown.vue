<template>
  <div class="dropdown">
    <div ref="triggerRef" class="dropdown__trigger">
      <slot name="trigger" :open="isOpen" :toggle="toggle"></slot>
    </div>

    <div v-if="isOpen" class="overlay" @click="close" />

    <Teleport to="body">
      <Transition name="slide">
        <div ref="panelRef" v-if="isOpen" class="dropdown__panel" :style="panelStyle">
          <slot :close="close"></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from "vue"
import { useCloseOnEscape } from "@/composables/useCloseOnEscape"

const triggerRef = ref(null)
const panelRef = ref(null)
const panelStyle = ref({})

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
  panelStyle.value = {}
}

const toggle = () => {
  isOpen.value = !isOpen.value
}

const updatePosition = async () => {
  await nextTick()
  const trigger = triggerRef.value
  if (!trigger) return
  const rect = trigger.getBoundingClientRect()
  panelStyle.value = {
    top: `${rect.bottom + 6}px`,
    right: `${Math.max(8, window.innerWidth - rect.right)}px`,
    left: "auto",
  }
}

watch(isOpen, (open) => {
  if (open) updatePosition()
})

useCloseOnEscape(close)
</script>

<style lang="scss" scoped>
.dropdown {
  &__panel {
    position: fixed;
    z-index: 1200;
    width: max-content;
    max-width: min(230px, calc(100vw - 16px));
    margin: 0;
    padding: 16px;
    list-style: none;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background-color: color-mix(in srgb, var(--bg-elevated) 10%, transparent);
    backdrop-filter: saturate(150%) blur(20px);
    box-shadow: var(--shadow-dual);
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1190;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
