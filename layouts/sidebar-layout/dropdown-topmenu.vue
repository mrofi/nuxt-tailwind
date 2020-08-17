<template>
  <div class="relative">
    <button
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
      @click="dropdownOpen = !dropdownOpen"
    >
      <slot name="button"></slot>
    </button>

    <div
      v-show="dropdownOpen"
      class="fixed inset-0 h-full w-full z-10"
      @click="dropdownOpen = false"
    ></div>

    <div v-show="dropdownOpen" class="absolute right-0 mt-2 z-20">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownTopmenu',
  data() {
    return {
      dropdownOpen: false,
    }
  },
}
</script>
