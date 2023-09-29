import { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Lucas Struijk\'s Portfolio',
  description: 'Created by Lucas Struijk and Andrea Ang using Next JS ©2023'
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div>navbar</div>
        {children}
      </body>
    </html>
  )
}
