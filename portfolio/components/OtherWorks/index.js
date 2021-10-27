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
import React, { useState, useEffect } from "react";

const OtherWorks = (props) => {
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
              '<h1>"Omikuji Event Poster"</h1> <h4> Adobe Illustrator - 2017 </h4> <p>Campaign poster for a school Organization event</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.riceCards + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/11yo2IWir46g3O8dINxaPUm6SXegbnYh9/view?usp=sharing"
              target="_blank"
            >
              <Image src={RiceCards} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Burger Machine Menu"</h1> <h4> Multimedia - 2017 </h4> <p>Custom-made typeface taken from computer circuitry</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.burgerMachine + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1dg_yEBB2Qj46QEny7tLgg9frYuj7l4en/view?usp=sharing"
              target="_blank"
            >
              <Image src={BurgerMachine} />
            </a>
          </div>
        </div>
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Shining Poster"</h1> <h4> Adobe Illustrator - 2016</h4> <p>Poster of Kubrick\'s Shining (1980) using only type</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.ricePoster + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1U1FIcQh0mCDIylKcvw9pM2hrVlLzyI2t/view?usp=sharing"
              target="_blank"
            >
              <Image src={RicePoster} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"There Will Be Blood Poster"</h1> <h4> Adobe Photoshop - 2017</h4> <p>Poster inspired by Thomas Anderson\'s There Will Be Blood (2007)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.rickeStickers + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1s_HggDR7-sRF1A4GmpZDzxQevjPhkv4g/view?usp=sharing"
              target="_blank"
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
