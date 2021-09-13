import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import AboutMe from "../components/AboutMe"; //importing the whole AboutMe folder
import Shortcut from "../components/Shortcut"; //imports the Shortcut component
import PageWindow from "../components/PageWindow"; //imports the PageWindow component
import React, { useState } from "react";

export default function Home() {
  // "export default function" sort of declares a "class" in .js

  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isAboutMeVisible, setAboutMeVisible] = useState(false);
  // 'useState' sets the DEFAULT VALUE

  // constant that updates itself automatically?
  // useState() = checks for change in 'state' then updates wtf
  // useState is where you put DEFAULT value

  // const [x,y]

  const cum = 420.0;
  var cumTwice = 840.0;
  // "const" if READ ONLY variable
  // "var" if MUTATE variable

  //  = () => MEANS IT'S A METHOd
  const renderWindow = () => {
    console.log("window shown");
    //setIsGalleryVisible is BUILT IN FUNCTION for isGalleryVisible
  };

  return (
    // anything below here is rendered on page
    <>
      <Head>
        <title>Lucas Struijk</title>
        <meta name="description" content="Created with Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* GALLERY VIEW */}
      <div className={styles.container}>
        <PageWindow
          view = {"Gallery"}
          isVisible={isGalleryVisible}
          closeWindow={() => 
            {
              setIsGalleryVisible(false);
            }
          }
        />

        <div className={styles.shortcutGrid}>
          <div
            onClick={() => {
              setAboutMeVisible(true);
            }}
          >
            <Shortcut name={'gallery view'} image={"image2"} />
          </div>

          <div
            onClick={() => {
              setAboutMeVisible(true);
            }}
          >
            <Shortcut name={'about me'} image={"image1"} />
          </div>
          
          <Shortcut name={"graphic design"} image={"image1"} />
        </div>

        <div className={styles.shortcutGrid}>
          <Shortcut name={"typography"} image={"image1"} />
          <Shortcut name={"posters"} image={"image1"} />
          <Shortcut name={"paintings"} image={"image1"} />
        </div>
        <div className={styles.shortcutGrid}>
          <Shortcut name={'say "hi" '} image={"image1"} />
        </div>
      </div>

      <video autoPlay={true} muted loop className={styles.backgroundVideo}>
        <source src={"/videos/flowerboxWindows.mp4#t=3"} type="video/mp4" />
      </video>
    </>
  );
}
