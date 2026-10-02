<template>
  <div class="heading" :class="{ 'heading--flush': flush }">
    <div class="heading__copy">
      <h1 class="heading__title">{{ title }}</h1>
      <p v-if="description" class="heading__description">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="heading__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  flush: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  &--flush {
    margin-bottom: 0;
  }

  &__title {
    margin: 0 0 8px;
    color: var(--text-strong);
    font-size: var(--fs-22);
    font-weight: 700;
    line-height: 1.2;
  }

  &__description {
    margin: 0;
    color: var(--text);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    flex-shrink: 0;
    gap: 8px;
  }
}
</style>
