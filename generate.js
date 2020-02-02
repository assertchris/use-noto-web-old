const { writeFileSync } = require('fs')
const { execSync } = require('child_process')

const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const faces = [
    {
        name: 'Noto Sans',
        styleFile: 'noto-sans',
        fontFile: 'noto-sans',
        hasItalic: true,
    },
    {
        name: 'Noto Sans Greek',
        styleFile: 'noto-sans-greek',
        fontFile: 'noto-sans',
        hasItalic: false,
        unicodeRange: 'U+0370-03FF, U+1F00-1FFF',
    },
    {
        name: 'Noto Sans Hebrew',
        styleFile: 'noto-sans-hebrew',
        fontFile: 'noto-sans-hebrew',
        hasItalic: false,
        unicodeRange: 'U+0590-05FF',
    },
    {
        name: 'Noto Sans Mono',
        styleFile: 'noto-sans-mono',
        fontFile: 'noto-sans-mono',
        hasItalic: false,
        unicodeRange: undefined,
    },
    {
        name: 'Noto Serif',
        styleFile: 'noto-serif',
        fontFile: 'noto-serif',
        hasItalic: true,
    },
    {
        name: 'Noto Serif Greek',
        styleFile: 'noto-serif-greek',
        fontFile: 'noto-serif',
        hasItalic: false,
        unicodeRange: 'U+0370-03FF, U+1F00-1FFF',
    },
    {
        name: 'Noto Serif Hebrew',
        styleFile: 'noto-serif-hebrew',
        fontFile: 'noto-serif-hebrew',
        hasItalic: false,
        unicodeRange: 'U+0590-05FF',
    },
]

for (const { name, styleFile, fontFile, hasItalic, unicodeRange } of faces) {
    let definitions = ''

    for (const weight of weights) {
        if (hasItalic) {
            const fileName = `./public/stylesheets/${styleFile}-${weight}-italic.css`

            const definition = `@font-face {
                font-family: '${name}';
                src: url('/fonts/${fontFile}-${weight}-italic.woff2') format('woff2'), url('/fonts/${fontFile}-${weight}-italic.woff') format('woff');
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

        const fileName = `./public/stylesheets/${styleFile}-${weight}.css`

        const definition = `@font-face {
            font-family: '${name}';
            src: url('/fonts/${fontFile}-${weight}.woff2') format('woff2'), url('/fonts/${fontFile}-${weight}.woff') format('woff');
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

    const fileName = `./public/stylesheets/${styleFile}.css`

    console.log(`make ${fileName}`)

    writeFileSync(fileName, definitions)
    execSync(`./node_modules/.bin/prettier --write ${fileName}`)
}
