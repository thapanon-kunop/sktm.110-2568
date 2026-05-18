import type { Metadata } from "next";
import {
  Google_Sans,
  Prompt,
  // ,Instrument_Sans
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";

// const instrumentSans = Instrument_Sans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// const instrumentSans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});

export const google_sans = Google_Sans({
  subsets: ["latin", "thai"],
  variable: "--font-sans",
});

export const prompt_font = Prompt({
  weight: "600",
  subsets: ["latin", "thai"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SKTM.210",
  description: "SKT M.2/10 Site",

  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={cn(
        "h-full",
        "antialiased",
        google_sans.className,
        "font-sans",
        // instrumentSans.variable,
      )}
      suppressHydrationWarning
    >
      <head></head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
