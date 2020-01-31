const { writeFileSync } = require('fs')
const { execSync } = require('child_process')

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const faces = [
    { name: 'Noto Sans', file: 'noto-sans', hasItalic: true, unicodeRange: undefined },
    { name: 'Noto Sans Hebrew', file: 'noto-sans-hebrew', hasItalic: false, unicodeRange: 'U+0590-05FF' },
    { name: 'Noto Sans Mono', file: 'noto-sans-mono', hasItalic: false, unicodeRange: undefined },
    { name: 'Noto Serif', file: 'noto-serif', hasItalic: true, unicodeRange: undefined },
    { name: 'Noto Serif Hebrew', file: 'noto-serif-hebrew', hasItalic: false, unicodeRange: 'U+0590-05FF' },
]

for (const { name, file, hasItalic, unicodeRange } of faces) {
    let definitions = ''

    for (const weight of weights) {
        if (hasItalic) {
            const fileName = `./public/stylesheets/${file}-${weight}-italic.css`

            const definition = `@font-face {
                font-family: '${name}';
                src: url('/fonts/${file}-${weight}-italic.woff2') format('woff2'), url('/fonts/${file}-${weight}-italic.woff') format('woff');
                font-weight: ${weight};
                font-style: italic;
                font-display: auto;
                unicode-range: ${unicodeRange ? unicodeRange : 'U+0-10FFFF'}
            }`

            console.log(`make ${fileName}`)

            writeFileSync(fileName, definition)
            execSync(`./node_modules/.bin/prettier --write ${fileName}`)

            definitions += definition + '\n\n'
        }

        const fileName = `./public/stylesheets/${file}-${weight}.css`

        const definition = `@font-face {
            font-family: '${name}';
            src: url('/fonts/${file}-${weight}.woff2') format('woff2'), url('/fonts/${file}-${weight}.woff') format('woff');
            font-weight: ${weight};
            font-style: normal;
            font-display: auto;
            unicode-range: ${unicodeRange ? unicodeRange : 'U+0-10FFFF'}
        }`

        console.log(`make ${fileName}`)

        writeFileSync(fileName, definition)
        execSync(`./node_modules/.bin/prettier --write ${fileName}`)

        definitions += definition + '\n\n'
    }

    const fileName = `./public/stylesheets/${file}.css`

    console.log(`make ${fileName}`)

    writeFileSync(fileName, definitions)
    execSync(`./node_modules/.bin/prettier --write ${fileName}`)
}
