import React from 'react'
import Tooltip from 'react-tooltip'
import Image from 'next/image'

import Droid from '../../public/images/typography-low-res/droid.png'
import Circuit from '../../public/images/typography-low-res/circuit.jpg'
import CenturyGothic from '../../public/images/typography-low-res/century-gothic.jpg'
import Spread1 from '../../public/images/typography-low-res/mag-spread-1.jpg'
import Spread2 from '../../public/images/typography-low-res/mag-spread-2.jpg'
import Spread3 from '../../public/images/typography-low-res/mag-spread-3.jpg'
import Spread4 from '../../public/images/typography-low-res/mag-spread-4.jpg'
import News1 from '../../public/images/typography-low-res/news-1.jpg'
import News2 from '../../public/images/typography-low-res/news-2.jpg'
import News3 from '../../public/images/typography-low-res/news-3.jpg'
import News4 from '../../public/images/typography-low-res/news-4.jpg'

import styles from './styles.module.scss'

const Typography = (props) => {
  const imgSize = 200

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          {/* ROW 1 */}
          <div
            data-tip={
              '<h1>"Droid Typeface Poster"</h1> <h4> Adobe Illustrator - 2016</h4> <p>Poster inspired by the "Droid" typeface</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.droid + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1peLdSfEPV8BGK1HwXIuzk06SElZ7ezs3/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Droid} alt='' />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Curcuit Typeface Poster"</h1> <h4> Adobe Illustrator - 2016</h4> <p>Custom-made typeface taken from computer circuitry</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.circuit + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1nmGKLAhqcddQUV1IK0U6XF88PsZIvQWI/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Circuit} alt='' />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Century Gothic Typeface Poster"</h1> <h4> PaintToolSAI - 2016</h4> <p>Poster inspired by the \'Century Gothic\' typeface</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.centuryGothic + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1kIAu-ferfKYU4d91S30j1a2fGgtD6sQW/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={CenturyGothic} alt='' />
            </a>
          </div>
        </div>
        {/* ROW 2 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Jazz Magazine 1"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup of a jazz magazine</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1m-4EJv6OrKhjwKd-NE3ggS6oZjUm9a4M/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Spread1} alt='' />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Jazz Magazine 2"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup of a jazz magazine</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1t7ihpVSYfkGGVYKWuhC2sxD2sUlw5_nH/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Spread4} alt='' />
            </a>
          </div>
        </div>
        {/* ROW 3 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              '<h1>"Jazz Magazine 3"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup of a jazz magazine</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1ItHRYer79X22cGEdOrNfPlDiofTulVPs/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Spread3} alt='' />
            </a>
          </div>
          <div
            data-tip={
              '<h1>"Jazz Magazine 4"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup of a jazz magazine</p> <h5>Click to see full image</h5>'
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1huptcC_LDnttdrunjY981d3vMlM16X4o/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={Spread2} alt='' />
            </a>
          </div>
        </div>
        {/* ROW 4 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              "<h1>\"Onion Newspaper 1\"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup for 'The Onion' Newspaper</p> <h5>Click to see full image</h5>"
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1h38UTnFDsSUWaPiWFLThil4WsuTqzgbv/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={News1} alt='' />
            </a>
          </div>
          <div
            data-tip={
              "<h1>\"Onion Newspaper 2\"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup for 'The Onion' Newspaper</p> <h5>Click to see full image</h5>"
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1ETau9EQM9bVjoGN1gMpzDk9G4tDLj6Eo/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={News2} alt='' />
            </a>
          </div>
        </div>
        {/* ROW 5 */}
        <div className={styles.flexRow}>
          <div
            data-tip={
              "<h1>\"Onion Newspaper 3\"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup for 'The Onion' Newspaper</p> <h5>Click to see full image</h5>"
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/1RSXmWzI2JyTkCyb4SLcjtquyrVo-gnHK/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={News3} alt='' />
            </a>
          </div>
          <div
            data-tip={
              "<h1>\"Onion Newspaper 4\"</h1> <h4> Adobe InDesign - 2016</h4> <p>Mockup for 'The Onion' Newspaper</p> <h5>Click to see full image</h5>"
            }
            data-html={true}
            className={styles.Spread1 + ' ' + styles.images}
          >
            <a
              href='https://drive.google.com/file/d/13oD7oqb_6Rz6MYODAi6DhSqfhrYfQsPh/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={News4} alt='' />
            </a>
          </div>
        </div>
        <Tooltip className={styles.toolTip} />
      </div>
    </>
  )
}

export default Typography
