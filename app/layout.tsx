import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ResponsiveWeb - Adaptive Design Solutions",
  description:
    "Creating beautiful, responsive websites that work seamlessly across all devices. Mobile-first design with desktop optimization.",
  keywords: "responsive design, mobile-first, web development, adaptive layout, UI/UX",
  authors: [{ name: "ResponsiveWeb Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
