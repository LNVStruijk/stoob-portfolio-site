import Google from "../../assets/svg/Google";
import styles from "./Shortcut.module.scss";

const Shortcut = (props) => {
  // this is component so we want to make it constant
  //'props' is a parameter that you can change or smth
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        { props.image === "google" ? (
          <Google height={'100%'}/>
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
