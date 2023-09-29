import { google } from 'googleapis'

export const getSheetsData = async () => {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

  const sheets = google.sheets({ version: 'v4', auth })

  let range = 'main!A:I'
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range
  })
  const resData = res.data.values

  let data
  if (resData) {
    data = resData.map(([
      size,
      categories,
      categoryColors,
      title,
      description,
      materialsUsed,
      year,
      linkToImage,
      linkToFull
    ]) => ({
      size,
      categories,
      categoryColors,
      title,
      description,
      materialsUsed,
      year,
      linkToImage,
      linkToFull
    }))
  }

  range = 'header!A:E'
  const resHeader = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range
  })
  const resHeaderData = resHeader.data.values

  let headerData
  if (resHeaderData) {
    headerData = resHeaderData.map(([
      title,
      subtitle,
      description,
      profileImage,
      contactButton
    ]) => ({
      title,
      subtitle,
      description,
      profileImage,
      contactButton
    }))
  }

  const props = {
    data, headerData
  }

  return {...props}
}
