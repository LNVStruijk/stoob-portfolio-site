import Google from '../../assets/svg/Google';
import Image from 'next/image';
import ShortcutImg from '../../public/msagent-1.png';
import styles from './Shortcut.module.scss';

const Shortcut = (props) => {
    // this is component so we want to make it constant 
    //'props' is a parameter that you can change or smth
    return (
        <div className = {styles.container}>
            <div className={styles.logo}>
                <Image src={ShortcutImg} alt="Vercel Logo" width={"100%"} height={"100%"} />
            </div>
            
            <h1 className={styles.name}>{props.shortcutName}</h1> 
            {/* it's okay to leave 'props' blank, this can be edited outside */}
            
            {/* <img src="pic_trulli.jpg" alt="Italian Trulli"> */}

        </div>
    )
}

export default Shortcut;