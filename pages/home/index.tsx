import React from 'react'
import { google } from 'googleapis'
import Container from '../../components/Formal/Container'
import Card from '../../components/Formal/Card'
import styles from './styles.module.scss'

const Home = ({ data }) => {
  return (
    <Container>
      <div className={styles.cardContainer}>
        {data?.map((item, index) => (
          index !== 0 &&
            <Card
              key={index}
              title={item.title}
              description={item.description}
              year={item.year}
              materials={item.materialsUsed}
              image={item.linkToImage}
              size={item.size}
              link={item.linkToFull}
            />
        ))}
      </div>
    </Container>
  )
}

export async function getServerSideProps () {
  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })

  const sheets = google.sheets({ version: 'v4', auth })

  const range = 'main!A:H'

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range
  })

  const resData = res.data.values

  const data = resData.map(([
    category,
    title,
    description,
    materialsUsed,
    year,
    size,
    linkToImage,
    linkToFull
  ]) => ({
    category,
    title,
    description,
    materialsUsed,
    year,
    size,
    linkToImage,
    linkToFull
  }))

  return {
    props: {
      data
    }
  }
}

export default Home
