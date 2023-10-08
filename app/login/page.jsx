import styles from '@/app/Login/login.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Link from 'next/link';

const Login = () => {
    return(
        <>
        <Header/>
            <main className={styles.container}>
                <h1 style={{textTransform: 'uppercase'}}>Já está registrado?</h1>
                <article className={styles.login}>
                    <h2 style={{fontSize: 35}}>LOGIN</h2>

                    <section className={styles.form}>

                        <div className={styles.inputField}>
                            <label style={{fontSize: 20}} htmlFor="email">E-mail:</label>
                            <input type="email" name='email' placeholder='E-mail...' className={styles.inputS}/>
                        </div>

                        <div className={styles.inputField}>
                            <label style={{fontSize: 20}} htmlFor="password">Senha:</label>
                            <input type="password" name='password' className={styles.inputS}/>
                        </div>

                        <button className={styles.btnRegister}>Acessar</button>

                    </section>
                </article>
                <p style={{fontSize: 18}}>
                    Não tem uma conta? <Link href={'#'}>Cadastre-se!</Link>
                </p>
            </main>
        <Footer/>
        </>
    );
}

export default Login;