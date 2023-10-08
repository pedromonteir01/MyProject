import styles from '@/app/Login/login.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Login = () => {
    return(
        <>
        <Header/>
            <main className={styles.container}>
                <h1>Já está registrado?</h1>
                <article className={styles.login}>
                    <h2>Login</h2>
                    
                    <section className={styles.form}>

                        <div className={styles.inputField}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name='email' placeholder='E-mail...' className={styles.inputS}/>
                        </div>

                        <div className={styles.inputField}>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name='password' className={styles.inputS}/>
                        </div>

                        <button className={styles.btnRegister}>Acessar</button>

                    </section>
                </article>
            </main>
        <Footer/>
        </>
    );
}

export default Login;