import styles from "./PageWindow.module.scss";
import Image from "next/image";
import GalleryView from "../GalleryView";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Typography from "../Typography";
import CloseButton from "../CloseButton";
import Posters from "../Posters";
import Paintings from "../Paintings";
import GalleryIcon from "../../public/images/shortcuts/gallery-view.gif";
import AboutMeIcon from "../../public/images/shortcuts/about-me.gif";
import ContactMeIcon from "../../public/images/shortcuts/contact-me.gif";
import TypographyIcon from "../../public/images/shortcuts/typography.gif";
import PostersIcon from "../../public/images/shortcuts/posters.gif";
import PaintingsIcon from "../../public/images/shortcuts/paintings.gif";


const pageWindow = (props) => {
  return (
    <>
      {props.isVisible === true ? (
        <div className={styles.container}>
          <div
            className={
              props.view === "Featured Works"
                ? styles.content +
                  " " +
                  styles.galleryBackground +
                  " " +
                  styles.largeWidth
                : props.view === "About Me"
                ? styles.content +
                  " " +
                  styles.aboutMeBackground +
                  " " +
                  styles.largeWidth
                : props.view === "Contact Me"
                ? styles.content +
                  " " +
                  styles.contactMeBackground +
                  " " +
                  styles.smallWidth
                : props.view === "Typography"
                ? styles.content +
                  " " +
                  styles.TypographyBackground +
                  " " +
                  styles.largeWidth
                : props.view === "Posters"
                ? styles.content +
                  " " +
                  styles.PostersBackground +
                  " " +
                  styles.largeWidth
                : props.view === "Paintings"
                ? styles.content +
                  " " +
                  styles.PaintingsBackground +
                  " " +
                  styles.largeWidth
                : null
            }
          >
            {/* HEADER ICON OF PAGE */}
            <div className={styles.header}>
              <div className={styles.image}>
                {props.view === "Featured Works" ? (
                  <Image src={GalleryIcon} />
                ) : props.view === "About Me" ? (
                  <Image src={AboutMeIcon} />
                ) : props.view === "Contact Me" ? (
                  <Image src={ContactMeIcon} />
                ) : props.view === "Typography" ? (
                  <Image src={TypographyIcon} />
                ) : props.view === "Posters" ? (
                  <Image src={PostersIcon} />
                ) : props.view === "Paintings" ? (
                  <Image src={PaintingsIcon} />
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
            {props.view === "Featured Works" ? (
              <GalleryView />
            ) : props.view === "About Me" ? (
              <AboutMe />
            ) : props.view === "Contact Me" ? (
              <ContactMe />
            ) : props.view === "Typography" ? (
              <Typography />
            ) : props.view === "Posters" ? (
              <Posters />
            ) :props.view === "Paintings" ? (
              <Paintings />
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default pageWindow;
