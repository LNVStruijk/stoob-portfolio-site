'use client'
import React, { useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.scss'

import Navbar from '../components/Formal/Navbar'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<boolean>(true)

  return (
    <html lang='en'>
      <body>
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
