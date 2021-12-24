import HomeScreen from './srceens/HomeScreen.js';
import ProductScreen from './srceens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
import Error404Screen from './srceens/Error404Screen.js';
import { productDetailsFunc } from './Jumia-3D-shoe/index.js';

const main = document.getElementById('main-container');
const carousel = document.getElementById("carousel")
const footer = document.querySelector(".footer")

  
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.toggle("show");
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};



//THE ROUTES THEMSELVES
const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};


//WEBSITE ROUETR CONIFGURATION
const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
  (request.resource ? `/${request.resource}` : '/') +
  (request.id ? '/:id' : '') +
  (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  
  //PRODUCT DETAILS PAGE CONFIG
  if (request.id) {
    //REMOVING CAROUSEL ON PRODUCT DETAILS PAGE
    carousel.classList.add('hidden')
    console.log(request.id)
    setTimeout(() => {
      productDetailsFunc()
      threeConfig()
      // console.log(document.querySelector(".product-brand"))
    }, 8000)
    
  }else {
  
  //REMOVING CAROUSEL .hidden FROM CAROUSEL 
  carousel.classList.remove('hidden')
  console.log('-->ON HOMEPAGE')
}

  main.innerHTML = screen.render();
};

function threeConfig() {
  console.log("this is the first message")
  console.log(document.querySelector(".main"))
  console.log(document.getElementById("shoe-div"))
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
