<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="svg"></div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    fill: {
      type: String,
      default: null,
    },
    stroke: {
      type: String,
      default: null,
    },
  },
  async fetch() {
    const path = `${window.location.origin}/${process.env.routerBase}`.replace(
      /\/$/,
      ''
    )
    const url = `${path}/svg-icon/${this.icon}.svg`
    await fetch(url)
      .then((r) => r.text())
      .then((t) => {
        const el = document.createElement('div')
        el.innerHTML = t
        const svgElement = el.firstElementChild
        svgElement.removeAttribute('height')
        svgElement.removeAttribute('width')
        if (this.fill) {
          svgElement.setAttribute('fill', this.fill)
        }
        if (this.stroke) {
          svgElement.setAttribute('stroke', this.stroke)
        }
        this.svg = svgElement.outerHTML
      })
  },
  data() {
    return {
      svg: '',
    }
  },
}
</script>
