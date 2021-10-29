import Head from "next/head";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";
import styles from "../styles/Home.module.scss";
import AboutMe from "../components/AboutMe"; //importing the whole AboutMe folder
import Shortcut from "../components/Shortcut"; //imports the Shortcut component
import PageWindow from "../components/PageWindow"; //imports the PageWindow component
import StickyFooter from "../components/StickyFooter";
import CloseButton from "../components/CloseButton";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import ReactTooltip from "react-tooltip";

export default function Home() {
  /**
   * constant that updates itself automatically using SET method of itself
   * useState() = checks for change in 'state' in website then updates the constant value automatically
   * useState is where you put DEFAULT value
   * https://reactjs.org/docs/hooks-state.html
   */
  const [mobileView, setMobileView] = useState(false);

  const [isGalleryVisible, setIsGalleryVisible] = useState(true);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isContactMeVisible, setIsContactMeVisible] = useState(false);
  const [isTypographyVisible, setTypographyVisible] = useState(false);
  const [isPostersVisible, setPostersVisible] = useState(false);
  const [isPaintingsVisible, setPaintingsVisible] = useState(false);
  const [isOtherWorksVisible, setOtherWorksVisible] = useState(false);

  const [crtFilter, setCrtFilter] = useState(true);

  useEffect(() => {
    setMobileView(isMobile);
  }, [isMobile]);

  /**
   * this is the format for a method or function
   */
  const testMethod = () => {
    console.log("method activated");
  };

  // const renderMobilePopUp = () => {
  //   if (mobileView) {
  //     return (
  //       <div className={styles.mobilePopUp}>
  //         <p>This site is better with desktop view enabled</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    /**
     * anything here is rendered on the Home Page
     * except for the <HEAD> tag which is for the page's metadata like tab title
     */
    <>
      <Head>
        <title>Lucas Struijk</title>
        <meta name="description" content="Created with Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.crt}>
        {/* <div className={styles.crtSwitch} onClick={()=> {crtFilter ? setCrtFilter(false) : setCrtFilter(true)}}>
          <p>CRT</p>
        </div> */}

        {/* {renderMobilePopUp()} */}
        <div className={styles.container}>
          <section className={styles.shortcuts} id={"Shortcut Rows"}>
            {/* SHORTCUT ROW 1 */}
            <div className={styles.shortcutGrid}>
                <div onClick={() => setIsGalleryVisible(true)}>
                  <Shortcut name={"featured works"} image={"Featured"} />
                </div>
              <div onClick={() => setIsAboutMeVisible(true)}>
                <Shortcut name={"about me"} image={"AboutMe"} />
              </div>
              <div onClick={() => setIsContactMeVisible(true)}>
                <Shortcut name={"contact me"} image={"ContactMe"} />
              </div>
            </div>

            {/* SHORTCUT ROW 2 */}
            <div className={styles.shortcutGrid}>
              <div onClick={() => setTypographyVisible(true)}>
                <Shortcut name={"typography"} image={"Typography"} />
              </div>
              <div onClick={() => setPostersVisible(true)}>
                <Shortcut name={"posters"} image={"Posters"} />
              </div>
              <div onClick={() => setPaintingsVisible(true)}>
                <Shortcut name={"paintings"} image={"Paintings"} />
              </div>
            </div>

            {/* SHORTCUT ROW 3 */}
            <div className={styles.shortcutGrid}>
              <Shortcut name={'say "hi" '} image={"Doom"} />
              <div onClick={() => setOtherWorksVisible(true)}>
                <Shortcut name={"other works"} image={"OtherWorks"} />
              </div>
            </div>

            {/* PLAYER ROW */}
            {/* <div className={styles.shortcutGrid}>
              <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
            </div> */}

            {/* TEST */}
            <div className={styles.shortcutGrid}></div>
          </section>

          <section className={styles.windows} id={"Page Windows"}>
            {/* GALLERY VIEW */}
            <PageWindow
              view={"Featured Works"}
              isVisible={isGalleryVisible}
              closeWindow={() => setIsGalleryVisible(false)}
            />

            {/* ABOUT ME VIEW */}
            <PageWindow
              view={"About Me"}
              isVisible={isAboutMeVisible}
              closeWindow={() => setIsAboutMeVisible(false)}
            />
            {/* CONTACT ME VIEW */}
            <PageWindow
              view={"Contact Me"}
              isVisible={isContactMeVisible}
              closeWindow={() => setIsContactMeVisible(false)}
            />

            {/* TYPOGRAPHY VIEW */}
            <PageWindow
              view={"Typography"}
              isVisible={isTypographyVisible}
              closeWindow={() => setTypographyVisible(false)}
            />
            {/* POSTERS VIEW */}
            <PageWindow
              view={"Posters"}
              isVisible={isPostersVisible}
              closeWindow={() => setPostersVisible(false)}
            />
            {/* PAINTINGS VIEW */}
            <PageWindow
              view={"Paintings"}
              isVisible={isPaintingsVisible}
              closeWindow={() => setPaintingsVisible(false)}
            />
            {/* OTHER WORKS VIEW */}
            <PageWindow
              view={"Other Works"}
              isVisible={isOtherWorksVisible}
              closeWindow={() => setOtherWorksVisible(false)}
            />
          </section>

          
        </div>

        <video autoPlay={true} muted loop className={styles.backgroundVideo}>
          <source
            src={"/videos/backgroundVideoCompressed.mp4"}
            type="video/mp4"
          />
        </video>

        <StickyFooter
          currentWindow={
            isGalleryVisible
              ? "Featured Works"
              : isAboutMeVisible
              ? "About Me"
              : isContactMeVisible
              ? "Contact Me"
              : isTypographyVisible
              ? "Typography"
              : isPostersVisible
              ? "Posters"
              : isPaintingsVisible
              ? "Paintings"
              : isOtherWorksVisible
              ? "Other Works"
              : null
          }
        />
      </div>
    </>
  );
}
