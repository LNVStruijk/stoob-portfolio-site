import React from 'react'
import styles from './styles.module.scss'

const Card = ({
  title,
  categories,
  description,
  year,
  materials,
  image,
  link,
  size
}) => {
  return (
    <div
      className={styles.container}
      // style={{
      //   minWidth: size === 'large' ? '649px' : 'none'
      // }}
    >
      <img
        className={styles.image}
        src={image} 
        alt={`${title}-card-image`}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.descRow}>
        <p className={styles.description}>{`${materials} - ${year}`}</p>
        <p className={styles.link}>Click to view</p>
      </div>
      <div className={styles.categories}>
        {categories.split(', ').map((item, index) => (
          <p className={styles.category} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Card
