import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
import { formatProduct } from "../../utils";

function ProductPage({ product }) {
  const router = useRouter();

  if (!product) {
    return <h1>404 Page not found</h1>;
  }

  return (
    <div className={styles.container}>
             <img src='/images/logo.jpg' alt={product.name} />
        <a href="/sreburni-prusteni/category" class={styles.previous}>
         назад
        </a>
        
        <a href="#" class="previous round">
        </a>
        <div className={styles.img}>
          <img src={product.image} alt={product.name} />
   
        
      </div>
      <div className={styles.name}>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.flex}>
        <div className={styles.price}>{product.price} </div>
        <div className={styles.sku}>{product.sku}</div>
      </div>
    </div>
  );
}

/**
 * Find the page by slug
 */
ProductPage.getInitialProps = ({ query }) => {
  // get the array with the products
  const products = require("../../products.json");

  const product = products.find(
    // check if the current product's slug
    // matches the slug in the query
    (currentProduct) => currentProduct.slug.trim() === query.slug.trim()
  );

  if (!product) return {};

  // pass the product to the page
  return {
    product: formatProduct(product),
  };
};

export default ProductPage;
