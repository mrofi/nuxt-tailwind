<template>
  <nav class="mt-10 text-sm">
    <nuxt-link
      v-for="item in items"
      :key="item.path"
      class="flex items-center py-3 px-6 block border-l-4"
      :class="
        isActive(item.path)
          ? 'bg-black bg-opacity-25 text-gray-100 border-gray-100'
          : 'border-gray-900 text-gray-500 hover:bg-black hover:bg-opacity-25 hover:text-gray-100'
      "
      :to="item.path"
      @click.native="$emit('click')"
    >
      <div
        :class="isActive(item.path) ? 'text-indigo-700' : 'text-gray-700'"
        class="inline-block"
      >
        <svg-icon
          v-if="item.icon !== undefined"
          :icon="item.icon"
          class="h-6 w-6 mr-2"
        />
      </div>
      <span class="mx-4">{{ item.caption }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    isActive(path) {
      return path === '/'
        ? this.$route.path === path
        : this.$route.path.indexOf(path) === 0
    },
  },
}
</script>
