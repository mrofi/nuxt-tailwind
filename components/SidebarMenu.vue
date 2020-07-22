<template>
  <nav class="mt-10 text-sm">
    <nuxt-link
      v-for="item in items"
      :key="item.path"
      class="flex items-center py-3 px-6 block border-l-4"
      :class="
        item.path == currentPath
          ? 'bg-black bg-opacity-25 text-gray-100 border-gray-100'
          : 'border-gray-900 text-gray-500 hover:bg-black hover:bg-opacity-25 hover:text-gray-100'
      "
      :to="item.path"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div
        :class="item.path == currentPath ? 'text-indigo-500' : 'text-gray-700'"
        v-html="item.icon"
      ></div>
      <span class="mx-4">{{ item.caption }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
import * as menu from '../resources/menu'

export default {
  props: {
    currentPath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: menu,
    }
  },
}
</script>
