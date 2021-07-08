// only for the HOMEPAGE
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Home({ categories }) {
  console.log(styles);

  return (
    <div className={styles.asdasd}>
      <h1>Homepage</h1>
      <p>All categories</p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link href={`/${category.slug}/category`}>
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Home.getInitialProps = () => {
  return {
    categories: require("../categories.json"),
  };
};

export default Home;
