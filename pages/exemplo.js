function Exemplo(props) {
  return <div>{JSON.stringify(props, null, 2)}</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      curso: 'Next.js',
      instrutor: 'Dev Soutinho',
    },
  };
};

export default Exemplo;
