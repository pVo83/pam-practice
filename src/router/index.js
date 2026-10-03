import { createRouter, createWebHashHistory } from "vue-router"

import dashboardRoutes from "@/api/dashboard/routes"
import employeeRoutes from "@/api/employees/routes"
import resourcesRoutes from "@/api/resources/routes"
import accountsRoutes from "@/api/accounts/router"
import rolesRoutes from "@/api/roles/router"
import accessRequestsRoutes from "@/api/access-requests/routes"
import sessionsRoutes from "@/api/sessions/routes"

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  ...dashboardRoutes,
  ...employeeRoutes,
  ...resourcesRoutes,
  ...accountsRoutes,
  ...rolesRoutes,
  ...accessRequestsRoutes,
  ...sessionsRoutes,
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return { left: 0, top: 0 }
  },
})

export default router
