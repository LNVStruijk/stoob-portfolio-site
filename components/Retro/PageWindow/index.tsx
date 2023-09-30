import styles from './PageWindow.module.scss'
import React from 'react'
import Image from 'next/image'
import GalleryView from '../GalleryView'
import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Typography from '../Typography'
import CloseButton from '../CloseButton'
import Posters from '../Posters'
import Paintings from '../Paintings'
import OtherWorks from '../OtherWorks'
import GalleryIcon from '../../public/images/shortcuts/gallery-view.gif'
import AboutMeIcon from '../../public/images/shortcuts/about-me.gif'
import ContactMeIcon from '../../public/images/shortcuts/contact-me.gif'
import TypographyIcon from '../../public/images/shortcuts/typography.gif'
import PostersIcon from '../../public/images/shortcuts/posters.gif'
import PaintingsIcon from '../../public/images/shortcuts/paintings.gif'
import OtherWorksIcon from '../../public/images/shortcuts/other-works.gif'

const pageWindow = (props) => {
  return (
    <>
      {props.isVisible === true ? (
        <div className={styles.container}>
          <div
            className={
              props.view === 'Featured Works'
                ? styles.content +
                  ' ' +
                  styles.galleryBackground +
                  ' ' +
                  styles.largeWidth
                : props.view === 'About Me'
                ? styles.content +
                  ' ' +
                  styles.aboutMeBackground +
                  ' ' +
                  styles.aboutMeWidth
                : props.view === 'Contact Me'
                ? styles.content +
                  ' ' +
                  styles.contactMeBackground +
                  ' ' +
                  styles.smallWidth
                : props.view === 'Typography'
                ? styles.content +
                  ' ' +
                  styles.TypographyBackground +
                  ' ' +
                  styles.largeWidth
                : props.view === 'Posters'
                ? styles.content +
                  ' ' +
                  styles.PostersBackground +
                  ' ' +
                  styles.largeWidth
                : props.view === 'Paintings'
                ? styles.content +
                  ' ' +
                  styles.PaintingsBackground +
                  ' ' +
                  styles.largeWidth
                : props.view === 'Other Works'
                ? styles.content +
                  ' ' +
                  styles.OtherWorksBackground +
                  ' ' +
                  styles.largeWidth
                : ''
            }
          >
            {/* HEADER ICON OF PAGE */}
            <div className={styles.header}>
              <div className={styles.image}>
                {props.view === 'Featured Works' ? (
                  <Image alt='' src={GalleryIcon} />
                ) : props.view === 'About Me' ? (
                  <Image alt='' src={AboutMeIcon} />
                ) : props.view === 'Contact Me' ? (
                  <Image alt='' src={ContactMeIcon} />
                ) : props.view === 'Typography' ? (
                  <Image alt='' src={TypographyIcon} />
                ) : props.view === 'Posters' ? (
                  <Image alt='' src={PostersIcon} />
                ) : props.view === 'Paintings' ? (
                  <Image alt='' src={PaintingsIcon} />
                ) : props.view === 'Other Works' ? (
                  <Image alt='' src={OtherWorksIcon} />
                ) : null}
              </div>

              <div className={styles.pageTitle}>
                <h1>{props.view}</h1>
              </div>

              <div onClick={props.closeWindow}>
                <CloseButton closeColor={props.view} />
              </div>
            </div>

            {/* CONTENT OF PAGE */}
            {props.view === 'Featured Works' ? (
              <GalleryView />
            ) : props.view === 'About Me' ? (
              <AboutMe />
            ) : props.view === 'Contact Me' ? (
              <ContactMe />
            ) : props.view === 'Typography' ? (
              <Typography />
            ) : props.view === 'Posters' ? (
              <Posters />
            ) : props.view === 'Paintings' ? (
              <Paintings />
            ) : props.view === 'Other Works' ? (
              <OtherWorks />
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default pageWindow
