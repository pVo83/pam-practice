import Roles from "@/views/roles/index.vue"

export default [
  {
    path: "/roles",
    name: "roles",
    component: Roles,
    meta: {
      layout: "DefaultLayout",
      title: "Роли и доступы",
      description: "Роли PAM: права, политики доступа и привязка к ресурсам.",
    },
  },
]
