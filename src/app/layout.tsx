// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

export const metadata = {
  title: "Offentlig ITU",
  description: "Kunnskapsdeling og samarbeid for IT-utviklings lærlinger i offentlig sektor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="bg-black">
      <body className="min-h-screen text-white bg-black">
        <div className="margined-container bg-base-100">
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}