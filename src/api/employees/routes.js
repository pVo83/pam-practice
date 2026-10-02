import Employees from "@/views/employees/index.vue"

export default [
  {
    path: "/employees",
    name: "employees",
    component: Employees,
    meta: {
      layout: "DefaultLayout",
      title: "Пользователи",
      description: "Управление пользователями PAM: роли, статусы и доступ к консоли.",
    },
  },
]
