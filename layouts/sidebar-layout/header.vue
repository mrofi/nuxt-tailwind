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

      <a
        href="https://github.com/mrofi/nuxt-tailwind"
        class="h-8 w-8 flex mx-3 text-gray-600 focus:outline-none bg-black rounded-full"
        title="Github Repository"
        target="_blank"
      >
        <img
          class="w-full h-full object-cover"
          :src="`${$config.routerBase.replace(
            '\/$',
            ''
          )}/GitHub-Mark-Light-64px.png`"
          alt="Your avatar"
        />
      </a>

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
import Notification from './notification.vue'
import Profile from './profile.vue'
import Search from './search.vue'
export default {
  name: 'Header',
  components: { Notification, Profile, Search },
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
