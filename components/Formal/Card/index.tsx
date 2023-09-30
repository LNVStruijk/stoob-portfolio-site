import React from 'react'
import cn from 'classnames'
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
  size,
}) => {
  return (
    <div className={cn(styles.container, 'shadow-lg dark:shadow-gray-800')}>
      <img className={styles.image} src={image} alt={`${title}-card-image`} />
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.categories}>
          {categories.split(', ').map((item, index) => (
            <p
              className={styles.category}
              style={{
                backgroundColor: categoryColors.split(', ')[index],
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
