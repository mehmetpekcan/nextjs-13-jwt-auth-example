import { Inter } from "next/font/google";

const BodyFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BodyFont.className}>{children}</body>
    </html>
  );
}
