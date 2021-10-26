import styles from "./Paintings.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";
import Stalker from "../../public/images/gallery-low-resolution/stalker-low.png";
import Radiation from "../../public/images/gallery-low-resolution/radiation2-low.png";
import Williams from "../../public/images/gallery-low-resolution/ash-williams-low.png";
import BurnVictim from "../../public/images/gallery-low-resolution/burn-victim-low.png";
import Tortoise from "../../public/images/gallery-low-resolution/tortoise-low.png";
import Baby from "../../public/images/gallery-low-resolution/baby-low.png";
import Reptile from "../../public/images/gallery-low-resolution/reptile-study-low.png";

import Orange from "../../public/images/posters-low-res/orange.png";
import ReactTooltip from "react-tooltip";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

const Paintings = (props) => {
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
            className={styles.omikuji + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/11yo2IWir46g3O8dINxaPUm6SXegbnYh9/view?usp=sharing"
              target="_blank"
            >
              <Image src={Stalker} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Film Showing Poster"</h1> <h4> Multimedia - 2017 </h4> <p>Custom-made typeface taken from computer circuitry</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.orange + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1dg_yEBB2Qj46QEny7tLgg9frYuj7l4en/view?usp=sharing"
              target="_blank"
            >
              <Image src={BurnVictim} />
            </a>
          </div>
        </div>
        {/* ROW 2 */}
        <div className={styles.flexRow}></div>
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

export default Paintings;
