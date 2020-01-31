import Layout from './components/layout'

const Index = function() {
    return (
        <Layout>
            <h1 className="text-2xl font-semibold">Use Noto!</h1>
            <p className="max-w-xl">
                I use Noto all over the place. I found I was repeating the same conversion + import process on every
                site. So, I built this project as a way for me to import{' '}
                <a href="https://www.google.com/get/noto/" className="text-blue-500">
                    Noto
                </a>{' '}
                quickly.
            </p>
            <p className="max-w-xl">Import the stylesheets of the variants you want into your project:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <details>
                    <summary>
                        There are quite a few...
                    </summary>
                    <div className="mt-2">
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono-400.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono-500.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono-600.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-400-italic.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-400.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-500-italic.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-500.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-600-italic.css'</span>;</div>
                        <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-600.css'</span>;</div>
                    </div>
                </details>
            </code>
            <p className="max-w-xl">...or you can import everything per family:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono.css'</span>;</div>
                <div className="whitespace-no-wrap">@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif.css'</span>;</div>
            </code>
            <p className="max-w-xl">Then, use the fonts in your CSS:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 text-sm overflow-x-auto">
                <div>body {'{'}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Serif'</span>;</div>
                <div>{'}'}</div>
                <div className="mt-4">code {'{'}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Sans Mono'</span>;</div>
                <div>{'}'}</div>
            </code>
            <h2 className="text-xl font-semibold">Samples</h2>
            <div className="bg-gray-100 p-2">
                <details open>
                    <summary>There are quite a few...</summary>
                    <div className="mt-2">
                        <div>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-sans-mono font-normal">
                                Mono-400
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-sans-mono font-medium">
                                Mono-500
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-sans-mono font-semibold">
                                Mono-600
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-normal">
                                Serif-400
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-medium">
                                Serif-500
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-semibold">
                                Serif-600
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-normal italic">
                                Serif-400-italic
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-medium italic">
                                Serif-500-italic
                            </span>
                            <span className="inline-flex w-1/2 sm:w-1/3 md:w-1/6 font-noto-serif font-semibold italic">
                                Serif-600-italic
                            </span>
                        </div>
                    </div>
                </details>
            </div>
        </Layout>
    )
}

export default Index
