import Link from "next/link";

function CategoryPage({ category }) {
  if (!category) {
    return <h1>404 category not found</h1>;
  }

  // check the browser console
  console.log("Category", category);

  return (
    <div>
      <h1>
        <img width={500} src={category.img} />
      </h1>
      All Products in this category:
      <ul>
        {category.products.map((product) => {
          return (
            <li key={product.slug}>
              <Link href={`/${product.slug}/product`}>
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Find the page by slug
 */
CategoryPage.getInitialProps = ({ query }) => {
  // get the array with the categories
  const categories = require("../../categories.json");
  const products = require("../../products.json");

  const category = categories.find(
    // check if the current product's slug
    // matches the slug in the query
    (currentCategory) => currentCategory.slug.trim() === query.slug.trim()
  );

  if (!category) return {};

  // pass the category to the page
  return {
    category: {
      ...category,
      products: products.filter(
        (product) => minify(product.category) === minify(category.id)
      ),
      img: `/images/category-images/${category.img.trim()}`,
    },
  };
};

const minify = (str) => str.trim().toLowerCase();

export default CategoryPage;
