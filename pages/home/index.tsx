import React from 'react'
import { google } from 'googleapis'
import Container from '../../components/Formal/Container'
import Card from '../../components/Formal/Card'
import styles from './styles.module.scss'

const Home = ({ data, headerData }) => {
  const {
    title,
    subtitle,
    description,
    profileImage,
    contactButton
  } = headerData[1]

  return (
    <Container>
      <div>
        <button>{contactButton}</button>
      </div>

      <div className={styles.headerContainer}>
        <img src={profileImage} />
        <div className={styles.text}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {data?.map((item, index) => (
          index !== 0 &&
            <Card
              key={index}
              title={item.title}
              categories={item.categories}
              categoryColors={item.categoryColors}
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

  let range = 'main!A:I'
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range
  })
  const resData = res.data.values

  const data = resData.map(([
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

  range = 'header!A:E'
  const resHeader = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
    range
  })
  const resHeaderData = resHeader.data.values

  const headerData = resHeaderData.map(([
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

  return {
    props: {
      data, headerData
    }
  }
}

export default Home
