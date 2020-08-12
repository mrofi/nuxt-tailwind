<template>
  <header id="header" class="flex justify-between items-center py-4 px-3">
    <div class="flex items-center">
      <button
        class="text-gray-600 focus:outline-none lg:hidden mr-3"
        @click="$emit('toggleClick')"
      >
        <SvgMenu class="h-6 w-6" />
      </button>
    </div>

    <div class="flex items-center">
      <search />
      <notification />

      <profile :links="profileMenus" :image-url="profileImageUrl" />
    </div>
  </header>
</template>

<script>
import notification from './notification.vue'
import profile from './profile.vue'
import search from './search.vue'
export default {
  components: { notification, profile, search },
  props: {
    profileMenus: {
      type: Object,
      default: () => {},
    },
    profileImageUrl: {
      type: String,
      default: null,
    },
  },
}
</script>
