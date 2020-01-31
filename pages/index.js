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
        </Layout>
    )
}

export default Index
