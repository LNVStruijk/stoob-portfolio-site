import Google from "../../assets/svg/Google";
import styles from "./Shortcut.module.scss";
import Image from "next/image";
import SmilingDude from "../../public/images/SmilingDude.gif";
import doomGuy from "../../public/images/doomGuyAnim.gif";

const Shortcut = (props) => {
  // this is component so we want to make it constant
  //'props' is a parameter that you can change or smth
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {props.image === "image1" ? (
          <Image src={SmilingDude} width={100} height={100}/>
        ) :props.image === "image2" ? 
        (<Image src={doomGuy} width={100} height={100}/>):
        null }
      </div>

      <div className={styles.textContainer}>
        <h1>{props.name}</h1>
      </div>

      {/* it's okay to leave 'props' blank, this can be edited outside */}
    </div>
  );
};

export default Shortcut;
