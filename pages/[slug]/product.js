import { useRouter } from "next/router";
import styles from '../../styles/Product.module.css'

function ProductPage({ product }) {
  const router = useRouter();

  if (!product) {
    return <h1>404 Page not found</h1>;
  }

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <div className={styles.price}>{product.price}</div>
    </div>
  );
}

/**
 * Find the page by slug
 */
ProductPage.getInitialProps = ({ query }) => {
  // get the array with the products
  const products = require("../../public/products.json");

  const product = products.find(
    // check if the current product's slug
    // matches the slug in the query
    (currentProduct) => currentProduct.slug.trim() === query.slug.trim()
  );

  if(!product) return {};

  // pass the product to the page
  return {
    product: {
      ...product,
      price: product.price.toFixed(2) + " лв",
      image: `/images/${product.image.trim()}`
    },
  };
};

export default ProductPage;
