import styles from "./CloseButton.module.scss";

const CloseButton = (props) => {
  return (
    <>
      <div
        className={
          props.closeColor === "Featured Works"
            ? styles.container + " " + styles.galleryViewBackground
            : props.closeColor === "About Me"
            ? styles.container + " " + styles.aboutMeBackground
            : props.closeColor === "Contact Me"
            ? styles.container + " " + styles.contactMeBackground
            : props.closeColor === "Typography"
            ? styles.container + " " + styles.TypographyBackground
            : props.closeColor === "Posters"
            ? styles.container + " " + styles.PostersBackground
            : props.closeColor === "Paintings"
            ? styles.container + " " + styles.PaintingsBackground
            : null
        }
      >
        <h3>X</h3>
      </div>
    </>
  );
};

export default CloseButton;
