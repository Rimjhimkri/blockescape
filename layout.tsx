import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { Web3Provider } from "@/components/blockchain/web3-provider"
import { Header } from "@/components/layout/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CryptoEscape",
  description: "A blockchain-powered escape room game",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Web3Provider>
            <Header />
            {children}
            <Toaster position="top-right" />
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
