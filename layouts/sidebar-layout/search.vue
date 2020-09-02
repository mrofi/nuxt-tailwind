<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <svg-icon icon="feather/search" class="h-5 w-5 text-gray-500" />
    </span>

    <input
      class="form-input w-40 sm:w-64 pl-10 pr-4"
      type="text"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>
