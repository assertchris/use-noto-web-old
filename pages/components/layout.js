import Head from 'next/head'

const Layout = function({ children }) {
    return (
        <div className="container mx-auto my-16">
            <Head>
                <title>Use Noto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
                <link rel="stylesheet" href="/stylesheets/noto-sans.css" />
                <link rel="stylesheet" href="/stylesheets/noto-sans-mono.css" />
                <link rel="stylesheet" href="/stylesheets/noto-serif.css" />
            </Head>
            <div className="container mx-auto px-4">{children}</div>
            <style jsx global>{`
                body,
                .font-noto-serif {
                    font-family: 'Noto Serif';
                }

                .font-noto-sans {
                    font-family: 'Noto Sans';
                }

                code,
                .font-noto-sans-mono {
                    font-family: 'Noto Sans Mono';
                }

                * + code,
                * + details,
                * + p,
                * + h1,
                * + h2,
                * + h3 {
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    )
}

export default Layout
