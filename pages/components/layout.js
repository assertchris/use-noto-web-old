import React from 'react'
import Head from 'next/head'

const Layout = function({ children }) {
    const preload = {
        rel: 'preload',
        as: 'style',
        onLoad: "this.onload=null; this.rel='stylesheet'",
    }

    return (
        <div className="container mx-auto my-16">
            <Head>
                <title>Use Noto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link {...preload} href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
                <link {...preload} href="/stylesheets/noto-sans.css" />
                <link {...preload} href="/stylesheets/noto-sans-greek.css" />
                <link {...preload} href="/stylesheets/noto-sans-hebrew.css" />
                <link {...preload} href="/stylesheets/noto-sans-mono.css" />
                <link {...preload} href="/stylesheets/noto-serif.css" />
                <link {...preload} href="/stylesheets/noto-serif-greek.css" />
                <link {...preload} href="/stylesheets/noto-serif-hebrew.css" />
            </Head>
            <div className="container mx-auto px-4">{children}</div>
            <style jsx global>{`
                body,
                .font-noto-serif {
                    font-family: 'Noto Serif';
                }

                .font-noto-serif-inverse {
                    font-family: 'Noto Sans Greek', 'Noto Sans Hebrew', 'Noto Serif';
                }

                .font-noto-serif-greek {
                    font-family: 'Noto Serif Greek', 'Noto Serif';
                }

                .font-noto-serif-hebrew {
                    font-family: 'Noto Serif Hebrew', 'Noto Serif';
                }

                .font-noto-sans {
                    font-family: 'Noto Sans';
                }

                .font-noto-sans-inverse {
                    font-family: 'Noto Serif Greek', 'Noto Serif Hebrew', 'Noto Sans';
                }

                .font-noto-sans-greek {
                    font-family: 'Noto Sans Greek', 'Noto Sans';
                }

                .font-noto-sans-hebrew {
                    font-family: 'Noto Sans Hebrew', 'Noto Sans';
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
