"use client";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "./theme";
import "./globals.css";
import {CursorGlow} from "./components/CursorGlow";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen bg-[#0D0F1C] text-white">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CursorGlow />
            <div className="relative z-10">
              {children}
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
