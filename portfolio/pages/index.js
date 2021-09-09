import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import AboutMe from "../components/AboutMe"; //importing the whole AboutMe folder
import Shortcut from "../components/Shortcut"; //imports the Shortcut component

export default function Home() {
  // "export default function" sort of declares a "class" in .js

  const cum = 420.0;
  var cumTwice = 840.0;
  // "const" if READ ONLY variable
  // "var" if MUTATE variable
  return (
    // anything below here is rendered on page
    <>
      <Head>
        <title>Lucas Struijk</title>
        <meta name="description" content="Created with Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.shortcutGrid}>
          <Shortcut name={"say \"hi\" "} image={"google"} />
          <Shortcut name={"Google"} image={"google"} />
          <Shortcut name={"Google"} image={"google"} />
        </div>
      </div>

      <video autoPlay={true} muted loop className={styles.backgroundVideo}>
        <source src={"/videos/flowerboxWindows.mp4#t=3"} type="video/mp4"/>
      </video>
    </>
  );
}
