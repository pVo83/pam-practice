<template>
  <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">
    <div class="sidebar__brand">
      <AppIcon class="sidebar__brand-logo" name="vue" width="36" height="35" />
      <div class="sidebar__brand-text-wrap">
        <span class="sidebar__brand-text">Панель</span>
        <span class="sidebar__brand-text-bold">Администратора</span>
      </div>
    </div>

    <nav class="sidebar__nav">
      <Tooltip v-for="item in navItems" :key="item.to" :text="item.label" :disabled="!isCollapsed">
        <RouterLink
          :to="item.to"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': isActive(item.to) }"
        >
          <span class="sidebar__link-icon-wrap">
            <AppIcon class="sidebar__link-icon" :name="item.icon" width="20" height="20" />
          </span>
          <span class="sidebar__link-label">{{ item.label }}</span>
        </RouterLink>
      </Tooltip>
    </nav>

    <div class="sidebar__footer">
      <Tooltip :text="isCollapsed ? 'Развернуть' : 'Свернуть'" :disabled="!isCollapsed">
        <div class="sidebar__collapse-wrap">
          <button type="button" class="sidebar__collapse" @click="isCollapsed = !isCollapsed">
            <span class="sidebar__collapse-icon" aria-hidden="true">
              <Transition name="sidebar-chevron" mode="out-in">
                <span
                  v-if="isCollapsed"
                  key="right"
                  class="sidebar__chevron sidebar__chevron--right"
                >
                  <AppIcon name="chevrons-right" width="20" height="20" />
                </span>
                <span v-else key="left" class="sidebar__chevron sidebar__chevron--left">
                  <AppIcon name="chevrons-left" width="20" height="20" />
                </span>
              </Transition>
            </span>
            <span class="sidebar__collapse-label">Свернуть</span>
          </button>
        </div>
      </Tooltip>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from "vue-router"
import AppIcon from "../ui/appIcon/AppIcon.vue"
import Tooltip from "../ui/tooltip/Tooltip.vue"
import { useLocalStorage } from "@/composables/useLocalStorage"
import { navItems } from "./nav"

const route = useRoute()
const isCollapsed = useLocalStorage("sidebarCollapsed", false)

const isActive = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 260px;
  height: 100%;
  padding: 24px 12px 12px;
  border-radius: 24px;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-dual-small);
  transition: width var(--trs35);
  overflow: hidden;

  &--collapsed {
    width: 80px;
  }

  &--collapsed &__brand-text,
  &--collapsed &__brand-text-bold,
  &--collapsed &__link-label,
  &--collapsed &__collapse-label {
    opacity: 0;
    transform: translateX(12px);
    pointer-events: none;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
    padding: 0 10px;
    min-height: 38px;
  }

  &__brand-logo {
    flex-shrink: 0;
  }

  &__brand-text-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__brand-text-bold {
    font-size: var(--fs-16);
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
  }

  &__brand-text {
    color: var(--text-strong);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 2px;
    overflow: hidden auto;
    min-height: 0;
  }

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 21px;
    min-height: 44px;
    padding: 12px 15px;
    border-radius: var(--radius-lg);
    color: var(--text);
    font-size: var(--fs-14);
    font-weight: 500;
    text-decoration: none;
    outline: none;
    outline-offset: 0;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &:hover {
      background: var(--gray50);
      color: var(--text-strong);
    }

    &--active {
      background: color-mix(in srgb, var(--primary) 8%, transparent);
      color: var(--primary);

      &::before {
        position: absolute;
        left: 0;
        width: 2px;
        height: 24px;
        border-radius: 0 2px 2px 0;
        background: var(--primary);
        content: "";
      }
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px var(--primary);
    }
  }

  &__link-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  &__link-icon {
    color: currentcolor;
  }

  &__link-label {
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
    overflow: hidden;
  }

  &__footer {
    flex-shrink: 0;
    margin-top: auto;
  }

  &__collapse-wrap {
    flex-shrink: 0;
  }

  &__collapse {
    display: flex;
    align-items: center;
    gap: 21px;
    width: 100%;
    min-height: 44px;
    padding: 12px 15px;
    border: none;
    border-radius: var(--radius-lg);
    background: transparent;
    color: var(--text);
    font-size: var(--fs-14);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--trs35);

    &:hover {
      background: var(--gray50);
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px var(--primary);
    }
  }

  &__collapse-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }

  &__chevron {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__collapse-label {
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
    overflow: hidden;
  }
}

.sidebar-chevron-enter-active,
.sidebar-chevron-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.sidebar-chevron-enter-from.sidebar__chevron--left {
  opacity: 0;
  transform: translateX(8px);
}

.sidebar-chevron-leave-to.sidebar__chevron--left {
  opacity: 0;
  transform: translateX(-8px);
}

.sidebar-chevron-enter-from.sidebar__chevron--right {
  opacity: 0;
  transform: translateX(-8px);
}

.sidebar-chevron-leave-to.sidebar__chevron--right {
  opacity: 0;
  transform: translateX(8px);
}
</style>
