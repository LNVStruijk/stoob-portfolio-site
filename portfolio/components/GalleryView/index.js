import styles from "./GalleryView.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";
import Stalker from "../../public/images/gallery-low-resolution/stalker-low.png";
import Vertigo from "../../public/images/gallery-low-resolution/vertigo-poster-low.png";
import Radiation from "../../public/images/gallery-low-resolution/radiation2-low.png";
import Williams from "../../public/images/gallery-low-resolution/ash-williams-low.png";
import Shining from "../../public/images/gallery-low-resolution/shining-poster-low.png";
import BurnVictim from "../../public/images/gallery-low-resolution/burn-victim-low.png";
import Blood from "../../public/images/gallery-low-resolution/blood-poster-low.png";
import Tortoise from "../../public/images/gallery-low-resolution/tortoise-low.png";
import Baby from "../../public/images/gallery-low-resolution/baby-low.png";
import Whiplash from "../../public/images/gallery-low-resolution/whip-poster-low.png";
import OldBoy from "../../public/images/gallery-low-resolution/old-poster-low.png";
import Reptile from "../../public/images/gallery-low-resolution/reptile-study-low.png";

const galleryView = (props) => {
  const imgSize = 200;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          {/* ROW 1 */}
          <div className={styles.stalker + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
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
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div className={styles.shining + " " + styles.images}>
            <Image src={Shining} />
          </div>
          <div className={styles.williams + " " + styles.images}>
            <Image src={Williams} />
          </div>
          <div className={styles.burnVictim + " " + styles.images}>
            <Image src={BurnVictim} />
          </div>
        </div>
        {/* ROW 3 */}
        <div className={styles.flexRow}>
          <div className={styles.blood + " " + styles.images}>
            <Image src={Blood} />
          </div>
          <div className={styles.tortoise + " " + styles.images}>
            <Image src={Tortoise} />
          </div>
          <div className={styles.baby + " " + styles.images}>
            <Image src={Baby} />
          </div>
        </div>
        {/* ROW 4 */}
        <div className={styles.flexRow}>
          <div className={styles.whiplash + " " + styles.images}>
            <Image src={Whiplash} />
          </div>
          <div className={styles.reptile + " " + styles.images}>
            <Image src={Reptile} />
          </div>
          <div className={styles.oldboy + " " + styles.images}>
            <Image src={OldBoy} />
          </div>
        </div>
      </div>
    </>
  );
};

export default galleryView;
