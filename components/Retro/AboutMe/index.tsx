// HTML n JAVASCRIPT location for AboutMe page
import Image from 'next/image'
import React from 'react'

import styles from './AboutMe.module.scss'
import Portrait from '../../public/images/portrait-32bit.png'

const AboutMe = (props) => {
  // this is component so we want to make it constant
  // 'props' is a parameter that you can change or smth
  return (
    <>
      <div className={styles.container}>
        {/* BACKGROUND */}
        {/* <div className={styles.background}>
          <Image src={BackgroundImage}/>
        </div> */}
        {/* LEFT CONTAINER */}
        <div className={styles.leftContainer}>
          <div className={styles.greenBox}>
            <h2>Name: Lucas Struijk</h2>
            <h2>Birth: 12/11/1996</h2>
          </div>
          <div className={styles.greenBox}>
            <h2>Painter / Illustrator</h2>
            <h2>Graphic Designer</h2>
          </div>
          <div className={styles.portrait}>
            <Image alt='' src={Portrait} layout={'responsive'} />
          </div>
        </div>
        {/* RIGHT CONTAINER */}
        <div className={styles.rightContainer}>
          <div className={styles.greenBox}>
            <h1>SKILLS {'&'} TALENTS</h1>
          </div>
          <div className={styles.greenBox}>
            <div className={styles.skillContainer}>
              <h2>Oil Painting</h2>
              <h2>11 Years</h2>
            </div>
            <div className={styles.skillContainer}>
              <h2>Digital Painting</h2>
              <h2>3 Years</h2>
            </div>
            <div className={styles.skillContainer}>
              <h2>Poster Design</h2>
              <h2>5 Years</h2>
            </div>
            <div className={styles.skillContainer}>
              <h2>Web Design</h2>
              <h2>3 Years</h2>
            </div>
            <div className={styles.skillContainer}>
              <h2>Magazine Design</h2>
              <h2>4 Years</h2>
            </div>
            <div className={styles.skillContainer}>
              <h2>Watercolor</h2>
              <h2>3 Years</h2>
            </div>

            <div className={styles.skillContainer}>
              <h2>Unity Engine</h2>
              <h2>1 Year</h2>
            </div>
          </div>
          <div className={styles.greenBox}>
            <p>
              Lucas is driven by finding new ways to improve his skills in
              graphic design and the art world. He seems to enjoy learning new
              skills depending on the tasks given to him.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
