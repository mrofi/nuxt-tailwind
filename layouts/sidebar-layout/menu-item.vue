<template>
  <li>
    <nuxt-link
      class="flex items-center justify-between py-3 px-6 block menu-item border-l-4"
      :class="
        open || hasActive(vm)
          ? openClass
          : active(vm)
          ? activeClass
          : inactiveClass
      "
      :to="item.path || '#'"
      @click.native="clicked(item, vm)"
    >
      <div
        :class="
          active(vm) || hasActive(vm) ? 'text-indigo-700' : 'text-gray-700'
        "
        class="inline-block"
      >
        <svg-icon
          v-if="item.icon !== undefined || icon"
          :icon="icon ? icon : item.icon"
          :class="iconClass"
        />
      </div>
      <span class="mx-4 flex-grow">{{ item.caption }}</span>
      <svg-icon
        v-show="item.children !== undefined && open"
        icon="feather/chevron-up"
        class="w-4 h-4"
      />
      <svg-icon
        v-show="item.children !== undefined && !open"
        icon="feather/chevron-down"
        class="w-4 h-4"
      />
    </nuxt-link>
    <slot :open="open"></slot>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          path: null,
          icon: null,
          caption: null,
          children: null,
          exact: false,
        }
      },
    },
    icon: {
      type: String,
      default: null,
    },
    iconClass: {
      type: String,
      default: 'h-6 w-6 mr-2',
    },
  },
  data() {
    return {
      vm: this,
      open: this.hasActive(this),
      openClass: 'border-gray-900 bg-black bg-opacity-25 text-gray-100',
      activeClass: 'bg-black bg-opacity-25 text-gray-100 border-gray-100',
      inactiveClass:
        'border-gray-900 text-gray-500 hover:bg-black hover:bg-opacity-25 hover:text-gray-100',
    }
  },
  methods: {
    active: (vm, current = null) => {
      const item = current || vm.item
      const path = item.path ? item.path.replace(/\/$/, '') : null
      const currentPath = vm.$route.path.replace(/\/$/, '')
      const exact = item.exact === undefined ? false : item.exact
      return exact
        ? currentPath === path
        : currentPath.indexOf(path) === 0 &&
            vm.inArray(currentPath.substring(path.length, path.length + 1), [
              '',
              '/',
              '?',
              '#',
            ])
    },
    hasActive: (vm) => {
      let state = false
      if (vm.item.children !== undefined) {
        vm.item.children.forEach((el) => {
          if (vm.active(vm, el)) {
            state = true
          }
        })
      }

      return state
    },
    inArray: (needle, haystack) => {
      const length = haystack.length
      for (let i = 0; i < length; i++) {
        if (haystack[i] === needle) return true
      }
      return false
    },
    clicked: (item, vm) => {
      if (item.children !== undefined) {
        vm.open = !vm.open
      } else {
        vm.$emit('click')
      }
    },
  },
}
</script>

<style scoped>
.menu-item {
  cursor: pointer;
}
</style>
