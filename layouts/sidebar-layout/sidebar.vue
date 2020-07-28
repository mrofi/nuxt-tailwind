<template>
  <div
    :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
  >
    <div class="flex items-center mt-4 px-3">
      <div class="flex items-center">
        <Logo class="h-12 w-12" />
        <span class="text-white text-2xl mx-2 font-semibold">My App</span>
      </div>
    </div>

    <Menu :items="menuItems" @click="$emit('click')" />
  </div>
</template>

<script>
import Menu from './menu.vue'

export default {
  components: { Menu },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
