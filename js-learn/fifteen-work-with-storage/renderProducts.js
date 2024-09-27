import { addProductToCart } from "./productCart.js";

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('Product');

    if(isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function(attr) {
            node.setAttribute(attr.name, attr.value);
        });
        node.classList.add(templateClass);

        productEl = node;
    }

    products.forEach(product => {
        const  itemEl = productEl.cloneNode(true);
        const  imageEl = itemEl.querySelector('.product__img');
        const  titleEl = titleEl.querySelector('.product__title');
        const descriptionEl = descriptionEl.querySelector('.product__description');
        const linkEl = linkEl.querySelector('.product__link');
        const tagEl = tagEl.querySelector('.product__tag');
        const priceEl = priceEl.querySelector('.product__price');
        const compoundEl = compoundEl.querySelector('.product__compound');
        const miniTitleEl = miniTitleEl.querySelector('.product__mini-tile');
        const button = itemEl.querySelector('.product__button');
        const {id, tag, name, image, description, link, price, compound} = product;
        
    })
}