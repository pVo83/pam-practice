<template>
  <div class="default-layout">
    <Sidebar />
    <div class="default-layout__body">
      <div class="default-layout__toolbar">
        <SearchTrigger />
        <NotificationBell />
        <UserMenu />
      </div>
      <main class="default-layout__main">
        <Heading
          v-if="route.meta.title"
          :title="route.meta.title"
          :description="route.meta.description"
          :flush="Boolean(route.meta.headingFlush)"
        />
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import Heading from "@/components/Heading.vue"
import Sidebar from "@/components/SideBar/Sidebar.vue"
import SearchTrigger from "@/components/ui/search-trigger/SearchTrigger.vue"
import NotificationBell from "@/components/ui/notification-bell/NotificationBell.vue"
import UserMenu from "@/components/ui/user-menu/UserMenu.vue"

const route = useRoute()
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: var(--bg-page);
  overflow: hidden;
  gap: 24px;
  box-sizing: border-box;
  max-height: 100%;
  min-height: 0;

  &__body {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-xxl);
    background: var(--bg-elevated);
    overflow: hidden;
    flex: 1;
    min-width: 0;
    min-height: 0;
    box-shadow: var(--shadow-dual-small);
  }

  &__toolbar {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__main {
    flex: 1;
    min-height: 0;
    padding: 24px;
    overflow: auto;
    overscroll-behavior: contain;
  }
}
</style>
