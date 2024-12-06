const renderCurrencies = (data, str) => {
    const ul = document.querySelector('.currency-list');
    const rates = data.payload.rates;

    rates.forEach((rate) => {
        const li = document.createElement('li');
        li.innerHTML = `Из ${rate.fromCurrency.name} - в ${rate.toCurrency.name}<br>Покупка: ${rate.buy}
        <br>Продажа: ${rate.sell}`; 
        ul.appendChild(li);
    })

    console.log(str);
    
}










const fetchParams = async (url) => {
    const response = await fetch(url);

    let data = await response.json();
    return data;   
}
 















const dataCatalogProducts = fetchParams('https://api.tinkoff.ru/v1/currency_rates?from=USD&to=RUB');
dataCatalogProducts.then((products) => renderCurrencies(products, 'валюта'));
 
