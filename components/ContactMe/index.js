import styles from "./ContactMe.module.scss";
import Image from "next/image";
import React from "react";
import FullPassport from "../../public/images/contact-me-images/passport-full-fixed.gif";

const contactMe = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.passportContainer}>
          {/* <div className={styles.passport}>
            <Image src={Passport} />
            <div className={styles.desert}>
              <Image src={Desert} layout={"responsive"} />
            </div>
          </div> */}
          <div className={styles.fullPassport}>
            <Image src={FullPassport}/>
          </div>
        </div>
        {/* <div className={styles.eagle}>
          <Image src={Eagle} />
        </div> */}
      </div>
    </>
  );
};

export default contactMe;
