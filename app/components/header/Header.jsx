import styles from '@/app/components/header/header.module.css'
import HeaderLink from '../headerLinks/HeaderLinks';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.container}>
            <Image src={'/Logo-test.png'} width={100} height={100} alt='logo'/>
            <ul className={styles.listContainer}>
                <HeaderLink page={'Home'} link={'/'}/>
                <HeaderLink page={'About Us'} link={'#'}/>
                <HeaderLink page={'Categories'} link={'#'}/>
                <HeaderLink page={'About Site'} link={'#'}/>
                <HeaderLink page={'Login'} link={'/login'}/>
            </ul>
        </header>
    );
}

export default Header;