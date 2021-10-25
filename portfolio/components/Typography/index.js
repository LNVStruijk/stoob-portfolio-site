import styles from "./Typography.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";
import Droid from "../../public/images/typography-low-res/droid.png";
import Circuit from "../../public/images/typography-low-res/circuit.jpg";
import CenturyGothic from "../../public/images/typography-low-res/century-gothic.jpg";
import Spread1 from "../../public/images/typography-low-res/mag-spread-1.jpg";
import Spread2 from "../../public/images/typography-low-res/mag-spread-2.jpg";
import Spread3 from "../../public/images/typography-low-res/mag-spread-3.jpg";
import Spread4 from "../../public/images/typography-low-res/mag-spread-4.jpg";
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
              '<h1>"Droid Typeface Poster"</h1> <h4> Adobe Illustrator </h4> <p>Typeface poster inspired by the \"Droid\" typeface</p> <h5>Click to see full image</h5>'
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
              '<h1>"Curcuit Typeface Poster"</h1> <h4> Adobe Illustrator </h4> <p>Custom-made typeface taken from computer circuitry</p> <h5>Click to see full image</h5>'
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
              '<h1>"Century Gothic Typeface Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.centuryGothic + " " + styles.images}
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
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Spread1} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Spread4} />
            </a>
          </div>
        </div>
        {/* ROW 3 */}
        <div className={styles.flexRow}>
        <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Spread3} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Droid Font Poster"</h1> <h4> PaintToolSAI </h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/14v2qsZ__RR7-m-zFJi-BLD9GWwjc7PCS/view?usp=sharing"
              target="_blank"
            >
              <Image src={Spread2} />
            </a>
          </div>
        </div>
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
