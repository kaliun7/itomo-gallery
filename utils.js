export const formatProduct = (product) => {
    return  {
        ...product,
        price: product.price.toFixed(2) + " лв",
        image: `/images/${product.image.trim()}`,
      }
}