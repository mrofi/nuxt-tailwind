<template>
  <article
    class="markdown-reader prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
  >
    <MarkdownReader
      :source="`content/docs/${$route.params.slug || 'intro'}.md`"
      @meta="hasMeta"
    />
    <div v-if="footerLinks">
      <div v-for="(link, index) in footerLinks" :key="index">
        <nuxt-link v-for="(path, caption, i) in link" :key="i" :to="path">
          {{ caption }}
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: null,
    }
  },
  // mounted() {
  //   const checkFilename = () => {
  //     if (document.querySelector('.markdown-reader div').innerHTML) {

  //     } else {
  //       setTimeout(checkFilename, 1000)
  //     }
  //   }
  //   const func = () => {
  //     if (document.querySelector('.markdown-reader div').innerHTML) {
  //       document.querySelectorAll('pre code').forEach((block) => {
  //         window.hljs.highlightBlock(block)
  //       })
  //       checkFilename()
  //     } else {
  //       setTimeout(func, 1000)
  //     }
  //   }
  //   func()
  // },
  methods: {
    hasMeta(meta) {
      this.footerLinks = meta && meta.footer ? meta.footer.links : null
    },
  },
}
</script>
