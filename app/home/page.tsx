'use client'
import React from 'react'
import { Button, NextUIProvider } from '@nextui-org/react'
import styles from './styles.module.scss'

import Container from '../../components/Formal/Container'
import Card from '../../components/Formal/Card'

const Home = ({ data, headerData }) => {
  const {
    title,
    subtitle,
    description,
    profileImage,
    contactButton
  } = headerData

  return (
    <NextUIProvider>
      <div className='container px-4 lg:px-6 mx-auto'>
        <div>
          <Button color='primary'>{contactButton}</Button>
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
      </div>
    </NextUIProvider>
  )
}

export default Home
