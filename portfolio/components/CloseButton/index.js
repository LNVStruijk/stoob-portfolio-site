import styles from "./CloseButton.module.scss";

const CloseButton = (props) => {
  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.XBox}>
          <h3>X</h3>
        </div>
      </div>
    </>
  );
};

export default CloseButton;
