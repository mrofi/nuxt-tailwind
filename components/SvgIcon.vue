<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="location(icon)"></div>
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
  mounted() {
    try {
      if (this.$el.firstElementChild.nodeName === 'svg') {
        const svgElement = this.$el.firstElementChild
        svgElement.removeAttribute('height')
        svgElement.removeAttribute('width')
        if (this.fill) {
          svgElement.setAttribute('fill', this.fill)
        }
        if (this.stroke) {
          svgElement.setAttribute('stroke', this.stroke)
        }
      }
    } catch (error) {
      //
    }
  },
  methods: {
    location: (icon) => {
      try {
        return require(`!html-loader!../assets/svg-icon/${icon}.svg`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
