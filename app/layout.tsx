import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Dilafruzkhon Mukhtorova | Senior Frontend Engineer & Creative Developer Portfolio",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Building exceptionally fast, secure, and futuristic digital experiences.",
  keywords: [
    "Dilafruzkhon Mukhtorova",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Web Architect",
  ],
  authors: [{ name: "Dilafruzkhon Mukhtorova" }],
  creator: "Dilafruzkhon Mukhtorova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.querySelector('meta[name="color-scheme"]').content = localStorage.getItem("color-scheme") ?? "light dark"; } catch (e) {}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
