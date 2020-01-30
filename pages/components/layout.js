import Head from 'next/head'

const Layout = function({ children }) {
    return (
        <div className="container mx-auto my-16">
            <Head>
                <title>Use Noto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
                <link rel="stylesheet" href="/stylesheets/noto-sans-mono.css" />
                <link rel="stylesheet" href="/stylesheets/noto-serif.css" />
            </Head>
            {children}
            <style jsx global>{`
                body {
                    font-family: 'Noto Serif';
                }

                code {
                    font-family: 'Noto Sans Mono';
                }
            `}</style>
        </div>
    )
}

export default Layout
