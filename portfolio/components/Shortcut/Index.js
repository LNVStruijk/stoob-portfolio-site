import Google from "../../assets/svg/Google";
import styles from "./Shortcut.module.scss";
import Image from "next/image";
import SmilingDude from "../../public/images/smiling-dude.gif";
import DoomGuy from "../../public/images/doom-guy-anim.gif";

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
        {props.image === "image1" ? (
          <Image src={SmilingDude} width={iconSize} height={iconSize} />
        ) : props.image === "image2" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : props.image === "image3" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : props.image === "image4" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : props.image === "image5" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : props.image === "image6" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : props.image === "image7" ? (
          <Image src={DoomGuy} width={iconSize} height={iconSize} />
        ) : null }
      </div>

      <div className={styles.textContainer}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Shortcut;
