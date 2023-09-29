import React from 'react'
import { Roboto } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'

import Home from './home/page'
import { getSheetsData } from '../lib/getSheetData'

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = async () => {
  const sheetsData = await getSheetsData()

  return (
    <div className={roboto.className}>
      <Home
        headerData={sheetsData.headerData[1]}
        data={sheetsData.data}
      />
    </div>
  )
}

export default Page
