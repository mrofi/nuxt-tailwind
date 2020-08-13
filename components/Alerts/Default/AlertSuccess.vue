<template>
  <Alert icon="feather/check-circle" icon-class="bg-green-500 text-green-500">
    <template #title>
      <span class="text-green-500 font-semibold">{{ title }}</span>
    </template>
    <slot></slot>
  </Alert>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Success',
    },
  },
}
</script>
