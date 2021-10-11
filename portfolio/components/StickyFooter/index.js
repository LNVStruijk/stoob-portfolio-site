import styles from "./StickyFooter.module.scss";
import Image from "next/image";

const StickyFooter = (props) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.taskWindow}>
          <div className={styles.inactiveWindow}>
            <p>
              <span>START</span>
            </p>
          </div>
          <div className={styles.activeWindow}>
            <p className={styles.notStart}>
              <span >Window 2</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
