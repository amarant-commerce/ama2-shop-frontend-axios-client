'use strict'

// `tsc` emits every cross-file `import`/`export ... from './Foo'` exactly as
// written in source — no extension, since the source itself doesn't have
// one — which is fine for bundlers with a lenient resolver but invalid
// under a strict Node ESM loader, which requires an explicit extension on
// a relative specifier. Rather than require every consumer affected by
// that to patch this package themselves, this walks the compiled `dist/`
// output after `tsc` and appends `.js` to every relative specifier that's
// missing one — output stays plain ESM (`import`/`export`), just with
// valid specifiers.
const fs = require('node:fs')
const path = require('node:path')

const distDir = path.join(__dirname, '..', 'dist')

const KNOWN_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.json'])

// Matches the `'./Foo'`/`"../Foo"` specifier in `import ... from '...'`,
// `export ... from '...'`, and dynamic `import('...')` — the only places a
// relative specifier can appear in this codegen's output.
const SPECIFIER_PATTERN = /((?:from\s*|import\()\s*)(['"])(\.\.?\/[^'"]+)\2/g

function fixExtensions(source) {
  return source.replace(SPECIFIER_PATTERN, (match, prefix, quote, specifier) => {
    if (KNOWN_EXTENSIONS.has(path.extname(specifier))) {
      return match
    }
    return `${prefix}${quote}${specifier}.js${quote}`
  })
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
      continue
    }
    if (!entry.name.endsWith('.js')) {
      continue
    }
    const original = fs.readFileSync(fullPath, 'utf8')
    const fixed = fixExtensions(original)
    if (fixed !== original) {
      fs.writeFileSync(fullPath, fixed)
    }
  }
}

walk(distDir)
