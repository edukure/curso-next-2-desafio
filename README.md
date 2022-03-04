# Desafio do curso Tour pelo Next.js

## Objetivo

- Ver na prática como as props chegam na página;
- Entender a ordem de execução de uma aplicação Next.js;

## Sobre o projeto

Foram criadas paginas para demonstrar o SSR, SSG e ISR (com `revalidate` de 10 segundos). Cada página, seus métodos de _pre-rendering_ e os componentes de `_app.js` e `_document.js` possuem um `console.log` indicando quando eles são executados.

## Instruções

### Setup

- clone o projeto e instale as dependências
- execute `npm run build` para que o ISR e SSG funcionem em modo de produção
- execute o projeto com `npm run start`

### Conteúdo

- Preste atenção nos `console.log` para determinar a ordem de execução das funções
- Quais `console.log` rodam do lado do cliente e quais rodam no lado do servidor?
- Quais `console.log` são disparados quando a pagina `/isr` é acessada pela primeira vez? Faça uma requisição nova em um tempo menor que 10 segundos e outra após.
- Verifique se o `props` retornado por `getStaticProps` ou `getServerSideProps` são iguais ao `pageProps` do `_app.js`
