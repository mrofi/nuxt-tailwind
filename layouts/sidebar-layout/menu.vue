<template>
  <nav class="mt-10 text-sm">
    <ul>
      <menu-item
        v-for="item in items"
        :key="item.path"
        v-slot="{ open }"
        :item="item"
        @click="$emit('click')"
      >
        <ul
          v-if="item.children !== undefined"
          v-show="open"
          class="bg-black bg-opacity-25"
        >
          <menu-item
            v-for="subItem in item.children"
            :key="subItem.path"
            :item="subItem"
            icon="block"
            icon-class="h-1 w-1 ml-6 mr-1"
            @click="$emit('click')"
          />
        </ul>
      </menu-item>
    </ul>
  </nav>
</template>

<script>
import MenuItem from './menu-item.vue'

export default {
  name: 'Menu',
  components: { MenuItem },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
