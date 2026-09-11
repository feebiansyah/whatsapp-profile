import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  for (const [path, name, group] of [
    ['/abdan/citra', 'Citra', 'abdan'],
    ['/abdan/amira-putri', 'Amira Putri', 'abdan'],
    ['/nipon/citra', 'Citra', 'nipon'],
    ['/nipon/amira-putri', 'Amira Putri', 'nipon'],
  ]) {
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [path] }, createElement(App)))
    assert.ok(html.includes(`<h1>${name}</h1>`), path)
    assert.ok(html.includes(`dari%20${group}`), 'links belong to correct group')
    for (const label of ['KIRIM PESAN', 'VIDEO CALL', 'PANGGILAN', 'Unduh Sekarang']) assert.ok(html.includes(label))
    assert.ok(html.includes(`${path}/profile.jpg`), 'local profile image')
    console.log(`PASS ${path}`)
  }
  for (const path of ['/abdan/tidak-ada', '/kelompok-tidak-ada/citra', '/', '/abdan', '/abdan/citra/extra', '/abdan/%2e%2e']) {
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [path] }, createElement(App)))
    assert.ok(html.includes('<h1>Profil tidak ditemukan.</h1>'), path)
    console.log(`PASS fallback ${path}`)
  }
} finally {
  await server.close()
}
