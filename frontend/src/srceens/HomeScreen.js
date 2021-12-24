import data from '../productsData.js';
import Rating from '../Rating.js';
const HomeScreen = {
  render: () => {
    const { products } = data;
    
    return `
    <h1 class="Productheading" >Available Products</h1>
    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product.id}">
            <img src="${product.image}" alt="${product.name}" />
            </a>
            <div class="product-brand">
            ${product.brand}
            </div>
            <div class="product-name">
              <a href="/#/product/${product.id}">
                ${product.name}
              </a>
            </div>
            <div class="product-rating">
          ${Rating.render({
            value: product.rating,
            text: `${product.numReviews} reviews`,
          })}
        </div>
        <div class="product-price">
          $${product.price}
        </div>
        </div>
      </li>`
        )
        .join('\n')}
    `;
  },
};
export default HomeScreen;
