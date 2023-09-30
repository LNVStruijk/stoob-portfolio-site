import React from 'react'
import styles from './styles.module.scss'

const StickyFooter = (props) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.taskWindow}>
          <div className={styles.inactiveWindow}>
            <p>
              <span>START</span>
            </p>
          </div>
          {props.currentWindow === 'Featured Works' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'About Me' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'Contact Me' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'About Me' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'Typography' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'Posters' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'Paintings' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : props.currentWindow === 'Other Works' ? (
            <div className={styles.activeWindow}>
              <p className={styles.notStart}>
                <span>{props.currentWindow}</span>
              </p>
            </div>
          ) : null}
          <div className={styles.nonClickable}>
            <p className={styles.creators}>
              Created by Lucas Struijk {'&'} Andrea Ang
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyFooter
