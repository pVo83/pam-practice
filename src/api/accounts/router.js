import Accounts from "@/views/accounts/index.vue"

export default [
  {
    path: "/accounts",
    name: "accounts",
    component: Accounts,
    meta: {
      layout: "DefaultLayout",
      title: "Учетная запись",
      description: "Привилегированные учётки: владельцы, сроки действия и ротация паролей.",
    },
  },
]
