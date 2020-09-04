<template>
  <article id="article" class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <h1>
      {{ article.title }}
    </h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('docs', params.slug || 'intro').fetch()

    return { article }
  },
  mounted() {
    const anchors = document.getElementsByTagName('a')
    const url = window.location.href.split('?')[0].split('#')[0]
    for (let i = 0; i < anchors.length; i++) {
      const href = anchors[i].getAttribute('href')
      if (href && href.indexOf('#') === 0) {
        anchors[i].href = url + href
      }
    }
  },
}
</script>
