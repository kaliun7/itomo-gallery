// tyk se namira vsi4ko ob6to mejdy vsi4ki stranici 
import "../styles/globals.css";
import categories from "../categories.json";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="header-wrap">
        <a className="phoneNum">Tel: 0877228114</a>
      </header>
      <nav>
          <div className="opakovkaNaNav">
          <ul>
            <li>
            <button className="menu"><a href="http://localhost:3000/">Начало</a></button>
            </li>
            <li>
            <button className="menu"><a href="http://localhost:3000/zanas">За нас</a></button>
            </li>
            <li>
            <button className="menu"><a href="http://localhost:3000/contact">Контакт</a></button>
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
          </div>
        </nav>
      <main >
        <Component {...pageProps} />
      </main>
      <footer>
        <p>Foooooooter. !?</p>
      </footer>
    </div>
  );
}

export default MyApp;
