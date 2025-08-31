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
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        <main>
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