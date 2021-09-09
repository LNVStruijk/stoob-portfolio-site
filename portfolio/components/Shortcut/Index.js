import Google from "../../assets/svg/Google";
import styles from "./Shortcut.module.scss";
import Image from "next/image";
import SmilingDude from "../../public/images/SmilingDude.gif";

const Shortcut = (props) => {
  // this is component so we want to make it constant
  //'props' is a parameter that you can change or smth
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        { props.image === "google" ? (
          // <Google height={'100%'}/>
          <Image src={SmilingDude} alt={"dude"} width={50} height={50}/>
        ) : (
          null
        )}
        
      </div>

      <h1>{props.name}</h1>
      {/* it's okay to leave 'props' blank, this can be edited outside */}
    </div>
  );
};

export default Shortcut;
