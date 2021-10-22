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
import ReactTooltip from "react-tooltip";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

const galleryView = (props) => {
  const imgSize = 200;

  useEffect(() => {}, []);

  const dataTip = () => {
    render(
      <div>
        <p>WORDS</p>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          {/* ROW 1 */}
          <div
            data-tip={
              '<h1>"Stalker"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.stalker + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Stalker} />
            </a>
          </div>

          <div
            data-tip={
              '<h1>"Vertigo Poster"</h1> <h4> Adobe Photoshop </h4> <p>Poster inspired by Hitchcock\'s (1958)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.vertigo + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1zmxn3moPF8Gm3UOHw2Jjru4cmN6cpTix/view?usp=sharing"
              target="_blank"
            >
              <Image src={Vertigo} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"radiation2"</h1> <h4> PaintToolSAI </h4> <p>Digital painting of a radiation Victim</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.radiation + " " + styles.images}
          >
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
          <div
            data-tip={
              '<h1>"Shining Poster"</h1> <h4> Adobe Illustrator </h4> <p>Poster of Kubrick\'s Shining (1980) using only type</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.shining + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1U1FIcQh0mCDIylKcvw9pM2hrVlLzyI2t/view?usp=sharing"
              target="_blank"
            >
              <Image src={Shining} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Ash Williams"</h1> <h4> PaintToolSAI </h4> <p>Image of Ash Williams from \'Evil Dead II\'</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.williams + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1JPFo6WKsbDhX7FsDhNVFXYYxOjOc87fG/view?usp=sharing"
              target="_blank"
            >
              <Image src={Williams} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Burn Victim"</h1> <h4> PaintToolSAI </h4> <p>Study of a burn victim</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.burnVictim + " " + styles.images}
          >
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
          <div
            data-tip={
              '<h1>"There Will Be Blood Poster"</h1> <h4> Adobe Photoshop </h4> <p>Poster inspired by Thomas Anderson\'s There Will Be Blood (2007)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.blood + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1s_HggDR7-sRF1A4GmpZDzxQevjPhkv4g/view?usp=sharing"
              target="_blank"
            >
              <Image src={Blood} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Tortoise Study"</h1> <h4> PaintToolSAI </h4> <p>Study of a tortoise</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.tortoise + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1DLuVSGGeByaCGQxCDcOe_VeauDLacf1c/view?usp=sharing"
              target="_blank"
            >
              <Image src={Tortoise} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Baby"</h1> <h4> PaintToolSAI </h4> <p>Inspired by a case of \'Holoproscencephaly\' on a child</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.baby + " " + styles.images}
          >
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
          <div
            data-tip={
              '<h1>"Whiplash"</h1> <h4> Adobe Photoshop </h4> <p>Poster inspired by Chazelle\'s Whiplash (2014)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.whiplash + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1EOo4Ul8v_Tg8c5z1nmKqEAVSvsJ8F2bc/view?usp=sharing"
              target="_blank"
            >
              <Image src={Whiplash} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Reptile Study"</h1> <h4> PaintToolSAI </h4> <p>Studies of various reptiles</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.reptile + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1z6l12fP9db2r4ECLBB8pU4tZtqC7EBQg/view?usp=sharing"
              target="_blank"
            >
              <Image src={Reptile} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Oldboy Poster"</h1> <h4> Adobe Photoshop </h4> <p>Inspired by Chan-wook\'s Oldboy (2003)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.oldboy + " " + styles.images}
          >
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
          <div
            data-tip={
              '<h1>"Triggers" - Master\'s Thesis</h1> <h4> VR, UnityEngine </h4> <p>Therapeutic experiment to address \'Misophonia\' disorder</p> <h5>Click to see video demo</h5>'
            }
            data-html={true}
            className={styles.triggers + " " + styles.images}
          >
            <a
              href="https://www.youtube.com/watch?v=4ytMCMDOq2M"
              target="_blank"
            >
              <Image src={Triggers} />
            </a>
          </div>
        </div>
        <ReactTooltip className={styles.toolTip} />
      </div>
    </>
  );
};

export default galleryView;
