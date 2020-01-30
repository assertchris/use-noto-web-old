import Layout from './components/layout'

const Index = function() {
    return (
        <Layout>
            <h1 className="text-lg font-semibold my-2">Use Noto!</h1>
            <p>To use these, import the stylesheets into your project:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 my-2 text-sm">
                <div>@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono-400.css'</span>;</div>
                <div>@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-400-italic.css'</span>;</div>
                <div>@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-400.css'</span>;</div>
            </code>
            <p>...or you can import everything per family:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 my-2 text-sm">
                <div>@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-sans-mono.css'</span>;</div>
                <div>@import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif.css'</span>;</div>
            </code>
            <p>Then, use the fonts in your CSS:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 my-2 text-sm">
                <div>body {`{`}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Serif'</span>;</div>
                <div>{`}`}</div>
                <div className="mt-4">code {`{`}</div>
                <div className="ml-4">font-family: <span className="text-blue-500">'Noto Sans Mono'</span>;</div>
                <div>{`}`}</div>
            </code>
        </Layout>
    )
}

export default Index
