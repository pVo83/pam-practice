<template>
  <div class="notification-bell">
    <button type="button" class="notification-bell__trigger" aria-label="Уведомления">
      <AppIcon name="bell" width="20" height="20" />
      <span v-if="unreadCount > 0" class="notification-bell__badge">{{ unreadCount }}</span>
    </button>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  unreadCount: {
    type: Number,
    default: 3,
  },
})
</script>

<style lang="scss" scoped>
.notification-bell {
  &__trigger {
    position: relative;
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

  &__badge {
    position: absolute;
    top: 2px;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: var(--radius-full);
    background: var(--primary);
    color: var(--white);
    font-size: var(--fs-10);
    font-weight: 600;
    line-height: 1;
  }
}
</style>
