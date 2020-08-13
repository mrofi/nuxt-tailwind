<template>
  <DropdownTopMenu>
    <template #button>
      <img
        class="h-full w-full object-cover"
        :src="imageUrl"
        alt="Your avatar"
      />
    </template>
    <div class="w-48 bg-indigo-700 text-white text-sm rounded-md shadow-xl">
      <div class="border-b px-4 py-4 border-indigo-600">
        John Wick
        <div class="text-xs">Web Developer</div>
      </div>
      <div class="p-2">
        <nuxt-link
          v-for="item in links"
          :key="item.path"
          :to="item.path"
          :class="linkClass"
        >
          <div v-if="item.icon !== undefined" class="inline-block">
            <svg-icon :icon="item.icon" class="h-5 w-5 mr-2" />
          </div>
          {{ item.caption }}
        </nuxt-link>
      </div>
    </div>
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
        'flex items-center block px-2 py-2 rounded-md hover:bg-indigo-600',
    },
  },
}
</script>
