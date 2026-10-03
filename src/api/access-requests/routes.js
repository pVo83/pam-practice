import AccessRequests from "@/views/access-requests/index.vue"

export default [
  {
    path: "/access-requests",
    name: "access-requests",
    component: AccessRequests,
    meta: {
      layout: "DefaultLayout",
      title: "Запросы доступа",
      description: "Очередь запросов на доступ: согласование, сроки и решения.",
    },
  },
]
