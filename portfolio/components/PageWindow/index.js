import styles from "./PageWindow.module.scss";
import GalleryView from "../GalleryView";
import AboutMe from "../AboutMe";

const pageWindow = (props) => {
  return (
    <>
      {props.isVisible === true ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.image}>
                <p>IMAGE</p>
              </div>
              <div>
                <h1>WINDOW NAME</h1>
              </div>
              <div onClick={props.closeWindow}>
                <p>CLOSE</p>
              </div>
            </div>
						{props.view === "Gallery" ? (
							<GalleryView/>
						) :
						props.view === "About Me" ?(
							<AboutMe/>
						) :
						null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default pageWindow;
