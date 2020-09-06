import Vue from 'vue'

const MarkHighlight = {
  install(Vue) {
    Vue.mixin({
      mounted() {
        if (window.hljs) {
          MarkHighlight.highlight()
          MarkHighlight.markHighlight()
        }
      },
    })
  },

  highlight() {
    document.querySelectorAll('pre code').forEach((block) => {
      if (!block.classList.contains('hljs')) {
        window.hljs.highlightBlock(block)
        MarkHighlight.checkFilename(block)
      }
    })
  },

  markHighlight() {
    const markdown = document.querySelector('.markdown-reader div')
    if (markdown) {
      if (markdown.innerHTML) {
        MarkHighlight.highlight()
      } else {
        setTimeout(MarkHighlight.markHighlight, 1000)
      }
    }
  },

  checkFilename(block) {
    let filename = false
    let token = false
    block.classList.forEach((cl) => {
      if (
        !filename &&
        cl.indexOf('[') !== false &&
        cl.indexOf(']') !== false &&
        cl.indexOf('[') < cl.indexOf(']')
      ) {
        filename = cl.split('[')[1].split(']')[0].trim()
        token = cl
      }
    })
    if (filename) {
      block.classList.remove(token)
      const comment = document.createElement('span')
      comment.classList.add('hljs-comment')
      comment.innerHTML = filename
      block.prepend(comment)
    }
  },
}

Vue.use(MarkHighlight)
