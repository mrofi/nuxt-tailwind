<template>
  <div
    class="inline-flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden"
  >
    <div class="flex justify-center items-center w-12" :class="iconClass">
      <slot name="icon">
        <svg-icon :icon="icon" class="w-8 h-8" fill="white" />
      </slot>
    </div>

    <div class="-mx-3 py-2 px-4">
      <div class="mx-3">
        <slot name="title">
          <span class="text-gray-800 font-semibold">Alert</span>
        </slot>

        <p class="text-gray-600 text-sm">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'feather/alert-circle',
    },
    iconClass: {
      type: String,
      default: 'bg-gray-800 text-gray-800',
    },
  },
}
</script>
