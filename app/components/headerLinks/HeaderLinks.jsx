import styles from '@/app/components/headerLinks/headerLinks.module.css'
import Link from 'next/link';

const HeaderLink = ({page, link}) => {
    return(
        <>
            <li>
                <Link className={styles.linkStyle} href={link}>{page}</Link>
            </li>
        </>
    );
}

export default HeaderLink;