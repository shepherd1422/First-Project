import formatPrice from "./formatPrice.js ";
import {addStorage}  from "./storage.js";
import { addToCart } from "./cart.js";

export default (products, template, targetEl) => {
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
       const clone = template.cloneNode(true);
       const button = clone.querySelector('.product-list__button');
       
       clone.querySelector('.product-list__name').textContent = product.name;
       clone.querySelector('.product-list__price').textContent = formatPrice(product.price);
       clone.querySelector('.product-list__image').src = product.image;
       button.dataset.id = product.id; 

       button.addEventListener('click', () => {
         addStorage('cart', product);
         addToCart(product);
       });

        fragment.append(clone);
    });

    targetEl.append(fragment);
};