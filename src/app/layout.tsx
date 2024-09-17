import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Offentlig ITU",
  description: "Offentlig ITU er en platform for lærlinger innen IT-Utvikling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
