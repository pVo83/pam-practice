<template>
  <div class="tooltip" @mouseenter="show" @mouseleave="isVisible = false">
    <div ref="triggerRef" class="tooltip__trigger">
      <slot />
    </div>

    <Teleport to="body">
      <Transition name="tooltip-fade">
        <div v-if="isVisible" class="tooltip__content" :style="style" role="tooltip">
          {{ text }}
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from "vue"

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const triggerRef = ref(null)
const isVisible = ref(false)
const style = ref({})

const show = async () => {
  if (props.disabled || !props.text) return

  isVisible.value = true
  await nextTick()

  const rect = triggerRef.value.getBoundingClientRect()
  style.value = {
    top: `${rect.top + rect.height / 2}px`,
    left: `${rect.right + 10}px`,
  }
}

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) isVisible.value = false
  },
)
</script>

<style lang="scss" scoped>
.tooltip {
  display: block;
  width: 100%;

  &__trigger {
    display: block;
    width: 100%;
  }

  &__content {
    position: fixed;
    z-index: 1000;
    padding: 8px 12px;
    border-radius: var(--radius-md);
    background: var(--primary);
    color: var(--white);
    font-family: var(--ff-primary);
    font-size: var(--fs-12);
    font-weight: 500;
    line-height: 1.2;
    white-space: nowrap;
    box-shadow: var(--shadow-md);
    pointer-events: none;
    transform: translateY(-50%);
  }
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity var(--trs35);
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>
