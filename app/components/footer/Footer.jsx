import styles from '@/app/components/footer/footer.module.css'
import Link from 'next/link';
import { BsInstagram, BsWhatsapp, BsFacebook } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.info}>
                <h2 className={styles.title}>LOREM IPSUM</h2>
                <span>SLOGAM BLOG</span>
                <span>TERMS OF SERVICE</span>
            </div>

            <div className={styles.contact}>
                <p>Contacts</p>

                <Link href={'#'} className={styles.links}>
                    <BsInstagram />
                    Instagram
                </Link>

                <Link href={'#'} className={styles.links}>
                    <BsFacebook />
                    Instagram
                </Link>

                <Link href={'#'} className={styles.links}>
                    <BsWhatsapp />
                    Whatsapp
                </Link>

            </div>

            <div className={styles.form}>

                <div className={styles.inputField}>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" name='email' placeholder='Email...' className={styles.inputS} />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="msg">MENSAGEM:</label>
                    <textarea name='msg' placeholder='Mensagem...' className={`${styles.inputS} + ${styles.inarea}`} />
                </div>
                <button className={styles.btn}>SUBSCRIBE</button>

            </div>

            <div>

            </div>
        </footer>
    );
}

export default Footer;