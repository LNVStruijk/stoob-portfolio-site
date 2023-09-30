import React from 'react'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { google } from 'googleapis'

import Home from './home/page'

export const metadata: Metadata = {
  title: "Lucas Struijk's Portfolio",
  description: 'Created by Lucas Struijk and Andrea Ang using Next JS ©2023',
}

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const getSheetsData = async () => {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  let range = 'main!A:I'
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range,
  })
  const resData = res.data.values

  let data
  if (resData) {
    data = resData.map(
      ([
        size,
        categories,
        categoryColors,
        title,
        description,
        materialsUsed,
        year,
        linkToImage,
        linkToFull,
      ]) => ({
        size,
        categories,
        categoryColors,
        title,
        description,
        materialsUsed,
        year,
        linkToImage,
        linkToFull,
      })
    )
  }

  range = 'header!A:D'
  const resHeader = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range,
  })
  const resHeaderData = resHeader.data.values

  let headerData
  if (resHeaderData) {
    headerData = resHeaderData.map(
      ([title, subtitle, description, profileImage]) => ({
        title,
        subtitle,
        description,
        profileImage,
      })
    )
  }

  const props = {
    data,
    headerData,
  }

  return { ...props }
}

const Page = async () => {
  const sheetsData = await getSheetsData()

  return (
    <div className={roboto.className}>
      <Home headerData={sheetsData.headerData[1]} data={sheetsData.data} />
    </div>
  )
}

export default Page
