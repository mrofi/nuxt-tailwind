<template>
  <div>
    <div class="flex h-screen">
      <div
        class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden h-full"
        :class="isOpen ? 'block' : 'hidden'"
        @click="isOpen = !isOpen"
      ></div>
      <Sidebar :is-open="isOpen" @click="closeSidebar()" />
      <div class="flex-1 flex flex-col overflow-hidden">
        <header id="header" class="flex justify-between items-center py-4 px-3">
          <div class="flex items-center">
            <button
              class="text-gray-600 focus:outline-none lg:hidden mr-3"
              @click="isOpen = !isOpen"
            >
              <MenuSvg class="h-6 w-6" />
            </button>

            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchSvg class="h-5 w-5 text-gray-500" />
              </span>

              <input
                class="form-input w-40 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          <div class="flex items-center">
            <button class="flex mx-4 text-gray-600 focus:outline-none">
              <BellSvg class="h-6 w-6" />
            </button>

            <ProfileMenu :links="profileLinks" :image-url="profileImageUrl" />
          </div>
        </header>

        <main id="main" class="flex-1 overflow-x-hidden overflow-y-auto">
          <div class="container mx-auto px-3 px-lg-1 py-3">
            <Nuxt />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from '@/components/Base/ProfileMenu.vue'
import Sidebar from '@/components/Base/Sidebar.vue'
import BellSvg from '@/components/Svg/Bell.vue'
import MenuSvg from '@/components/Svg/Menu.vue'
import SearchSvg from '@/components/Svg/Search.vue'

export default {
  components: { ProfileMenu, Sidebar, BellSvg, MenuSvg, SearchSvg },
  data() {
    return {
      isOpen: false,
      profileImageUrl:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80',
      profileLinks: [
        {
          path: '/profile',
          caption: 'Profile',
        },
        {
          path: '/products',
          caption: 'Products',
        },
        {
          path: '/logout',
          caption: 'Logout',
        },
      ],
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
