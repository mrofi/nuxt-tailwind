<template>
  <Alert icon="feather/info" icon-class="bg-blue-500 text-blue-500">
    <template #title>
      <span class="text-blue-500 font-semibold">{{ title }}</span>
    </template>
    <slot></slot>
  </Alert>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Info',
    },
  },
}
</script>
