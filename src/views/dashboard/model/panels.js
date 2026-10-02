export const PANEL_VISIBLE_LIMIT = 3
export const moreCount = (items = []) => Math.max(0, items.length - PANEL_VISIBLE_LIMIT)

export const signalItems = [
  {
    id: 1,
    title: "Истекает учётка root@db-prod",
    meta: "Через 2 дня",
    icon: "key-round",
    tone: "error",
  },
  {
    id: 2,
    title: "MFA выключен у 3 сотрудников",
    meta: "Политика входа",
    icon: "circle-alert",
    tone: "warning",
  },
  {
    id: 3,
    title: "Ошибка сессии SSH #1842",
    meta: "Сегодня 11:24 · timeout",
    icon: "monitor",
    tone: "error",
  },
  {
    id: 4,
    title: "Пароль устарел · deploy@ci",
    meta: "Просрочен 5 дней",
    icon: "key-round",
    tone: "warning",
  },
  {
    id: 5,
    title: "Подозрительный login · jump-gw",
    meta: "Сегодня 09:11 · IP 185.12.x",
    icon: "shield",
    tone: "error",
  },
]

export const resourceItems = [
  {
    id: 1,
    title: "db-prod-01",
    meta: "10.0.1.14",
    icon: "server",
    tone: "error",
    status: "Офлайн",
  },
  {
    id: 2,
    title: "jump-gw",
    meta: "10.0.2.8",
    icon: "server",
    tone: "error",
    status: "Офлайн",
  },
  {
    id: 3,
    title: "win-rdp-finance",
    meta: "10.0.3.21",
    icon: "server",
    tone: "warning",
    status: "Обслуживание",
  },
]

export const activityItems = [
  {
    id: 1,
    title: "Одобрен запрос · bastion-ssh",
    meta: "Ковалёва · 12 мин назад",
    icon: "circle-check",
    tone: "success",
  },
  {
    id: 2,
    title: "Сессия SSH · db-prod-01",
    meta: "Морозов · 28 мин назад",
    icon: "monitor",
    tone: "muted",
  },
  {
    id: 3,
    title: "Сбой RDP · win-rdp-finance",
    meta: "Система · 1 ч назад",
    icon: "circle-alert",
    tone: "error",
  },
]

export const sessionItems = [
  {
    id: 1,
    title: "bastion-ssh · prod",
    meta: "Ковалёва · SSH · 14:02",
    icon: "monitor",
    tone: "success",
    status: "Активна",
  },
]

export const requestItems = []
