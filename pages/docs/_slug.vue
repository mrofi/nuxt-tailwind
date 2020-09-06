<template>
  <MarkdownReader
    :source="`content/docs/${$route.params.slug || 'intro'}.md`"
  />
</template>

<script>
export default {
  mounted() {
    const func = () => {
      if (document.querySelector('.markdown-reader div').innerHTML) {
        document.querySelectorAll('pre code').forEach((block) => {
          window.hljs.highlightBlock(block)
        })
      } else {
        setTimeout(func, 1000)
      }
    }
    func()
  },
}
</script>
