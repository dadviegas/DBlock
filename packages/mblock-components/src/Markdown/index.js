import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import markdownItMermaid from 'markdown-it-mermaid'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItCheckbox from 'markdown-it-checkbox'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItHighlightjs from 'markdown-it-highlightjs'
import markdownItCenter from 'markdown-it-center-text'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItFontawesome from 'markdown-it-fontawesome'
import markdownItEmoji from 'markdown-it-emoji'

const markdown = function (markup) {
  var md = new MarkdownIt()

  md.use(markdownItMermaid)
  md.use(markdownItAnchor)
  md.use(markdownItCheckbox)
  md.use(markdownItFootnote)
  md.use(markdownItHighlightjs)
  md.use(markdownItCenter)
  md.use(markdownItFontawesome)
  md.use(markdownItAttrs)
  md.use(markdownItEmoji)

  md.renderer.rules.emoji = function(token, idx) {
    return '<span class="emoji">' + token[idx].content + '</span>';
  }

  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return '<table class="ui celled table">'
  }

  md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return '</table>'
  }

  return {
    __html : md.render(markup)
  }
}

export default class HighlightCode extends Component{
  mermaidInit () {
    window.mermaid && window.mermaid.init(undefined, document.getElementsByClassName('mermaid'))
  }

  componentDidMount () {
    this.mermaidInit()
  }

  componentDidUpdate () {
    this.mermaidInit()
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={markdown(this.props.source)}> </div>
    )
  }
}
