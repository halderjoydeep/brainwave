import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--font-sora",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
  variable: "--font-grotesk",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Brainwave",
  description: "AI Chat demo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-n-8 font-sans text-n-1 antialiased",
          sora.variable,
          sourceCodePro.variable,
          spaceGrotesk.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
