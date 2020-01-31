import React from 'react'
import Head from 'next/head'

const Layout = function({ children }) {
    return (
        <div className="container mx-auto my-16">
            <Head>
                <title>Use Noto</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="preload"
                    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/stylesheets/noto-sans.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/stylesheets/noto-sans-hebrew.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/stylesheets/noto-sans-mono.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/stylesheets/noto-serif.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/stylesheets/noto-serif-hebrew.css"
                    as="style"
                    onload="this.onload=null; this.rel='stylesheet'"
                />
            </Head>
            <div className="container mx-auto px-4">{children}</div>
            <style jsx global>{`
                body,
                .font-noto-serif {
                    font-family: 'Noto Serif';
                }

                .font-noto-serif-hebrew {
                    font-family: 'Noto Serif Hebrew', 'Noto Serif';
                }

                .font-noto-sans {
                    font-family: 'Noto Sans';
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
