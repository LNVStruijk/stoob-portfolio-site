import React from 'react'
import styles from './styles.module.scss'

const Card = ({
  title,
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
      style={{
        flex: `1 0 ${size}0%`
      }}
    >
      <img
        className={styles.image}
        src={image} 
        alt={`${title}-card-image`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{`${materials} - ${year}`}</p>
      <p className={styles.link}>Click to view</p>
    </div>
  )
}

export default Card
