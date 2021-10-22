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
import Triggers from "../../public/images/gallery-low-resolution/triggers-link.jpg";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

const galleryView = (props) => {
  const imgSize = 200;
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(isMobile);
  }, [isMobile]);

  const renderMobileView = () => {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.stalker + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Stalker} />
            </a>
          </div>
          
          <div className={styles.toolTip}>
            <span>Tooltip text</span>
          </div>

          <div className={styles.vertigo + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1zmxn3moPF8Gm3UOHw2Jjru4cmN6cpTix/view?usp=sharing"
              target="_blank"
            >
              <Image src={Vertigo} />
            </a>
          </div>
          <div className={styles.radiation + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1ec7PMKk7FGdMIfhsLSIVkGfLiR9nhBy0/view?usp=sharing"
              target="_blank"
            >
              <Image src={Radiation} />
            </a>
          </div>
          <div className={styles.shining + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1U1FIcQh0mCDIylKcvw9pM2hrVlLzyI2t/view?usp=sharing"
              target="_blank"
            >
              <Image src={Shining} />
            </a>
          </div>
          <div className={styles.williams + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1JPFo6WKsbDhX7FsDhNVFXYYxOjOc87fG/view?usp=sharing"
              target="_blank"
            >
              <Image src={Williams} />
            </a>
          </div>
          <div className={styles.burnVictim + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1mMHOQqsLbZ3k0lQFB_rCfXazcHkNJOtQ/view?usp=sharing"
              target="_blank"
            >
              <Image src={BurnVictim} />
            </a>
          </div>
          <div className={styles.blood + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1s_HggDR7-sRF1A4GmpZDzxQevjPhkv4g/view?usp=sharing"
              target="_blank"
            >
              <Image src={Blood} />
            </a>
          </div>
          <div className={styles.tortoise + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1DLuVSGGeByaCGQxCDcOe_VeauDLacf1c/view?usp=sharing"
              target="_blank"
            >
              <Image src={Tortoise} />
            </a>
          </div>
          <div className={styles.baby + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1BacQuo4TRiacZYgzNA1Z1R0H8COmd18g/view?usp=sharing"
              target="_blank"
            >
              <Image src={Baby} />
            </a>
          </div>

          <div className={styles.whiplash + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1EOo4Ul8v_Tg8c5z1nmKqEAVSvsJ8F2bc/view?usp=sharing"
              target="_blank"
            >
              <Image src={Whiplash} />
            </a>
          </div>
          <div className={styles.reptile + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1z6l12fP9db2r4ECLBB8pU4tZtqC7EBQg/view?usp=sharing"
              target="_blank"
            >
              <Image src={Reptile} />
            </a>
          </div>
          <div className={styles.oldboy + " " + styles.images}>
            <a
              href="https://drive.google.com/file/d/1JFpIzT5wW9YVpVsm0lZcKperEFlXZ6Tb/view?usp=sharing"
              target="_blank"
            >
              <Image src={OldBoy} />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {mobileView ? (
        renderMobileView()
      ) : (
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
              <a
                href="https://drive.google.com/file/d/1zmxn3moPF8Gm3UOHw2Jjru4cmN6cpTix/view?usp=sharing"
                target="_blank"
              >
                <Image src={Vertigo} />
              </a>
            </div>
            <div className={styles.radiation + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1ec7PMKk7FGdMIfhsLSIVkGfLiR9nhBy0/view?usp=sharing"
                target="_blank"
              >
                <Image src={Radiation} />
              </a>
            </div>
          </div>
          {/* ROW 2 */}
          <div className={styles.flexRow}>
            <div className={styles.shining + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1U1FIcQh0mCDIylKcvw9pM2hrVlLzyI2t/view?usp=sharing"
                target="_blank"
              >
                <Image src={Shining} />
              </a>
            </div>
            <div className={styles.williams + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1JPFo6WKsbDhX7FsDhNVFXYYxOjOc87fG/view?usp=sharing"
                target="_blank"
              >
                <Image src={Williams} />
              </a>
            </div>
            <div className={styles.burnVictim + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1mMHOQqsLbZ3k0lQFB_rCfXazcHkNJOtQ/view?usp=sharing"
                target="_blank"
              >
                <Image src={BurnVictim} />
              </a>
            </div>
          </div>
          {/* ROW 3 */}
          <div className={styles.flexRow}>
            <div className={styles.blood + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1s_HggDR7-sRF1A4GmpZDzxQevjPhkv4g/view?usp=sharing"
                target="_blank"
              >
                <Image src={Blood} />
              </a>
            </div>
            <div className={styles.tortoise + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1DLuVSGGeByaCGQxCDcOe_VeauDLacf1c/view?usp=sharing"
                target="_blank"
              >
                <Image src={Tortoise} />
              </a>
            </div>
            <div className={styles.baby + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1BacQuo4TRiacZYgzNA1Z1R0H8COmd18g/view?usp=sharing"
                target="_blank"
              >
                <Image src={Baby} />
              </a>
            </div>
          </div>
          {/* ROW 4 */}
          <div className={styles.flexRow}>
            <div className={styles.whiplash + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1EOo4Ul8v_Tg8c5z1nmKqEAVSvsJ8F2bc/view?usp=sharing"
                target="_blank"
              >
                <Image src={Whiplash} />
              </a>
            </div>
            <div className={styles.reptile + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1z6l12fP9db2r4ECLBB8pU4tZtqC7EBQg/view?usp=sharing"
                target="_blank"
              >
                <Image src={Reptile} />
              </a>
            </div>
            <div className={styles.oldboy + " " + styles.images}>
              <a
                href="https://drive.google.com/file/d/1JFpIzT5wW9YVpVsm0lZcKperEFlXZ6Tb/view?usp=sharing"
                target="_blank"
              >
                <Image src={OldBoy} />
              </a>
            </div>
          </div>
          {/* ROW 5 */}
          <div className={styles.flexRow}>
            <div className={styles.triggers + " " + styles.images}>
              <a
                href="https://www.youtube.com/watch?v=4ytMCMDOq2M"
                target="_blank"
              >
                <Image src={Triggers} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default galleryView;
