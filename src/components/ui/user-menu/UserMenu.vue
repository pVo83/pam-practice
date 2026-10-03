<template>
  <Dropdown class="user-menu">
    <template #trigger="{ toggle, open }">
      <button
        type="button"
        class="user-menu__trigger"
        :class="{ 'user-menu__trigger--open': open }"
        aria-label="Профиль"
        :aria-expanded="open"
        aria-haspopup="menu"
        @click="toggle"
      >
        <span class="user-menu__avatar">
          <picture>
            <source srcset="/img/user_img/user.webp" type="image/webp" />
            <img
              class="user-menu__photo"
              src="/img/user_img/user.png"
              alt=""
              width="32"
              height="32"
            />
          </picture>
          <span class="user-menu__status" aria-hidden="true" />
        </span>
      </button>
    </template>

    <template #default="{ close }">
      <ul class="user-menu__list" role="menu">
        <li
          v-for="item in links"
          :key="item.id"
          class="user-menu__item"
          :class="{ 'user-menu__item--separated': item.danger }"
        >
          <RouterLink
            v-if="item.type === 'link'"
            class="user-menu__link"
            :to="item.to"
            role="menuitem"
            @click="close"
          >
            <AppIcon
              v-if="item.icon"
              class="user-menu__icon"
              :name="item.icon"
              width="20"
              height="20"
            />
            <span class="user-menu__label">{{ item.title }}</span>
          </RouterLink>

          <button
            v-else
            type="button"
            class="user-menu__action"
            :class="{ 'user-menu__action--danger': item.danger }"
            role="menuitem"
            @click="onAction(item, close)"
          >
            <AppIcon
              v-if="item.icon"
              class="user-menu__icon"
              :name="item.icon"
              width="20"
              height="20"
            />
            <span class="user-menu__label">{{ item.title }}</span>
          </button>
        </li>
      </ul>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from "@/components/ui/dropdown/Dropdown.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import { links } from "./model/links"

const onAction = (item, close) => {
  close()

  if (item.action === "logout") {
    // auth logout
  }
}
</script>

<style lang="scss" scoped>
.user-menu {
  &__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: var(--radius-lg);
    background: transparent;
    cursor: pointer;
    transition: background-color var(--trs35);

    &:hover,
    &--open {
      background: var(--bg-muted);
    }
  }

  &__avatar {
    position: relative;
    display: flex;
    width: 32px;
    height: 32px;
  }

  &__photo {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__status {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border: 2px solid var(--bg-elevated);
    border-radius: 50%;
    background: var(--primary);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    min-width: 0;

    &--separated {
      position: relative;
      margin-top: 2px;
      padding-top: 7px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--border);
      }
    }
  }

  &__link,
  &__action {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    min-height: 40px;
    padding: 10px 12px;
    border-radius: var(--radius-md);
    color: var(--text-strong);
    font-size: var(--fs-14);
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none;
    transition: background-color var(--trs35);

    &:hover {
      background: var(--bg-muted);
    }
  }

  &__action {
    border: 0;
    background: transparent;
    font: inherit;
    text-align: start;
    cursor: pointer;

    &--danger {
      color: var(--error);

      &:hover {
        background: color-mix(in srgb, var(--error) 10%, transparent);
      }
    }
  }

  &__icon {
    flex-shrink: 0;
  }

  &__label {
    min-width: 0;
  }
}
</style>
