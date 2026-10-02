<template>
  <div class="dash-list">
    <ul v-if="items.length" class="dash-list__items" role="list">
      <li v-for="item in items" :key="item.id" class="dash-list__item">
        <span
          class="dash-list__icon"
          :class="item.tone && `dash-list__icon--${item.tone}`"
          aria-hidden="true"
        >
          <AppIcon :name="item.icon" width="16" height="16" />
        </span>

        <div class="dash-list__main">
          <span class="dash-list__title">{{ item.title }}</span>
          <span v-if="item.meta" class="dash-list__meta">{{ item.meta }}</span>
        </div>

        <span
          v-if="item.status"
          class="dash-list__status"
          :class="item.tone && `dash-list__status--${item.tone}`"
        >
          {{ item.status }}
        </span>
        <span v-else-if="item.trailing" class="dash-list__trailing">{{ item.trailing }}</span>
      </li>
    </ul>

    <div v-else class="dash-list__empty" :class="{ 'dash-list__empty--ok': ok }">
      <span v-if="ok" class="dash-list__icon dash-list__icon--success" aria-hidden="true">
        <AppIcon name="circle-check" width="16" height="16" />
      </span>
      <p class="dash-list__empty-text">{{ emptyText }}</p>
    </div>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  emptyText: {
    type: String,
    default: "Пока пусто",
  },
  ok: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.dash-list {
  flex: 1;
  min-height: 0;
  max-height: 187px;
  overflow: hidden auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    padding: 8px 14px;
    border-radius: var(--radius-lg);
    transition: background-color var(--trs35);

    &:hover {
      background: var(--bg-muted);
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-md);
    background: var(--bg-muted);
    color: var(--control-disabled-text);

    &--success {
      background: var(--gray-blue100);
      color: var(--success);
    }

    &--warning {
      background: color-mix(in srgb, var(--warning) 16%, transparent);
      color: var(--warning);
    }

    &--error {
      background: color-mix(in srgb, var(--error) 12%, transparent);
      color: var(--error);
    }

    &--muted {
      background: var(--bg-muted);
      color: var(--control-disabled-text);
    }

    &--info {
      background: color-mix(in srgb, var(--purple) 12%, transparent);
      color: var(--purple);
    }
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  &__title {
    color: var(--text-strong);
    font-size: var(--fs-14);
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__meta {
    color: var(--control-disabled-text);
    font-size: var(--fs-12);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__status {
    flex-shrink: 0;
    color: var(--control-disabled-text);
    font-size: var(--fs-12);
    font-weight: 600;
    white-space: nowrap;

    &--error {
      color: var(--error);
    }

    &--warning {
      color: var(--warning);
    }

    &--success {
      color: var(--success);
    }
  }

  &__trailing {
    flex-shrink: 0;
    color: var(--text);
    font-size: var(--fs-12);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;
    gap: 8px;

    &--ok {
      flex-direction: row;
      align-items: center;
    }
  }

  &__empty-text {
    margin: 0;
    color: var(--control-disabled-text);
    font-size: var(--fs-14);
    line-height: 1.4;
  }
}
</style>
