import styles from "./OtherWorks.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";

import Omikuji from "../../public/images/posters-low-res/omikuji.png";
import Orange from "../../public/images/posters-low-res/orange.png";
import PunShirts from "../../public/images/posters-low-res/pun-shirts.png";
import Shining from "../../public/images/gallery-low-resolution/shining-poster-low.png";
import Blood from "../../public/images/gallery-low-resolution/blood-poster-low.png";
import Whiplash from "../../public/images/gallery-low-resolution/whip-poster-low.png";
import OldBoy from "../../public/images/gallery-low-resolution/old-poster-low.png";
import Vertigo from "../../public/images/gallery-low-resolution/vertigo-poster-low.png";

import BurgerMachine from "../../public/images/other-works-low-res/bm-menu.jpg";
import RiceCards from "../../public/images/other-works-low-res/rice-cards.png";
import RicePoster from "../../public/images/other-works-low-res/rice-poster.png";
import RiceSticker from "../../public/images/other-works-low-res/rice-stickers.png";

import ReactTooltip from "react-tooltip";
import { isMobile } from "react-device-detect";
import React from "react";

const OtherWorks = (props) => {
  const imgSize = 200;

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
              '<h1>"Rice Cards"</h1> <h4> Adobe Photoshop - 2020 </h4> <p>Component for bachelor thesis project</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.riceCards + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1KA281cvRbwUstpYG8lZiSd2ISdR-MP0c/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={RiceCards} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Burger Machine Menu"</h1> <h4> Photoshop - 2019 </h4> <p>Final project for branding class</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.burgerMachine + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1pHRdDKotDId7d0n_Bolso16sywkJHh_L/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={BurgerMachine} />
            </a>
          </div>
        </div>
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Rice Posters"</h1> <h4> Adobe Photoshop - 2020</h4> <p>Component for bachelor thesis project</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.ricePoster + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1S6NMWSmb0iIh01FaKCEIpEH4exBeaqIC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={RicePoster} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Rice Stickers"</h1> <h4> Adobe Photoshop - 2020</h4> <p>Component for bachelor thesis project</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.rickeStickers + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1gBfZphDjUzipOyrDLdUmK6fHmMXRyxpP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={RiceSticker} />
            </a>
          </div>
        </div>
        {/* ROW 3 */}
        <div className={styles.flexRow}></div>
        {/* ROW 4 */}
        <div className={styles.flexRow}></div>
        {/* ROW 5 */}
        <div className={styles.flexRow}></div>
        <ReactTooltip className={styles.toolTip} />
      </div>
    </>
  );
};

export default OtherWorks;
