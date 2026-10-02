<template>
  <main class="desktop-only">
    <div class="desktop-only__panel">
      <AppIcon class="desktop-only__logo" name="vue" width="50" height="42" />

      <h1 class="desktop-only__title">Макет для компьютера</h1>

      <p class="desktop-only__text">
        Демо <strong>PAM</strong> рассчитано на широкий экран: на телефоне макет не
        адаптирован.
      </p>

      <p class="desktop-only__note">Открой с экрана шире 1024&nbsp;px.</p>

      <a
        class="desktop-only__back"
        href="https://github.com/pVo83"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppIcon name="arrow-left" width="16" height="16" />
        На GitHub
      </a>
    </div>
  </main>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
</script>

<style lang="scss" scoped>
.desktop-only {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 24px;
  background: var(--bg-page);

  &__panel {
    box-sizing: border-box;
    width: 100%;
    max-width: 360px;
    padding: 40px 28px;
    border: 1px solid var(--border);
    border-radius: var(--radius-xxl);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-dual-small);
    text-align: center;
  }

  &__logo {
    display: block;
    margin: 0 auto 24px;
  }

  &__title {
    margin: 0 0 16px;
    color: var(--text-strong);
    font-size: var(--fs-20);
    font-weight: 700;
    line-height: 1.25;
  }

  &__text,
  &__note {
    margin: 0;
    font-size: var(--fs-14);
    line-height: 1.6;
  }

  &__text {
    margin-bottom: 16px;
    color: var(--text);
  }

  &__note {
    margin-bottom: 28px;
    color: var(--control-disabled-text);
  }

  &__back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    padding: 0 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    color: var(--primary);
    font-size: var(--fs-14);
    font-weight: 600;
    text-decoration: none;
    transition:
      color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--primary);
      color: var(--success);
    }
  }
}
</style>
