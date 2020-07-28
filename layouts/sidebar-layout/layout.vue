<template>
  <div>
    <div class="flex h-screen">
      <!-- Overlay -->
      <div
        class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden h-full"
        :class="isOpen ? 'block' : 'hidden'"
        @click="isOpen = !isOpen"
      ></div>
      <!-- End of Overlay -->

      <!-- Sidebar -->
      <Sidebar
        :menu-items="mainMenus"
        :is-open="isOpen"
        @click="closeSidebar()"
      />
      <!-- End of Sidebar -->

      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Header -->
        <Header
          :profile-menus="profileMenus"
          :profile-image-url="profileImageUrl"
          @toggleClick="isOpen = !isOpen"
        />
        <!-- End of Header -->

        <!-- Main -->
        <main id="main" class="flex-1 overflow-x-hidden overflow-y-auto">
          <div class="container mx-auto px-3 px-lg-1 py-3">
            <Nuxt />
          </div>
        </main>
        <!-- End of Main -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar.vue'

export default {
  components: { Header, Sidebar },
  props: {
    mainMenus: {
      type: Object,
      default: () => {},
    },
    profileMenus: {
      type: Object,
      default: () => {},
    },
    profileImageUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    closeSidebar() {
      this.isOpen = false
      document.getElementById('main').scrollTop = 0
    },
  },
}
</script>

<style>
body {
  background: #f3f3f3;
}
#header {
  background: #fafafa;
}
</style>
