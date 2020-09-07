<template>
  <!-- eslint-disable-next-line -->
  <div v-html="markdown"></div>
</template>

<script>
import { Remarkable } from 'remarkable'
import MetaPlugin from 'remarkable-meta'

export default {
  props: {
    source: {
      type: String,
      default: null,
    },
  },
  async fetch() {
    if (this.source) {
      const md = new Remarkable('commonmark')
      md.set({
        html: true,
        breaks: true,
        typographer: true,
      })
      md.use(MetaPlugin)
      const appBaseUrl = window.location.href.split('?')[0].split('#')[0]
      const host = window.location.origin
      const path = this.$config.routerBase.replace(/^\/|\/$/g, '')
      const source = this.source.replace(/^\/|\/$/g, '')
      const baseUrl = `${host}/${path}`.replace(/^\/|\/$/g, '')
      const url = `${baseUrl}/${source}`
      const render = await fetch(url)
        .then((r) => r.text())
        .then((t) => {
          return md.render(t)
        })
      const el = document.createElement('div')
      el.innerHTML = render
      el.querySelectorAll('a').forEach((a) => {
        const href = a.getAttribute('href')
        if (href && href.indexOf('#') === 0) {
          a.href = appBaseUrl + href
        }
      })
      this.markdown = el.innerHTML
      this.$emit('meta', md.meta)
    }
  },
  data() {
    return {
      markdown: '',
    }
  },
}
</script>
