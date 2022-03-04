import styles from '../styles/Home.module.css';
import Link from 'next/link';

function SSRPage(props) {
  console.log('rodando /ssr');
  console.log('olha o pageProps ai', props);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="desafio">Desafio</span> do curso Tour pelo Next.js
        </h1>

        <p className={styles.description}>Mensagem: {props.mensagem}</p>

        <div className={styles.grid}>
          <Link href="/" prefetch={false}>
            <a className={styles.card}>
              <h2>&larr; Inicio</h2>
              <p>Voltar para o início</p>
            </a>
          </Link>
          <Link href="/ssg" prefetch={false}>
            <a className={styles.card}>
              <h2>SSG &rarr;</h2>
              <p>Static Site Generation</p>
            </a>
          </Link>
          <Link href="/isr" prefetch={false}>
            <a className={styles.card}>
              <h2>ISR &rarr;</h2>
              <p>Incremental Static Regeneration</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log('rodando getServerSideProps');

  return {
    props: {
      mensagem: 'Fui gerado para essa requisição',
    },
  };
};

export default SSRPage;
