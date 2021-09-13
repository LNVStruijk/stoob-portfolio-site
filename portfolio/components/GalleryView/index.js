import styles from "./GalleryView.module.scss";
import Image from "next/image";
import Link from "next/link";
import Stalker from "../../public/images/stalker.png";
import Vertigo from "../../public/images/vertigo-poster.png";
import Radiation from "../../public/images/radiation2.png";
import Williams from "../../public/images/ash-williams.png";
import Shining from "../../public/images/shining-poster.png";
import BurnVictim from "../../public/images/burn-victim.png";
import Blood from "../../public/images/blood-poster.png";
import Tortoise from "../../public/images/tortoise.jpg";

const galleryView = (props) => {
  const imgSize = 200;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          <div className={styles.stalker + " " + styles.images}>
            <a
              href="https://www.youtube.com/watch?v=MFujRMSjWnE"
              target="_blank"
            >
              <Image src={Stalker} />
            </a>
          </div>
          <div className={styles.vertigo + " " + styles.images}>
            <Image src={Vertigo} />
          </div>
          <div className={styles.radiation + " " + styles.images}>
            <Image src={Radiation} />
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.williams + " " + styles.images}>
            <Image src={Williams} />
          </div>
          <div className={styles.shining + " " + styles.images}>
            <Image src={Shining} />
          </div>
          <div className={styles.burnVictim + " " + styles.images}>
            <Image src={BurnVictim} />
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.blood + " " + styles.images}>
            <Image src={Blood} />
          </div>
          <div className={styles.tortoise + " " + styles.images}>
            <Image src={Tortoise} />
          </div>
        </div>
      </div>
    </>
  );
};

export default galleryView;
