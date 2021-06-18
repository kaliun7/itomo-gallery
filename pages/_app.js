import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header></header>
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer>
        <p>Foooooooter. !?</p>
      </footer>
    </div>
  );
}

export default MyApp


