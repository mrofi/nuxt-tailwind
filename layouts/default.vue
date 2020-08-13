<template>
  <layout
    :main-menus="mainMenus"
    :profile-menus="profileMenus"
    :profile-image-url="profileImageUrl"
  />
</template>

<script>
import Layout from './sidebar-layout/layout.vue'
import MainMenu from '@/resources/menu'

export default {
  components: { Layout },
  data() {
    return {
      mainMenus: MainMenu,
      profileImageUrl:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80',
      profileMenus: [
        {
          path: '/profile',
          icon: 'feather/user',
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
