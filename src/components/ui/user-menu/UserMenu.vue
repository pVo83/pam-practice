<template>
  <div class="user-menu">
    <button type="button" class="user-menu__trigger" aria-label="Профиль">
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
  </div>
</template>

<script setup></script>

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

    &:hover {
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
}
</style>
