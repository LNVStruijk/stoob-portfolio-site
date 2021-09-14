import styles from "./ContactMe.module.scss";
import Image from "next/image";
import Passport from "../../public/images/passport.png";
import Desert from "../../public/images/desert.gif";
import Eagle from "../../public/images/eagle-loop.gif";

const contactMe = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.passport}>
          <Image src={Passport} />
        </div>
        <div className={styles.desert}>
          <Image src={Desert} />
        </div>
        <div className={styles.eagle}>
          <Image src={Eagle} />
        </div>
      </div>
    </>
  );
};

export default contactMe;
