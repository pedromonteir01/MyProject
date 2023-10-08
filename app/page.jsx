import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.titletext}>É OS D</h1> 
        <h1>EV</h1>
      </div>

      <article>
        <section>
          <h2>OLÁ</h2>
        </section>
      </article>

    </main>
    <Footer/>
    </>
  );
}
