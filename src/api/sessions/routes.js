import Sessions from "@/views/sessions/index.vue"

export default [
  {
    path: "/sessions",
    name: "sessions",
    component: Sessions,
    meta: {
      layout: "DefaultLayout",
      title: "Сессии",
      description: "Активные подключения PAM: SSH, RDP и контроль сессий.",
    },
  },
]
