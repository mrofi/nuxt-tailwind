<template>
  <header id="header" class="flex justify-between items-center py-4 px-3">
    <div class="flex items-center">
      <button
        class="text-gray-600 focus:outline-none lg:hidden mr-3"
        @click="$emit('toggleClick')"
      >
        <svg-icon icon="feather/menu" class="h-6 w-6" />
      </button>
    </div>

    <div class="flex items-center">
      <search />
      <notification />

      <profile
        :user-name="profileData.userName"
        :user-role="profileData.userRole"
        :image-url="profileData.userImageUrl"
        :links="profileData.menus"
        :logout-path="profileData.logoutPath"
      />
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
    profileData: {
      type: Object,
      default: () => {
        return {
          userName: null,
          userRole: null,
          userImageUrl: null,
          menus: [],
          logoutPath: null,
        }
      },
    },
  },
}
</script>
