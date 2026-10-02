<template>
  <span class="pulse-dot" :class="rootClass" :aria-label="ariaLabel">
    <span class="pulse-dot__light" aria-hidden="true" />
    <span v-if="label" class="pulse-dot__label">{{ label }}</span>
  </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  tone: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "success", "warning", "error"].includes(value),
  },
  pulse: {
    type: Boolean,
    default: true,
  },
})

const rootClass = computed(() => [`pulse-dot--${props.tone}`, { "pulse-dot--pulse": props.pulse }])

const ariaLabel = computed(() => props.label || undefined)
</script>

<style lang="scss" scoped>
.pulse-dot {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &__light {
    position: relative;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    background: var(--pulse-dot-color);
  }

  &__label {
    color: var(--pulse-dot-color);
    font-size: var(--fs-12);
    font-weight: 600;
    white-space: nowrap;
  }

  &--primary {
    --pulse-dot-color: var(--primary);
  }

  &--success {
    --pulse-dot-color: var(--success);
  }

  &--warning {
    --pulse-dot-color: var(--warning);
  }

  &--error {
    --pulse-dot-color: var(--error);
  }

  &--pulse &__light {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--pulse-dot-color) 55%, transparent);
    animation: pulse-dot-glow 1.6s ease-out infinite;

    &::after {
      position: absolute;
      border: 1px solid color-mix(in srgb, var(--pulse-dot-color) 45%, transparent);
      border-radius: inherit;
      content: "";
      inset: -3px;
      animation: pulse-dot-ring 1.6s ease-out infinite;
    }
  }
}

@keyframes pulse-dot-glow {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--pulse-dot-color) 50%, transparent);
  }

  70% {
    box-shadow: 0 0 0 8px transparent;
  }

  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

@keyframes pulse-dot-ring {
  0% {
    opacity: 0.9;
    transform: scale(0.85);
  }

  70% {
    opacity: 0;
    transform: scale(1.45);
  }

  100% {
    opacity: 0;
    transform: scale(1.45);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pulse-dot--pulse .pulse-dot__light {
    animation: none;
    box-shadow: none;

    &::after {
      animation: none;
      display: none;
    }
  }
}
</style>
