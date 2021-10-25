import styles from "./PageWindow.module.scss";
import Image from "next/image";
import GalleryView from "../GalleryView";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Typography from "../Typography";
import CloseButton from "../CloseButton";
import GalleryIcon from "../../public/images/shortcuts/gallery-view.gif";
import AboutMeIcon from "../../public/images/shortcuts/about-me.gif";
import ContactMeIcon from "../../public/images/shortcuts/contact-me.gif";
import TypographyIcon from "../../public/images/shortcuts/typography.gif";

const pageWindow = (props) => {
  return (
    <>
      {props.isVisible === true ? (
        <div className={styles.container}>
          <div
            className={
              props.view === "Gallery"
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
                : null
            }
          >
            {/* HEADER OF PAGE */}
            <div className={styles.header}>
              <div className={styles.image}>
                {props.view === "Gallery" ? (
                  <Image src={GalleryIcon} />
                ) : props.view === "About Me" ? (
                  <Image src={AboutMeIcon} />
                ) : props.view === "Contact Me" ? (
                  <Image src={ContactMeIcon} />
                ) : props.view === "Typography" ? (
                  <Image src={TypographyIcon} />
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
            {props.view === "Gallery" ? (
              <GalleryView />
            ) : props.view === "About Me" ? (
              <AboutMe />
            ) : props.view === "Contact Me" ? (
              <ContactMe />
            ) : props.view === "Typography" ? (
              <Typography />
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default pageWindow;
