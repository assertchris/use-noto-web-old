import { Layout } from './components'

const Index = function() {
    return (
        <Layout>
            <h1 className="text-lg font-semibold my-2">Use Noto!</h1>
            <p>To use these, import the stylesheet(s) into your project:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 my-2 text-sm">
                @import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-regular.css'</span>;<br />
                @import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif-italic.css'</span>;
            </code>
            <p>...or you can import everything:</p>
            {/* prettier-ignore */}
            <code className="block bg-gray-100 p-2 my-2 text-sm">
                @import <span className="text-blue-500">'{process.env.DOMAIN}/stylesheets/noto-serif.css'</span>;
            </code>
        </Layout>
    )
}

export default Index
