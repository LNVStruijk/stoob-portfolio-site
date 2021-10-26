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
          <section id={"Page Windows"}>
            {/* GALLERY VIEW */}
            <PageWindow
              view={"Gallery"}
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
            {/* TYPOGRAPHY VIEW */}
            <PageWindow
              view={"Posters"}
              isVisible={isPostersVisible}
              closeWindow={() => setPostersVisible(false)}
            />
          </section>

          <section id={"Shortcut Rows"}>
            {/* SHORTCUT ROW 1 */}
            <div className={styles.shortcutGrid}>
              <div onClick={() => setIsGalleryVisible(true)}>
                <Shortcut name={"gallery view"} image={"image1"} />
              </div>
              <div onClick={() => setIsAboutMeVisible(true)}>
                <Shortcut name={"about me"} image={"image3"} />
              </div>
              <div onClick={() => setIsContactMeVisible(true)}>
                <Shortcut name={"contact me"} image={"image4"} />
              </div>
            </div>

            {/* SHORTCUT ROW 2 */}
            <div className={styles.shortcutGrid}>
              <div onClick={() => setTypographyVisible(true)}>
                <Shortcut name={"typography"} image={"image5"} />
              </div>
              <div onClick={() => setPostersVisible(true)}>
                <Shortcut name={"posters"} image={"image2"} />
              </div>

              <Shortcut name={"paintings"} image={"image6"} />
            </div>

            {/* SHORTCUT ROW 3 */}
            <div className={styles.shortcutGrid}>
              <Shortcut name={'say "hi" '} image={"image7"} />
            </div>

            {/* PLAYER ROW */}
            {/* <div className={styles.shortcutGrid}>
              <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
            </div> */}

            {/* TEST */}
            <div className={styles.shortcutGrid}></div>
          </section>
        </div>

        <video autoPlay={true} muted loop className={styles.backgroundVideo}>
          <source
            src={"/videos/backgroundVideoCompressed.mp4"}
            type="video/mp4"
          />
        </video>

        <StickyFooter />
      </div>
    </>
  );
}
