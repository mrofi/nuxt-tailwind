<template>
  <Alert icon="feather/alert-octagon" icon-class="bg-red-500 text-red-500">
    <template #title>
      <span class="text-red-500 font-semibold">{{ title }}</span>
    </template>
    <slot></slot>
  </Alert>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Error',
    },
  },
}
</script>
