// layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="h-full">
      <body className="min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {/* Full-page background */}
          <div className="min-h-screen flex flex-col">
            <Header />

            {/* Centered content area with shadow */}
            <div className="flex-grow flex justify-center items-center">
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg max-w-4xl w-full p-8 my-10">
                <main>{children}</main>
              </div>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
