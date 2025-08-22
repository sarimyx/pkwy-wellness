import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { metadata } from "@/config/metadata";
export { metadata };

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <main className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
          <Navbar />
          <div className="pt-36 space-y-4">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}