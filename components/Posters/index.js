import styles from "./Posters.module.scss";
import Image from "next/image";
import Omikuji from "../../public/images/posters-low-res/omikuji.png";
import Orange from "../../public/images/posters-low-res/orange.png";
import Shining from "../../public/images/gallery-low-resolution/shining-poster-low.png";
import Blood from "../../public/images/gallery-low-resolution/blood-poster-low.png";
import Whiplash from "../../public/images/gallery-low-resolution/whip-poster-low.png";
import OldBoy from "../../public/images/gallery-low-resolution/old-poster-low.png";
import Vertigo from "../../public/images/gallery-low-resolution/vertigo-poster-low.png";
import ReactTooltip from "react-tooltip";
import React from "react";

const Posters = (props) => {
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
              '<h1>"Omikuji Event Poster"</h1> <h4> Adobe Illustrator - 2017 </h4> <p>Campaign poster for an Organization event</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.omikuji + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/11yo2IWir46g3O8dINxaPUm6SXegbnYh9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Omikuji} />
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
              rel="noreferrer"
            >
              <Image src={Orange} />
            </a>
          </div>
          {/* <div
            data-tip={
              "<h1>\"Century Gothic Typeface Poster\"</h1> <h4> PaintToolSAI </h4> <p>Poster inspired by the 'Century Gothic' typeface</p> <h5>Click to see full image</h5>"
            }
            data-html={true}
            className={styles.punShirts + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1kIAu-ferfKYU4d91S30j1a2fGgtD6sQW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={PunShirts} />
            </a>
          </div> */}
        </div>
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Shining Poster"</h1> <h4> Adobe Illustrator - 2016</h4> <p>Poster of Kubrick\'s Shining (1980) using only type</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.shining + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1U1FIcQh0mCDIylKcvw9pM2hrVlLzyI2t/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Shining} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"There Will Be Blood Poster"</h1> <h4> Adobe Photoshop - 2017</h4> <p>Poster inspired by Thomas Anderson\'s There Will Be Blood (2007)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.blood + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1s_HggDR7-sRF1A4GmpZDzxQevjPhkv4g/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Blood} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Whiplash"</h1> <h4> Adobe Photoshop - 2017</h4> <p>Poster inspired by Chazelle\'s Whiplash (2014)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.whiplash + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1EOo4Ul8v_Tg8c5z1nmKqEAVSvsJ8F2bc/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Whiplash} />
            </a>
          </div>
        </div>
        {/* ROW 3 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Vertigo Poster"</h1> <h4> Adobe Photoshop - 2017</h4> <p>Poster inspired by Hitchcock\'s (1958)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.vertigo + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1zmxn3moPF8Gm3UOHw2Jjru4cmN6cpTix/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Vertigo} />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Oldboy Poster"</h1> <h4> Adobe Photoshop - 2017</h4> <p>Inspired by Chan-wook\'s Oldboy (2003)</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.oldboy + " " + styles.images}
          >
            <a
              href="https://drive.google.com/file/d/1JFpIzT5wW9YVpVsm0lZcKperEFlXZ6Tb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={OldBoy} />
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

export default Posters;
