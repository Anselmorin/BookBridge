import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookBridge — Literature-Powered Language Learning",
  description: "Choose a book you love. Learn a language through it. A subsidiary of OnlineMars LLC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
