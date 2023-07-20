import React from 'react'
import styles from './styles.module.scss'

const Card = ({
  title,
  categories,
  categoryColors,
  description,
  year,
  materials,
  image,
  link,
  size
}) => {
  console.log(categoryColors.split(', '))
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
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.categories}>
          {categories.split(', ').map((item, index) => (
            <p
              className={styles.category}
              style={{
                backgroundColor: categoryColors.split(', ')[index]
              }}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
