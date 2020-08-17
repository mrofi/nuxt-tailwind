<template>
  <div class="flex items-center justify-center mt-40">
    <div class="text-center">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/" class="text-gray-600">Back to Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    if (this.error.statusCode !== 404) {
      return {
        title:
          'Error ' +
          this.error.statusCode +
          ' An Error Occured | ' +
          process.env.appName,
      }
    }
  },
}
</script>
