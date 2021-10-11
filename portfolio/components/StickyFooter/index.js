import styles from "./StickyFooter.module.scss";
import Image from "next/image";

const StickyFooter = (props) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.taskWindow}>
          <p>
            <span>START</span>
          </p>
          <p>
            <span>WINDOW 2</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
