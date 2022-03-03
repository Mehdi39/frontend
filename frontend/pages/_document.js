import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() { 
        return <Html lang="en">
            <Head>
                <link rel="preload" href="" as="font" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main></Main>
                <NextScript></NextScript>
            </body>
        </Html>
    }
}

export default MyDocument