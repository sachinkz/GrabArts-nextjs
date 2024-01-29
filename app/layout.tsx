import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/providers/theme-provider"

import { cn } from "@/lib/utils"
import { ClerkProvider } from '@clerk/nextjs'
import { ProfileContextProvider } from '@/components/providers/profile-provider'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'GrabArts',
  description: 'made by sachin',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <ThemeProvider
            defaultTheme='dark'
            attribute='class'
            enableSystem
            disableTransitionOnChange
          >
            <ProfileContextProvider>
              {children}
            </ProfileContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
