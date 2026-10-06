
export default function RootLayout({ children }) {
  // the above children is for this particular ROuter Group and not for the whole app.
  return (
    <>
      <header>Header Marketing</header>
      <body>{children}</body>
      <footer>Footer Marketing</footer>
      </>
  );
}
