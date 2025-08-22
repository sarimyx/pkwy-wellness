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
        <main className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <Navbar />
          <div className="pt-36 pb-8">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}