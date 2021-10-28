import Google from "../../assets/svg/Google";
import styles from "./Shortcut.module.scss";
import Image from "next/image";
import SmilingDude from "../../public/images/smiling-dude.gif";
import DoomGuy from "../../public/images/doom-guy-anim.gif";
import AboutMeIcon from "../../public/images/shortcuts/about-me.gif";
import GalleryViewIcon from "../../public/images/shortcuts/gallery-view.gif";
import ContactMeIcon from "../../public/images/shortcuts/contact-me.gif";
import TypographyIcon from "../../public/images/shortcuts/typography.gif";
import PaintingsIcon from "../../public/images/shortcuts/paintings.gif";
import DoomLaugh from "../../public/images/shortcuts/doom-laugh.gif";
import PostersIcon from "../../public/images/shortcuts/posters.gif";
import OtherWorksIcon from "../../public/images/shortcuts/other-works.gif";

const Shortcut = (props) => {
  // this is component so we want to make it constant
  //'props' is a parameter that you can change or smth

  const iconSize = 100;

  // PLACE ALL "METHODS" BEFORE 'RETURN'
  
  // for defining a FUNCTION
    // const NAME = () => {
    //   do your mom heygottem
    // }

  // const openWindow = () => {
  //   console.log("window opened")
  // }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {props.image === "Featured" ? (
          <Image src={GalleryViewIcon} width={iconSize} height={iconSize} />
        ) : props.image === "Posters" ? (
          <Image src={PostersIcon} width={iconSize} height={iconSize} />
        ) : props.image === "AboutMe" ? (
          <Image src={AboutMeIcon} width={iconSize} height={iconSize} />
        ) : props.image === "ContactMe" ? (
          <Image src={ContactMeIcon} width={iconSize} height={iconSize} />
        ) : props.image === "Typography" ? (
          <Image src={TypographyIcon} width={iconSize} height={iconSize} />
        ) : props.image === "Paintings" ? (
          <Image src={PaintingsIcon} width={iconSize} height={iconSize} />
        ) : props.image === "Doom" ? (
          <Image src={DoomLaugh} width={iconSize} height={iconSize} />
        ) : props.image === "OtherWorks" ? (
          <Image src={OtherWorksIcon} width={iconSize} height={iconSize} />
        ) :null }
      </div>

      <div className={styles.textContainer}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Shortcut;
