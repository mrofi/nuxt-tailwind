<template>
  <DropdownTopMenu>
    <template #button>
      <img
        class="h-full w-full object-cover"
        :src="imageUrl"
        alt="Your avatar"
      />
    </template>
    <nuxt-link
      v-for="item in links"
      :key="item.path"
      :to="item.path"
      :class="linkClass"
    >
      {{ item.caption }}
    </nuxt-link>
  </DropdownTopMenu>
</template>

<script>
import DropdownTopMenu from './dropdown-topmenu.vue'
export default {
  components: { DropdownTopMenu },
  props: {
    imageUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80',
    },
    links: {
      type: Array,
      default: () => [],
    },
    linkClass: {
      type: String,
      default:
        'block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white',
    },
  },
}
</script>
