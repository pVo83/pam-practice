import Dashboard from "@/views/dashboard/index.vue"

export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "DefaultLayout",
      title: "Дашборд",
      description: "Операционный обзор: сессии, очередь запросов, ресурсы и аудит.",
    },
  },
]
