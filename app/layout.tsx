import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import ProductProvider from "./contexts/ProductProvider";
import AccountProvider from "./contexts/AccountProvider";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eccommerce Product",
  description: "Show various products",
  icons: "/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-serif md:m-16 m-0`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProductProvider>
            <AccountProvider>
              <Navbar />
              {children}
            </AccountProvider>
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
