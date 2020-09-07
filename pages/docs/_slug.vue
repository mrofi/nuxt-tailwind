<template>
  <div>
    <article
      class="markdown-reader prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <MarkdownReader
        :source="`content/docs/${$route.params.slug || 'intro'}.md`"
        @meta="hasMeta"
      />
    </article>
    <div v-if="footerLinks" class="mt-12 my-24">
      <div v-for="(link, index) in footerLinks" :key="index">
        <nuxt-link
          v-for="(path, caption, i) in link"
          :key="i"
          :to="path"
          class="text-3xl font-bold underline"
        >
          {{ caption }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: null,
    }
  },
  methods: {
    hasMeta(meta) {
      this.footerLinks = meta && meta.footer ? meta.footer.links : null
    },
  },
}
</script>
