import React from 'react'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Home from './home/page'
import { getSheetsData } from '../lib/getSheetData'

export const metadata: Metadata = {
  title: "Lucas Struijk's Portfolio",
  description: 'Created by Lucas Struijk and Andrea Ang using Next JS ©2023',
}

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = async () => {
  const sheetsData = await getSheetsData()

  return (
    <div className={roboto.className}>
      <Home headerData={sheetsData.headerData[1]} data={sheetsData.data} />
    </div>
  )
}

export default Page
