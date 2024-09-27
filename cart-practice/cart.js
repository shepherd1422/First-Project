import formatPrice from "./formatPrice.js";

export const addToCart = (product) => {
    const targetEl = document.querySelector('.product-cart__list');
    const template = document.querySelector('.product-cart__template').content.querySelector('.product-cart__item');

    const clone = template.cloneNode(true);
    clone.querySelector('.product-cart__image').src = product.image;
    clone.querySelector('.product-cart__name').textContent = product.name;
    clone.querySelector('.product-cart__price').textContent = formatPrice(product.price)

    targetEl.append(clone);
}