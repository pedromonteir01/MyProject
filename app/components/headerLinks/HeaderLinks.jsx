import styles from '@/app/components/headerLinks/headerLinks.module.css'
import Link from 'next/link';

const HeaderLink = ({page}) => {
    return(
        <>
            <li>
                <Link href={'/'}>{page}</Link>
            </li>
        </>
    );
}

export default HeaderLink;