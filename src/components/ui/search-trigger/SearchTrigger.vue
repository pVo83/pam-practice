<template>
  <div class="search-trigger">
    <button type="button" class="search-trigger__btn" aria-label="Поиск">
      <AppIcon name="search" width="20" height="20" />
    </button>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
</script>

<style lang="scss" scoped>
.search-trigger {
  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: var(--radius-lg);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &:hover {
      background: var(--bg-muted);
      color: var(--text-strong);
    }
  }
}
</style>
