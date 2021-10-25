import styles from "./Typography.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";
import Droid from "../../public/images/typography-low-res/droid.png";
import Circuit from "../../public/images/typography-low-res/circuit.jpg";
import CenturyGothic from "../../public/images/typography-low-res/century-gothic.jpg";
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
        <div className={styles.flexRow}>
          {/* ROW 1 */}
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.droid + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Droid} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.circuit + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Circuit} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.circuit + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={CenturyGothic} />
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

export default Typography;
