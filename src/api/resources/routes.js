import Resources from "@/views/resources/index.vue"

export default [
  {
    path: "/resources",
    name: "resources",
    component: Resources,
    meta: {
      layout: "DefaultLayout",
      title: "Ресурсы",
      description: "Серверы и хосты PAM: статусы, доступ и обслуживание.",
    },
  },
]
