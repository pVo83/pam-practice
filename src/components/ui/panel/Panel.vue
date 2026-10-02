<template>
  <section class="panel" :aria-label="more > 0 ? `${title}, ещё ${more}` : undefined">
    <header class="panel__header">
      <div class="panel__title-row">
        <div class="panel__title-group">
          <h3 class="panel__title">{{ title }}</h3>
          <span v-if="more > 0" class="panel__more">+{{ more }}</span>
        </div>

        <div v-if="to" class="panel__aside">
          <RouterLink class="panel__link" :to="to">
            <span>{{ linkLabel }}</span>
            <AppIcon name="arrow-right" width="14" height="14" />
          </RouterLink>
        </div>
      </div>
      <p v-if="$slots.description || description" class="panel__description">
        <slot name="description">{{ description }}</slot>
      </p>
    </header>
    <div class="panel__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  more: {
    type: Number,
    default: 0,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  linkLabel: {
    type: String,
    default: "Перейти",
  },
})
</script>

<style lang="scss" scoped>
.panel {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--bg-elevated);

  &__header {
    margin-bottom: 10px;
  }

  &__title-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 4px 8px;
  }

  &__title-group {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  &__title {
    margin: 0;
    color: var(--text-strong);
    font-size: var(--fs-16);
    font-weight: 600;
    line-height: 1.2;
  }

  &__aside {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;
  }

  &__more {
    color: var(--primary);
    font-size: var(--fs-12);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  &__description {
    margin: 4px 0 0;
    color: var(--control-disabled-text);
    font-size: var(--fs-12);
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    gap: 4px;
    color: var(--primary);
    font-size: var(--fs-12);
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
  }
}
</style>
