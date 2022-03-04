import styles from '../styles/Home.module.css';
import Link from 'next/link';

function SSGPage(props) {
  console.log('rodando /ssg');
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
          <Link href="/ssr" prefetch={false}>
            <a className={styles.card}>
              <h2>SSR &rarr;</h2>
              <p>Server Side Rendering</p>
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

export const getStaticProps = async () => {
  console.log('rodando getStaticProps');
  return {
    props: {
      mensagem: 'Fui gerado no build',
    },
  };
};

export default SSGPage;
