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
      beforeMount() {
        if (document.getElementById('mark-highlight-script') === null) {
          const style = document.createElement('link')
          style.setAttribute('rel', 'stylesheet')
          style.setAttribute('type', 'text/css')
          style.setAttribute(
            'href',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.3/styles/atom-one-dark.min.css'
          )
          document.head.appendChild(style)

          const script = document.createElement('script')
          script.id = 'mark-highlight-script'
          script.setAttribute(
            'src',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.3/highlight.min.js'
          )
          document.head.appendChild(script)
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
      if (!filename && cl.includes('[') && cl.indexOf(']') > 1) {
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
