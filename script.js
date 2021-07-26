const monedaUno = document.getElementById('currency-one')
const monedaDos = document.getElementById('currency-two')

const montoUno = document.getElementById('amount-one');
const montoDos = document.getElementById('amount-two');

const rateEl = document.getElementById('rate')

const swapBtn = document.getElementById('swap-btn')

async function calcular(){
    const currencyOne = monedaUno.value;
    const currencyTwo = monedaDos.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`);
    const data = await response.json()


    const rate = data.rates[currencyTwo]

    rateEl.innerHTML = `
    1 ${currencyOne} = ${rate} ${currencyTwo}
    `

    montoDos.value = montoUno.value * rate
    

}

// eventos
monedaUno.addEventListener('change', calcular);
monedaDos.addEventListener('change', calcular)
montoUno.addEventListener('input', calcular)
montoDos.addEventListener('input', calcular)

swapBtn.addEventListener('click', () => {  
    // guardo en una variable temporal el valor de moneda uno para despues ser utilizado;
    const temp = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value = temp;
    calcular()
})

calcular()



