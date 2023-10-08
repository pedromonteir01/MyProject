import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/Header';

export default function Home() {
  return (
    <>
    <Header/>
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>É OS D</h1> 
        <h1>EV</h1>
      </div>

    </main>
    </>
  );
}
