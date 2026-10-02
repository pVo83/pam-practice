<template>
  <button :class="buttonClasses" :disabled="disabled" :type="type" @click="$emit('click', $event)">
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "outline", "ghost"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  return ["btn", `btn--${props.variant}`, `btn--${props.size}`, { "btn--disabled": props.disabled }]
})
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  cursor: pointer;
  transition: background-color var(--trs25), border-color var(--trs25), color var(--trs25);

  &:focus-visible {
    outline: 2px solid currentcolor;
    outline-offset: 2px;
  }

  // ── Размеры ──────────────────────────────
  &--small {
    height: 32px;
    padding: 0 8px;
    font-size: var(--fs-12);
  }

  &--medium {
    height: 38px;
    padding: 0 16px;
    font-size: var(--fs-14);
  }

  &--large {
    height: 48px;
    padding: 0 24px;
    font-size: var(--fs-16);
  }

  // ── Варианты (заменить цвета под проект) ──
  &--primary {
    background-color: #249cd4;
    color: #fff;
    border-color: #249cd4;

    @include hover {
      &:not(.btn--disabled) {
        border-color: #1e7ba8;
        background-color: #1e7ba8;
      }
    }
  }

  &--secondary {
    background-color: #6c757d;
    color: #fff;
    border-color: #6c757d;

    @include hover {
      &:not(.btn--disabled) {
        border-color: #5a6268;
        background-color: #5a6268;
      }
    }
  }

  &--outline {
    background-color: transparent;
    color: #249cd4;
    border-color: #249cd4;

    @include hover {
      &:not(.btn--disabled) {
        background-color: #249cd4;
        color: #fff;
      }
    }
  }

  &--ghost {
    background-color: transparent;
    color: #249cd4;
    border-color: transparent;

    @include hover {
      &:not(.btn--disabled) {
        background-color: rgb(36 156 212 / 10%);
      }
    }
  }

  // ── Состояния ────────────────────────────
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
