<template>
  <layout :main-menus="mainMenus" :profile-data="profileData" />
</template>

<script>
import Layout from './sidebar-layout/layout.vue'
import MainMenu from '@/resources/menu'

export default {
  components: { Layout },
  data() {
    return {
      mainMenus: MainMenu,
      profileData: {
        userName: 'John Wick',
        userRole: 'Manager',
        userImageUrl:
          'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80',
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
