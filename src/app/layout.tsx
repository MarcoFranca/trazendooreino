// src/app/layout.tsx
import type { Metadata } from "next";
import {
    Cinzel,
    Cormorant_Garamond,
    Geist,
    IM_Fell_English_SC,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
    variable: "--font-sacred",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const fell = IM_Fell_English_SC({
    variable: "--font-scroll",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Trazendo o Reino",
    description: "Uma jornada bíblica para conhecer Cristo em toda a Escritura.",
};

const setInitialTheme = `
(function () {
  try {
    const key = 'reino-theme';
    const stored = localStorage.getItem(key);

    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }

    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch {}
})();
`;

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </head>

        <body
            className={`${geist.variable} ${cormorant.variable} ${cinzel.variable} ${fell.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="reino-theme"
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}