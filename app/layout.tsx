import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialFloat from "@/components/social-float"
import ChatbotButton from "@/components/chatbot-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CIP Junín - Colegio de Ingenieros del Perú CD Junín",
  description: "Sitio web oficial del Colegio de Ingenieros del Perú - Consejo Departamental Junín",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <SocialFloat />
          <ChatbotButton />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'