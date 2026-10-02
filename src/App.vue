<template>
  <DesktopOnly v-if="isMobile" />
  <template v-else>
    <component :is="layout">
      <router-view />
    </component>
  </template>
  <Icons />
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue"
import { useRoute } from "vue-router"
import Icons from "@/assets/Icons.vue"
import DesktopOnly from "@/views/system/DesktopOnly.vue"
import { useDisplay } from "@/composables/useDisplay"

const route = useRoute()
const { isMobile } = useDisplay()

const layouts = {
  DefaultLayout: defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue")),
  EmptyLayout: defineAsyncComponent(() => import("@/layouts/EmptyLayout.vue")),
}

const layout = computed(() => layouts[route.meta.layout || "DefaultLayout"])
</script>
