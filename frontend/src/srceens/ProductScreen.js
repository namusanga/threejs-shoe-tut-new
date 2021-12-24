import { parseRequestUrl } from '../utils.js';
import data from '../productsData.js';

const ProductScreen = {
  render: () => {
    const request = parseRequestUrl();
    // const { products } = data;
    return `
    <nav>
    </nav>
    <main class="main container">
    <div class="row">
      <!-- NIKE SHOE -->
      <div id="shoe-div" class="shoe">
        <div id="show-figure" class="shoe-figure"></div>

        <img
          id="shoe-img"
          class="shoe-img"
          src=${data.products[request.id].image}
          alt=""
        />
        <!-- <img class="shoe-img" src="./images/pic2.png" alt="" /> -->


        <div class="dots">
          <button
          id="dot-2"
        
          class="dot dot-color-2"
          ></button>
          <button
          id="dot-1"
        
          class="dot dot-color-1 active"
          ></button>
        </div>
     
      </div>
        
        <div class="info">
          <div class="threeicon"> 
            <img
              id="threedicon"
              class="threedicon not-active"
              src="../Jumia-3D-shoe/assests/images/icon-3d.png"
            />
        
         <!-- <button  >  -->
        
          <img  id="crossicon" class="crossicon not-active"  src="../Jumia-3D-shoe/assests/images/show-cross.png"/> 
        <!-- </button>  -->
             </div> 
        <!-- INFORMATION -->
        <div class="shoe-info">
          <span class="info-subtitle">${data.products[request.id].brand}</span>
          <h1 class="info-title">${data.products[request.id].name}</h1>
          <p class="info-description">
            Lorem ipsums Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Amet, laudantium nostrum ex rerum, foxrahes.
          </p>
        </div>

        <div class="info-down">
          <!-- SIZE -->
          <div class="size">
            <h3 class="size-title">Size</h3>
            <div class="size-content">
              <span class="size-total active">${data.products[request.id].stock[0].size}</span>
              <span class="size-total">${data.products[request.id].stock[1].size}</span>
              <span class="size-total">9</span>
            </div>
          </div>

          <!-- COUNT -->
          <div class="count">
            <h3 class="count-title">Count</h3>
            <div class="count-content">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
          </div>
        </div>

        <!-- PRICE -->
        <div class="price">
          <span class="price-title">$${data.products[request.id].price}</span>
          <a class="price-button">ADD TO CART</a> 
     
        </div>

  </main>
  `;
},
};
export default ProductScreen;
