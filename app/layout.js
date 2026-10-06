
export const metadata = {
  title: {
    template: '%s | MyApp',
    default: 'MyApp',
  },
  description: 'This is the blog page',
}
export default function RootLayout({ children }) {
    // the above children is the whole app.
  return (
    <html
      lang="en"
    >
      <body>
        <header>Header Main</header>
        <body>{children}</body>
        <footer>Footer Main</footer>
      </body>
    </html>
  );
}
