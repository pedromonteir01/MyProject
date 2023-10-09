'use client'
import styles from '@/app/Login/login.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Link from 'next/link';
import { useState } from 'react';
import Input from '../components/input/Input';
import users from '@/data/users/users';

const Login = () => {
    let empty = '';

    const [email, setEmail] = useState(empty);
    const [password, setPassword] = useState(empty);
    const [aux, setAux] = useState(null);

    const verify = () => {
        const userslist = users;

        userslist.map((user) => (
            (email == user.email) && (
                user.password == password ? setAux(true) : setAux(null)
            )
        ))

        return aux;
    }

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
                            <Input type={'email'} name={'email'} value={email} onChange={setEmail}/>
                        </div>

                        <div className={styles.inputField}>
                            <label style={{fontSize: 20}} htmlFor="password">Senha:</label>
                            <Input type={'password'} name={'password'} value={password} onChange={setPassword}/>
                        </div>

                        <button className={styles.btnRegister} onClick={verify}>Acessar</button>
                       {
                        verify() ? alert('ok') : alert('not')
                       }
                       {
                        setAux(false)
                       }

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