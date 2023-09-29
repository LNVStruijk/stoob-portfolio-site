'use client'
import React, { useState } from 'react'
import Shortcut from '../../components/Shortcut'
import PageWindow from '../../components/PageWindow'
import StickyFooter from '../../components/StickyFooter'
import styles from './styles.module.scss'

const Retro = () => {
  /**
   * constant that updates itself automatically using SET method of itself
   * useState() = checks for change in 'state' in website then updates the constant value automatically
   * useState is where you put DEFAULT value
   * https://reactjs.org/docs/hooks-state.html
   */
  const [isGalleryVisible, setIsGalleryVisible] = useState(true)
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false)
  const [isContactMeVisible, setIsContactMeVisible] = useState(false)
  const [isTypographyVisible, setTypographyVisible] = useState(false)
  const [isPostersVisible, setPostersVisible] = useState(false)
  const [isPaintingsVisible, setPaintingsVisible] = useState(false)
  const [isOtherWorksVisible, setOtherWorksVisible] = useState(false)

  return (
    <div className={styles.crt}>
      <div className={styles.container}>
        <div className={styles.constructionText}>
          <div>
            <h1>The OG retro page is under construction</h1>
            <img src='/images/shortcuts/doom-laugh.gif'></img>
          </div>
        </div>
        <video autoPlay={true} muted className={styles.backgroundVideo}>
          <source
            src='/videos/backgroundVideoCompressed.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>

    // <div className={styles.crt}>
    //   <div className={styles.container}>
    //     <section className={styles.shortcuts} id={"Shortcut Rows"}>
    //       {/* SHORTCUT ROW 1 */}
    //       <div className={styles.shortcutGrid}>
    //         <div onClick={() => setIsGalleryVisible(true)}>
    //           <Shortcut name={"featured works"} image={"Featured"} />
    //         </div>
    //         <div onClick={() => setIsAboutMeVisible(true)}>
    //           <Shortcut name={"about me"} image={"AboutMe"} />
    //         </div>
    //         <div onClick={() => setIsContactMeVisible(true)}>
    //           <Shortcut name={"contact me"} image={"ContactMe"} />
    //         </div>
    //       </div>

    //       {/* SHORTCUT ROW 2 */}
    //       <div className={styles.shortcutGrid}>
    //         <div onClick={() => setTypographyVisible(true)}>
    //           <Shortcut name={"typography"} image={"Typography"} />
    //         </div>
    //         <div onClick={() => setPostersVisible(true)}>
    //           <Shortcut name={"posters"} image={"Posters"} />
    //         </div>
    //         <div onClick={() => setPaintingsVisible(true)}>
    //           <Shortcut name={"paintings"} image={"Paintings"} />
    //         </div>
    //       </div>

    //       {/* SHORTCUT ROW 3 */}
    //       <div className={styles.shortcutGrid}>
    //         <a
    //           href="https://www.instagram.com/lucas.makes.stuff/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <Shortcut name={'say "hi" '} image={"Doom"} />
    //         </a>

    //         <div onClick={() => setOtherWorksVisible(true)}>
    //           <Shortcut name={"other works"} image={"OtherWorks"} />
    //         </div>
    //       </div>

    //       {/* TEST */}
    //       <div className={styles.shortcutGrid}></div>
    //     </section>

    //     <section className={styles.windows} id={"Page Windows"}>
    //       {/* GALLERY VIEW */}
    //       <PageWindow
    //         view={"Featured Works"}
    //         isVisible={isGalleryVisible}
    //         closeWindow={() => setIsGalleryVisible(false)}
    //       />

    //       {/* ABOUT ME VIEW */}
    //       <PageWindow
    //         view={"About Me"}
    //         isVisible={isAboutMeVisible}
    //         closeWindow={() => setIsAboutMeVisible(false)}
    //       />
    //       {/* CONTACT ME VIEW */}
    //       <PageWindow
    //         view={"Contact Me"}
    //         isVisible={isContactMeVisible}
    //         closeWindow={() => setIsContactMeVisible(false)}
    //       />

    //       {/* TYPOGRAPHY VIEW */}
    //       <PageWindow
    //         view={"Typography"}
    //         isVisible={isTypographyVisible}
    //         closeWindow={() => setTypographyVisible(false)}
    //       />
    //       {/* POSTERS VIEW */}
    //       <PageWindow
    //         view={"Posters"}
    //         isVisible={isPostersVisible}
    //         closeWindow={() => setPostersVisible(false)}
    //       />
    //       {/* PAINTINGS VIEW */}
    //       <PageWindow
    //         view={"Paintings"}
    //         isVisible={isPaintingsVisible}
    //         closeWindow={() => setPaintingsVisible(false)}
    //       />
    //       {/* OTHER WORKS VIEW */}
    //       <PageWindow
    //         view={"Other Works"}
    //         isVisible={isOtherWorksVisible}
    //         closeWindow={() => setOtherWorksVisible(false)}
    //       />
    //     </section>
    //   </div>

    //   <video autoPlay={true} muted className={styles.backgroundVideo}>
    //     <source
    //       src={"/videos/backgroundVideoCompressed.mp4"}
    //       type="video/mp4"
    //     />
    //   </video>

    //   <StickyFooter
    //     currentWindow={
    //       isGalleryVisible
    //         ? "Featured Works"
    //         : isAboutMeVisible
    //         ? "About Me"
    //         : isContactMeVisible
    //         ? "Contact Me"
    //         : isTypographyVisible
    //         ? "Typography"
    //         : isPostersVisible
    //         ? "Posters"
    //         : isPaintingsVisible
    //         ? "Paintings"
    //         : isOtherWorksVisible
    //         ? "Other Works"
    //         : null
    //     }
    //   />
    // </div>
  )
}

export default Retro
