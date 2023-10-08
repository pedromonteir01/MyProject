import styles from '@/app/components/header/header.module.css'
import HeaderLink from '../headerLinks/HeaderLinks';

const Header = () => {
    return (
        <header className={styles.container}>
            <ul>
                <HeaderLink page={'Home'} />
                <HeaderLink page={'About Us'} />
                <HeaderLink page={'Categories'} />
                <HeaderLink page={'About Site'} />
            </ul>
        </header>
    );
}

export default Header;