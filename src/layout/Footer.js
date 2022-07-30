import { FaGoogle, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from '/home/hadassa/Música/react-page/costs/src/layout/Footer.module.css';

function Footer() {

    return(
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaGoogle />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
        </div>
    )
}

export default Footer;