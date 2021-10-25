import styles from "./Typography.module.scss";
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

const Typography = (props) => {
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
        <div className={styles.flexRow}>{/* ROW 1 */}</div>
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

export default Typography;
