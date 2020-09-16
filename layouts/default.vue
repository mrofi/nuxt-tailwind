<template>
  <layout :main-menus="mainMenus" :profile-data="profileData" />
</template>

<script>
import MainMenu from '@/resources/menu'
import Layout from './sidebar-layout/layout.vue'

export default {
  components: { Layout },
  data() {
    return {
      mainMenus: MainMenu,
      profileData: {
        userName: 'John Wick',
        userRole: 'Manager',
        userImageUrl:
          'https://avatars3.githubusercontent.com/u/7432391?s=460&u=afb02121fc4cd70433af2462c4d24ddbc5d88903&v=4',
        menus: [
          {
            path: '/profile',
            icon: 'feather/user',
            caption: 'Profile',
          },
          {
            path: '/order',
            icon: 'feather/layers',
            caption: 'Order',
          },
          {
            path: '/payment',
            icon: 'feather/credit-card',
            caption: 'Payment',
          },
          {
            path: '/help',
            icon: 'feather/help-circle',
            caption: 'Help',
          },
        ],
        logoutPath: '/logout',
      },
    }
  },
  methods: {
    makeTitle: (text) => {
      const words = text.split('-')

      for (let i = 0; i < words.length; i++) {
        const word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
      }

      return words.join(' ')
    },
  },
  head() {
    const title = this.$route.name || 'Error 404 - Page Not Found'
    return {
      titleTemplate: this.makeTitle(title) + ' | %s',
    }
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
