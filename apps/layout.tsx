import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValoriaSMP • Season 3",
  description: "The Ultimate StrengthSMP Experience",
  keywords: [
    "ValoriaSMP",
    "Minecraft",
    "StrengthSMP",
    "Season 3",
    "SMP"
  ],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "ValoriaSMP Season 3",
    description: "The Ultimate StrengthSMP Experience",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
