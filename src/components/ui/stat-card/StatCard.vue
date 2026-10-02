<template>
  <ul class="stat-card" role="list">
    <li v-for="card in cards" :key="card.id" class="stat-card__item">
      <div class="stat-card__main">
        <span class="stat-card__label">{{ card.label }}</span>
        <span class="stat-card__value">{{ card.value }}</span>
        <span class="stat-card__hint">{{ card.hint }}</span>
      </div>

      <aside class="stat-card__aside" aria-hidden="true">
        <span class="stat-card__icon" :class="`stat-card__icon--${card.tone}`">
          <AppIcon :name="card.icon" width="20" height="20" />
        </span>
        <SparkBars
          v-if="card.spark?.length"
          :values="card.spark"
          :tone="card.tone"
          :label="`${card.label}: динамика`"
        />
      </aside>
    </li>
  </ul>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import SparkBars from "@/components/ui/spark-bars/SparkBars.vue"

defineProps({
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.stat-card {
  display: grid;
  grid-template-columns: repeat(4, minmax(278px, 1fr));
  gap: 12px;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    min-width: 0;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    background: var(--bg-elevated);
    scroll-snap-align: start;
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    min-width: 0;
  }

  &__aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 24px;
  }

  &__label {
    color: var(--text);
    font-size: var(--fs-14);
    font-weight: 600;
  }

  &__value {
    color: var(--text-strong);
    font-size: var(--fs-24);
    font-weight: 700;
    line-height: 1.1;
  }

  &__hint {
    color: var(--control-disabled-text);
    font-size: var(--fs-12);
    line-height: 1.35;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-lg);

    &--success {
      background: var(--gray-blue50);
      color: var(--success);
    }

    &--muted {
      background: var(--bg-muted);
      color: var(--control-disabled-text);
    }

    &--error {
      background: color-mix(in srgb, var(--error) 12%, transparent);
      color: var(--error);
    }

    &--info {
      background: color-mix(in srgb, var(--purple) 12%, transparent);
      color: var(--purple);
    }
  }
}
</style>
