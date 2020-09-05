<template>
  <article id="article" class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <!-- eslint-disable-next-line -->
    <div v-html="article"></div>
  </article>
</template>

<script>
import { Remarkable } from 'remarkable'
import hljs from 'highlight.js'

export default {
  async asyncData({ params }) {
    const md = new Remarkable('commonmark', {
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value
        } catch (err) {}

        return '' // use external default escaping
      },
    })
    md.set({
      html: true,
      breaks: true,
      typographer: true,
    })
    const path = `${window.location.origin}/${process.env.routerBase}`.replace(
      /\/$/,
      ''
    )
    const url = `${path}/content/docs/${params.slug || 'intro'}.md`
    const article = await fetch(url)
      .then((r) => r.text())
      .then((t) => {
        return md.render(t)
      })

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
