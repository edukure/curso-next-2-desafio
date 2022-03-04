import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log('rodando _app.js');
  console.log('pageProps', pageProps);

  return <Component {...pageProps} />;
}

export default MyApp;
