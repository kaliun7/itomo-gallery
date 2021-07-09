import "../styles/globals.css";
import categories from "../categories.json";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a className="menu" href="">Начало</a>
            </li>
            <li>
              <a className="menu" href="">За нас</a>
            </li>
            <li>
              <a className="menu" href="">Контакт</a>
              <div class="dropdown">
                <button className="dropbtn">Категории</button>
                <div className="dropdown-content">
                  {categories.map((category) => {
                    return (
                      <a className="pada6tiTextove" href={`/${category.slug}/category`}>{category.name}</a>
                    );
                  })}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer>
        <p>Foooooooter. !?</p>
      </footer>
    </div>
  );
}

export default MyApp;
