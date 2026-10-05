
import "./globals.css";
export const metadata = {
  title: {
    template: '%s | MyApp',
    default: 'MyApp',
  },
  description: 'This is the blog page',
}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
