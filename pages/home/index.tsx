import React from 'react'
import { google } from 'googleapis'
import styles from './styles.module.scss'

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      {data &&
        data.map((item, index) => (
          index !== 0 && 
            <div className={styles.data}>
              <h1 key={index}>{item.title}</h1>
              <p key={index}>{item.description}</p>
            </div>
        ))
      }
    </div>
  )
}

export async function getServerSideProps() {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets']})

  const sheets = google.sheets({ version: 'v4', auth })

  const range = `main!A:D`

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range: range
  })

  const resData = res.data.values

  let data = resData.map(([
      title,
      description,
      linkToImage,
      size
    ]) => ({
      title,
      description,
      linkToImage,
      size
    }))

  return {
    props: {
      data
    },
  }
}

export default Home
