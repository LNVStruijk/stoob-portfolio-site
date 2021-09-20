import styles from "./PageWindow.module.scss";
import GalleryView from "../GalleryView";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import CloseButton from "../CloseButton";

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
                : null
            }
          >
            {/* HEADER OF PAGE */}
            <div className={styles.header}>
              <div className={styles.image}>
                <p>IMAGE</p>
              </div>

              <div>
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
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default pageWindow;
