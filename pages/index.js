// only for the HOMEPAGE
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Home({ categories }) {
  console.log(styles);

  // return (
  //   <div className={styles.asdasd}>
  //     <img className={styles.glavnaKartinka} src='/images/kartinka.jpg'></img>
  //     {/* <img className={styles.background} src='/images/бацкгроунд.jpg'></img> */}
  //     <div className={styles.kutiq}>
  //       <div className={styles.categoryPanel}><img className={styles.image1} src='/images/17grv.jpg'></img><h1><p>Сребърни</p><p>гривни</p>
  //        </h1></div>
  //       <div className={styles.categoryPanel}><img className={styles.image1} src='/images/17pr.jpg'></img></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //       <div className={styles.categoryPanel}></div>
  //     </div>
  //     <h1>Homepage</h1>
  //     <p>All categories</p>
  //     <ul>
  //       {categories.map((category) => {
  //         return (
  //           <li key={category.slug}>
  //             <Link href={`/${category.slug}/category`}>
  //               <a>{category.name}</a>
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>

  return (
    <div className={styles.asdasd}>
      <img className={styles.glavnaKartinka} src='/images/kartinka.jpg'></img>
     
        <div className={styles.kutiq}>
          {categories.map((category) => <Link href={`/${category.slug}/category`}>
            <div className={styles.categoryPanel}>{category.name} <Link href={`/${category.slug}/category`}>
            <div className={styles.categoryPanel}>{category.img}</div>
          </Link></div>
          </Link>)}
          
        </div>
        <div className={styles.kutiq}>
          {categories.map((category) => <Link href={`/${category.slug}/category`}>
            <div className={styles.categoryPanel}>{category.img}</div>
          </Link>)}
        </div>
       
      
      <h1>Homepage</h1>
      <p>All categories</p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link href={`/${category.slug}/category`}>{category.name}</Link>
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
