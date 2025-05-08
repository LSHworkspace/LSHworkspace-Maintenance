import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

export function render() {
  const html = renderToStaticMarkup(<App />)
  return { html }
} 