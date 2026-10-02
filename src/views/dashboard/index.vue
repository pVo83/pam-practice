<template>
  <div class="dashboard">
    <StatCard :cards="cards" />

    <div class="dashboard__mid">
      <div class="dashboard__mid-left">
        <Panel
          class="dashboard__mid-item"
          title="Сигналы"
          description="Учётки, MFA, ошибки сессий"
          :more="moreCount(signalItems)"
          to="/"
        >
          <DashList :items="signalItems" empty-text="Критичных сигналов нет" ok />
        </Panel>

        <Panel
          class="dashboard__mid-item"
          title="Ресурсы"
          :more="moreCount(resourceItems)"
          to="/"
        >
          <template #description>
            <span class="dashboard__status dashboard__status--error">Офлайн 2</span>
            ·
            <span class="dashboard__status dashboard__status--warning">Обслуживание 1</span>
          </template>
          <DashList :items="resourceItems" empty-text="Проблемных ресурсов нет" ok />
        </Panel>
      </div>

      <Panel
        title="Активность"
        description="Свежие события"
        :more="moreCount(activityItems)"
        to="/"
      >
        <DashList :items="activityItems" empty-text="Событий пока нет" />
      </Panel>
    </div>

    <div class="dashboard__bottom">
      <Panel
        title="Сессии"
        description="Сейчас подключены"
        :more="moreCount(sessionItems)"
        to="/"
      >
        <DashList :items="sessionItems" empty-text="Нет активных сессий" />
      </Panel>

      <Panel
        title="Очередь"
        description="Ожидают решения"
        :more="moreCount(requestItems)"
        to="/"
      >
        <DashList :items="requestItems" empty-text="Новых заявок на рассмотрении нет" ok />
      </Panel>
    </div>
  </div>
</template>

<script setup>
import StatCard from "@/components/ui/stat-card/StatCard.vue"
import Panel from "@/components/ui/panel/Panel.vue"
import DashList from "./ui/DashList.vue"
import { cards } from "./model/cards"
import {
  moreCount,
  signalItems,
  resourceItems,
  activityItems,
  sessionItems,
  requestItems,
} from "./model/panels"
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  &__mid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: stretch;
    min-width: 0;
  }

  &__mid-left {
    display: grid;
    grid-template-columns: repeat(2, minmax(278px, 1fr));
    gap: 12px;
    min-width: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
  }

  &__mid-item {
    scroll-snap-align: start;
  }

  &__status {
    &--error {
      color: var(--error);
    }

    &--warning {
      color: var(--warning);
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    align-items: stretch;
    min-width: 0;
  }
}
</style>
