import styles from "./Paintings.module.scss";
import Image from "next/image";
import Link from "next/link";
import DitherTexture from "../../public/images/dither-texture.png";
import Stalker from "../../public/images/gallery-low-resolution/stalker-low.png";
import Radiation2 from "../../public/images/gallery-low-resolution/radiation2-low.png";
import Williams from "../../public/images/gallery-low-resolution/ash-williams-low.png";
import BurnVictim from "../../public/images/gallery-low-resolution/burn-victim-low.png";
import Tortoise from "../../public/images/gallery-low-resolution/tortoise-low.png";
import Baby from "../../public/images/gallery-low-resolution/baby-low.png";
import Reptile from "../../public/images/gallery-low-resolution/reptile-study-low.png";
import Shark1 from "../../public/images/paintings-low-res/shark-1.png";
import Shark2 from "../../public/images/paintings-low-res/shark-2.png";
import Caligula from "../../public/images/paintings-low-res/emperor.jpg";
import Chernobyl from "../../public/images/paintings-low-res/child-of-chernobyl.png";
import Radiation1 from "../../public/images/paintings-low-res/radiation-1.png";
import Clouds from "../../public/images/paintings-low-res/clouds-small.png";
import Plains from "../../public/images/paintings-low-res/plains-small.png";

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
              '<h1>"Stalker"</h1> <h4> PaintToolSAI - 2020</h4> <p>Inspired by Tarkovky\'s Stalker (1979)</p> <h5>Click to see full image</h5>'
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
              "<h1>\"Baby\"</h1> <h4> PaintToolSAI - 2021 </h4> <p>Inspired by a case of 'Holoproscencephaly' on a child</p> <h5>Click to see full image</h5>"
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
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              "<h1>\"Ash Williams\"</h1> <h4> PaintToolSAI - 2020</h4> <p>Image of Ash Williams from 'Evil Dead II'</p> <h5>Click to see full image</h5>"
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
              '<h1>"Burn Victim"</h1> <h4> PaintToolSAI - 2020</h4> <p>Study of a burn victim</p> <h5>Click to see full image</h5>'
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
              '<h1>"Tortoise Study"</h1> <h4> PaintToolSAI - 2020 </h4> <p>Study of a tortoise</p> <h5>Click to see full image</h5>'
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
              '<h1>"Shark Study 1"</h1> <h4> PaintToolSAI - 2020 </h4> <p>Study of several shark figures</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.shark1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/19VueCqKCVcAY4rkhJB1SJfkyAYJk2YjB/view?usp=sharing"
              target="_blank"
            >
              <Image src={Shark1} />
            </a>
          </div>
        </div>
        {/* ROW 4 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Burn Victim"</h1> <h4> PaintToolSAI - 2019</h4> <p>Study of a burn victim</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.caligula + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1jFLcgLLvdhmf5LzTk0cd4KbZDqkNI2tR/view?usp=sharing"
              target="_blank"
            >
              <Image src={Caligula} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"radiation2"</h1> <h4> PaintToolSAI - 2019</h4> <p>Digital painting of a radiation victim</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.radiation + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1ec7PMKk7FGdMIfhsLSIVkGfLiR9nhBy0/view?usp=sharing"
              target="_blank"
            >
              <Image src={Radiation2} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"child of chernobyl"</h1> <h4> PaintToolSAI - 2019</h4> <p>Digital painting after Chernobyl</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.chernobyl + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1XJ06Q9i24luWjlrRGL8XBrC5regxTiJH/view?usp=sharing"
              target="_blank"
            >
              <Image src={Chernobyl} />
            </a>
          </div>
        </div>
        {/* ROW 5 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Shark Study 2"</h1> <h4> PaintToolSAI - 2020 </h4> <p>Study of several shark figures</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.shark2 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1p1IBbgG0ri6_ccYhl6xqyk8UP8ifA2F6/view?usp=sharing"
              target="_blank"
            >
              <Image src={Shark2} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Reptile Study"</h1> <h4> PaintToolSAI - 2020</h4> <p>Studies of various reptiles</p> <h5>Click to see full image</h5>'
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
              '<h1>"radiation1"</h1> <h4> PaintToolSAI - 2019</h4> <p>Digital painting of a radiation victim</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.radiation1 + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1lFHI0z1YkLRjCXXlZ-yMv2kXMLLAZXZw/view?usp=sharing"
              target="_blank"
            >
              <Image src={Radiation1} />
            </a>
          </div>
        </div>
        {/* ROW 6 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Untitled"</h1> <h4> Oil on Canvas - 2009 </h4> <p>Study of several shark figures</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.clouds + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1p1IBbgG0ri6_ccYhl6xqyk8UP8ifA2F6/view?usp=sharing"
              target="_blank"
            >
              <Image src={Clouds} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Untitled"</h1> <h4> Oil on Canvas - 2009 </h4> <p>Study of several shark figures</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.plains + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1p1IBbgG0ri6_ccYhl6xqyk8UP8ifA2F6/view?usp=sharing"
              target="_blank"
            >
              <Image src={Plains} />
            </a>
          </div>
        </div>
        <ReactTooltip className={styles.toolTip} />
      </div>
    </>
  );
};

export default Paintings;
