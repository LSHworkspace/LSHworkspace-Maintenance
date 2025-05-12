import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from 'react-dom/server'
import React from 'react'
import App from '../src/App'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generate() {
  const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  const appHtml = renderToString(React.createElement(App))
  
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  fs.writeFileSync(path.resolve(__dirname, '../dist/index.html'), html)
  console.log('HTML 파일이 생성되었습니다.')
}

generate().catch(console.error)
