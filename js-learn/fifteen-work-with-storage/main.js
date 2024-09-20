import products from './products.js';
import renderProducts from './renderProducts.js'
import './productCart.js';

const catalogList = document.querySelector('.catalog-list');
const catalogItemTemplate = document.querySelector('#product').content;

renderProducts(products, 'item', catalogItemTemplate, catalogList, true, 'catalog__item');

const newFunc = (data) => {
    const { template: templateId, templateClass } = data; 

    if(!templateClass) {
        templateClass = 'catalog__item';
    }
}

newFunc({
    template: '#product',
    templateClass: 'catalog__item',

}) 