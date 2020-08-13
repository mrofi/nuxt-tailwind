<template>
  <Alert
    icon="feather/alert-triangle"
    icon-class="bg-yellow-500 text-yellow-500"
  >
    <template #title>
      <span class="text-yellow-500 font-semibold">{{ title }}</span>
    </template>
    <slot></slot>
  </Alert>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Warning',
    },
  },
}
</script>
