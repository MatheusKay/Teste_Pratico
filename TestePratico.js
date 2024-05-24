//  Funções para fazer o calculo e converter o desconto que esta em porcentagem(%) e transforma
// em valores reais ja com o desconto. Alem de substituir o valor das parcelas no header float
// pelo valor do desconto.

const pricesDefault = document.querySelector('.sc-fqkvVR.fDkgrD.sc-hYmls.ipvIAj');
const spanDefault = pricesDefault.querySelectorAll('span');
const priceDefault = pricesDefault.querySelector('[data-testid = "price-value"]');

const showcasePrice = document.querySelector('[data-testid="showcase-price"]')

const discountCalc = () => {
    const textSpan = spanDefault[spanDefault.length - 1].innerText;
    const discountSpan = parseFloat(textSpan.slice(1, textSpan.indexOf('%')));
    
    const textPrice = priceDefault.innerText;
    const priceInitial = textPrice.slice(3);
    
    const formatPrice = priceInitial.replace(/\./g, '');
    const priceDecimal = formatPrice.replace(',', '.');
    const convertPrice = parseFloat(priceDecimal)
    
    const discount = (convertPrice * discountSpan) / 100;
    const currentPrice = convertPrice - discount.toFixed(2);

    return currentPrice
}

const processPrices = () => {
    const price = discountCalc()
    
    spanDefault[spanDefault.length - 1].style.cssText = 
    'opacity: 0;';
    
    let discountSpan = pricesDefault.querySelector('.new-price')
    let newDiscount = showcasePrice.querySelector('small')
    
    if (!discountSpan) {
        discountSpan = document.createElement('span');
        discountSpan.classList.add('new-price')
        discountSpan.style.cssText = 
            'color: rgb(89, 192, 11);'
        discountSpan.textContent = `(R$ ${price.toLocaleString()} de desconto)`
        spanDefault[spanDefault.length - 1].insertAdjacentElement('beforebegin', discountSpan);
    } else {
        discountSpan.textContent = `(R$ ${price.toLocaleString()} de desconto)`
    }

    newDiscount.textContent = `(R$ ${price.toLocaleString()} de desconto)`
    newDiscount.style.cssText = 
        'color: rgb(89, 192, 11);'
};

// Função para monitorar a arvore DOM e seus filhos para atualizar as funções de calculo e conversão
// e atualizar os valoes.

const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            discountCalc();
            processPrices();
        }
    }
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, {
    childList: true,
    subtree: true
});

processPrices();


//  Função para fazer alterações no conjunto de elementos do Site, 
// sendo eles: Botão para adicionar a sacola, Botão para comprar o produto.
//  Alem das alterações feitas na barra que aparece com o scroll: Alteração na cor do texto com o preço,
// e no Botão de comprar 

const bagButton = document.querySelector('[data-testid="bagButton"]')
const buyButton = document.querySelector('[data-testid="buyButton"]')
const floatButton = document.querySelector('[data-testid="float-button"]')
const floatPrice = document.querySelector('.sc-fqkvVR.diFZiC')

const mudarButton = () => {
    const newBuyButton = buyButton.cloneNode(true)

    bagButton.style.cssText = 
        'display: none;';

    buyButton.style.cssText = 
        'background-color: rgb(0, 134, 255);';
    newBuyButton.style.cssText = 
    'background-color: rgb(0, 134, 255);';

    floatButton.style.cssText = 
        'display: none;';
        
    floatButton.insertAdjacentElement('beforebegin', newBuyButton)
    

    floatPrice.style.cssText = 
        'color: rgb(0, 134, 255);';
}

mudarButton();