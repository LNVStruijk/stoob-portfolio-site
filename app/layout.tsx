'use client'
import React from 'react'
import { Roboto } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.scss'

import Navbar from '../components/Formal/Navbar'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <NextUIProvider>
          <NextThemesProvider attribute='class' defaultTheme='dark'>
            <div className='text-foreground bg-background'>
              <Navbar />
              {children}
            </div>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
