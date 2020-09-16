import Vue from 'vue'

// highlight.js version
const version = '9.18.3'

// highlight.js theme
const theme = 'atom-one-dark'

const HighlightJs = {
  install(Vue) {
    Vue.mixin({
      updated() {
        if (window.hljs) {
          HighlightJs.highlight()
          HighlightJs.markHighlight()
        }
      },
      beforeMount() {
        if (document.getElementById('mark-highlight-script') === null) {
          const style = document.createElement('link')
          style.setAttribute('rel', 'stylesheet')
          style.setAttribute('type', 'text/css')
          style.setAttribute(
            'href',
            `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/styles/${
              process.env.HLJS_THEME || theme
            }.min.css`
          )
          document.head.appendChild(style)

          const filenameStyle = document.createElement('style')
          filenameStyle.setAttribute('type', 'text/css')
          filenameStyle.innerHTML =
            'pre code.hljs:before {position: absolute; top: 1em; content: attr(data-filename); color: #5c6370; font-style: italic; }'
          document.head.appendChild(filenameStyle)

          const script = document.createElement('script')
          script.id = 'mark-highlight-script'
          script.setAttribute(
            'src',
            `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${version}/highlight.min.js`
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
        HighlightJs.checkFilename(block)
      }
    })
  },

  markHighlight() {
    const markdown = document.querySelector('.markdown-reader div')
    if (markdown) {
      if (markdown.innerHTML) {
        HighlightJs.highlight()
      } else {
        setTimeout(HighlightJs.markHighlight, 1000)
      }
    }
  },

  checkFilename(block) {
    let filename = false
    let token = false
    block.classList.forEach((cl) => {
      if (!filename && cl.includes('[') && cl.indexOf(']') > 1) {
        filename = '* ' + cl.split('[')[1].split(']')[0].trim()
        token = cl
      }
    })
    if (filename) {
      block.classList.remove(token)
      block.dataset.filename = filename
      block.style.marginTop = '2em'
      block.parentNode.style.position = 'relative'
      block.parentNode.style.paddingTop = '1.5em'
    }
  },
}

Vue.use(HighlightJs)
