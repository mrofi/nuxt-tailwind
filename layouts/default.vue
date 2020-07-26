<template>
  <div>
    <div class="flex h-screen">
      <div
        class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden h-full"
        :class="isOpen ? 'block' : 'hidden'"
        @click="isOpen = !isOpen"
      ></div>
      <div
        :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
      >
        <div class="flex items-center mt-4 px-3">
          <div class="flex items-center">
            <svg
              class="h-12 w-12"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              />
            </svg>

            <span class="text-white text-2xl mx-2 font-semibold">My App</span>
          </div>
        </div>

        <SidebarMenu
          :current-path="this.$route.path"
          @closeSidebar="closeSidebar()"
        />
      </div>

      <div class="flex-1 flex flex-col overflow-hidden">
        <header id="header" class="flex justify-between items-center py-4 px-3">
          <div class="flex items-center">
            <button
              class="text-gray-600 focus:outline-none lg:hidden mr-3"
              @click="isOpen = !isOpen"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div class="relative">
              <button
                class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
                @click="dropdownOpen = !dropdownOpen"
              >
                <img
                  class="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                  alt="Your avatar"
                />
              </button>

              <div
                v-show="dropdownOpen"
                class="fixed inset-0 h-full w-full z-10"
                @click="dropdownOpen = false"
              ></div>

              <div
                v-show="dropdownOpen"
                class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Products</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Logout</a
                >
              </div>
            </div>
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
import SidebarMenu from '@/components/Base/SidebarMenu.vue'

export default {
  scrollToTop: true,
  components: { SidebarMenu },
  data() {
    return {
      dropdownOpen: false,
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
