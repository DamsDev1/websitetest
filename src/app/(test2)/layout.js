export default function Layout({ children, ...pageProps }) {
    return (
      <>
        <html lang="en">
          <head>
            <title>Testing</title>
          </head>
          <body>
              {children}
          </body>
        </html>
      </>
    )
  }
  