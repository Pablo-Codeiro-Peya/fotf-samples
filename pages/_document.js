import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <Script
                    id="google-analytics"
                    strategy='beforeInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `
                          if(document.location.pathname === '/fotf') { 
                            window.__INITIAL_STATE__ = 
                                        fetch('./api/hello').then((res) => res.json())
                          }`,
                    }}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}


