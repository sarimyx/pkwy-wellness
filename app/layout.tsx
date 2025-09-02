import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { metadata } from "@/config/metadata";
export { metadata };

import "./globals.css";
import { Fonts } from "@/config/fonts";
import { FloatingBubbles } from "@/components/decoration/floating-bubbles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${Fonts.poppins.className}`} >
        <FloatingBubbles />
        <main>
          <Navbar />
          <div className="pt-36 bg-orange-200/10">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}