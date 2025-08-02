import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dharmadurai K - Finance Entrepreneur & AI Expert",
  description:
    "Empowering individuals with financial intelligence and AI innovation. SEBI Registered Investor, Entrepreneur, and Founder of Market Healers.",
  keywords: "finance, entrepreneur, AI expert, SEBI registered investor, Market Healers, Dhaleo AI, stock screening",
  authors: [{ name: "Dharmadurai K" }],
  creator: "Dharmadurai K",
  openGraph: {
    title: "Dharmadurai K - Finance Entrepreneur & AI Expert",
    description: "Empowering individuals with financial intelligence and AI innovation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmadurai K - Finance Entrepreneur & AI Expert",
    description: "Empowering individuals with financial intelligence and AI innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
