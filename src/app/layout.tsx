import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "ProWin — Predict Consumer Results",
  description:
    "ProWin gives brands the intelligence to anticipate trends, optimize strategies, and stay ahead of competitors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary antialiased">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
