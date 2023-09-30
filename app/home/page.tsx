'use client'
import React from 'react'
import styles from './styles.module.scss'

import Card from '../../components/Formal/Card'

const Home = ({ data, headerData }) => {
  const { title, subtitle, description, profileImage } = headerData

  return (
    <div className='container px-4 lg:px-6 mx-auto'>
      <div className={styles.headerContainer}>
        <img src={profileImage} />
        <div className={styles.text}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {data?.map(
          (item, index) =>
            index !== 0 && (
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
            )
        )}
      </div>
    </div>
  )
}

export default Home
